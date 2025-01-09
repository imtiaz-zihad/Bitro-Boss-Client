import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../assets/hooks/useAxiosSecure";
import useCart from "../../../assets/hooks/useCart";
import useAuth from "../../../assets/hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


// import toast from "react-hot-toast";

const CheckoutForm = () => {
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState("");
  const [transitionId, setTransactionId] = useState("");
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const navigate = useNavigate();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const elements = useElements();
  const { user } = useAuth();
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    ///
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error", confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        //
        console.log("Transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);


        //now save the payment in the database 
        const payment = {
          email: user?.email,
          price: totalPrice,
          transitionId: paymentIntent.id,
          data: new Date(),
          cartIds: cart.map(item => item._id),
          menuItemIds: cart.map(item => item.menuId),
          status: 'pending' 
        }

        const res =await axiosSecure.post('/payments',payment)
        console.log('Payment saved',res.data);
        refetch();
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Thank You for your order",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/payment')
        }
      }
    }
  };
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Payment Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            marginBottom: "15px",
            padding: "10px",
            border: "1px solid #e0e0e0",
            borderRadius: "4px",
            backgroundColor: "#fff",
          }}
        >
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          style={{
            width: "100%",
            padding: "10px 15px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: stripe ? "#4CAF50" : "#ccc",
            border: "none",
            borderRadius: "4px",
            cursor: stripe ? "pointer" : "not-allowed",
            transition: "background-color 0.3s",
          }}
        >
          {stripe ? "Pay Now" : "Loading..."}
        </button>
        {/* {error && toast.error(error.message)} */}
        <p className="text-red-500 text-center">{error}</p>
        {transitionId && (
          <p className="text-green-500">Your Transaction id:{transitionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
