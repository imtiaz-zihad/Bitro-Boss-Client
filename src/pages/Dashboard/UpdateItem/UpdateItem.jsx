import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../assets/hooks/useAxiosPublic";
import useAxiosSecure from "../../../assets/hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMG_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(false); // Add loading state

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true); // Start loading

    try {
      // Upload image to image hosting and get the image URL
      const imageFile = { image: data.image[0] };
      const res = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        // Now send the data to the menu item
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseInt(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };

        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

        if (menuRes.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} updated to the menu`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Error updating menu item:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <SectionTitle
        heading={"Update Item"}
        subHeading={"Refresh Information"}
      ></SectionTitle>
      <div>
        {loading ? ( // Show loading spinner or message
          <div className="flex justify-center items-center h-64">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span className="visually-hidden"></span>
            </div>
            <p className="ml-4 text-lg font-semibold">Uploading...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="form-control w-full my-6">
                <div className="label">
                  <span className="label-text">Recipe name*</span>
                </div>
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={name}
                  placeholder="Recipe name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="flex gap-6 mb-6">
              {/* Category */}
              <div className="w-1/2">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Select Category*</span>
                  </div>
                  <select
                    defaultValue={category}
                    {...register("category", { required: true })}
                    className="select select-bordered w-full "
                  >
                    <option disabled selected value={"default"}>
                      Select a Category
                    </option>
                    <option value="salad">Salad</option>
                    <option value="pizza">Pizza</option>
                    <option value="soup">Soup</option>
                    <option value="dessert">Dessert</option>
                    <option value="drinks">Drinks</option>
                  </select>
                </label>
              </div>
              {/* Price */}
              <div className="w-1/2">
                <label className="form-control w-full ">
                  <div className="label">
                    <span className="label-text">Price*</span>
                  </div>
                  <input
                    {...register("price", { required: true })}
                    type="number"
                    defaultValue={price}
                    placeholder="Price"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            {/* Description */}
            <div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Recipe details</span>
                </div>
                <textarea
                  {...register("recipe", { required: true })}
                  defaultValue={recipe}
                  className="textarea textarea-bordered h-24"
                  placeholder="Recipe details"
                ></textarea>
              </label>
            </div>
            <div className="my-6">
              <input
                {...register("image", { required: true })}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <button className="btn" disabled={loading}>
              {loading ? "Updating..." : "Update menu Item"}{" "}
              {!loading && <FaUtensils className="ml-4" />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateItem;
