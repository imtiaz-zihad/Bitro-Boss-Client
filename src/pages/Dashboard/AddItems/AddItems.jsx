import { useForm } from "react-hook-form";
import SectionTitle from "../../../componentes/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle heading={"add an item"} subHeading={"What's new"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Recipe name*</span>
              </div>
              <input
                {...register("name")}
                type="text"
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
                  {...register("category",{ required: true }) }
                  className="select select-bordered w-full "
                >
                  <option disabled selected>
                    Select a Category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">pizza</option>
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
                  {...register("price",{ required: true }) }
                  type="number"
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
                {...register("recipe",{ required: true }) }
                className="textarea textarea-bordered h-24"
                placeholder="Recipe details"
              ></textarea>
            </label>
          </div>
          <div className="my-6">
            <input
                {...register("image",{ required: true }) }
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Item <FaUtensils className="ml-4"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
