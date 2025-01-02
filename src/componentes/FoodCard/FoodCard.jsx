
import Swal from "sweetalert2";
import useAuth from "../../assets/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


/* eslint-disable react/prop-types */
const FoodCard = ({ item }) => {
  const {user} =useAuth();
  const navigate = useNavigate();
  const location = useLocation();



  const { name, image, price, recipe,_id} = item;
  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user?.email,
        name,
        image,
        price
      }
      axios.post('http://localhost:5000/carts',cartItem).then(res =>{
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    }else{
      //
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not Login",
        footer: '<a href="/login">Go for login</a>'
      }).then((result)=>{
        if(result.isConfirmed){
          navigate('/login',{state:{from: location}})
        }
      })
    }
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute mr-4 mt-4 px-4 right-0 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
