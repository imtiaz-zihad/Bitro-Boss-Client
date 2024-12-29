import SectionTitle from "../../componentes/SectionTitle/SectionTitle";
import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
const ChefRecommend = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-28">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="h-[200px]">
            <img src={img1} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary uppercase border-0 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="h-[200px]">
            <img src={img1} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary uppercase border-0 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="h-[200px]">
            <img src={img1} alt="Shoes" className="w-full" />
          </figure>
          <div className="card-body text-center">
            <h2 className="text-2xl">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary uppercase border-0 ">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommend;
