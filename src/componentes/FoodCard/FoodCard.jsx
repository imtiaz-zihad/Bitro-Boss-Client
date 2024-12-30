/* eslint-disable react/prop-types */
const FoodCard = ({item}) => {

    const {name,image,price,recipe} = item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="absolute mr-4 mt-4 px-4 right-0 bg-slate-900 text-white">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
