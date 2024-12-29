import SectionTitle from "../../componentes/SectionTitle/SectionTitle";

import featured from "../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
  return (
    <div className="featured-item text-white pt-10 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 ">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            est voluptates provident voluptatem quos a odit eos non, vero odio
            delectus molestias eveniet quas veritatis ut aliquam sint sit rerum
            reprehenderit doloribus dolore asperiores harum? Eius accusantium
            officiis dolorum sequi nam, libero impedit, quod maxime fugiat sint,
            eligendi animi sunt.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
