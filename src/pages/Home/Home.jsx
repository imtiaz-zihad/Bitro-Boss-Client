import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import ChefRecommend from "./ChefRecommend";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Show from "./Show";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Show />
      <PopularMenu />
      <CallUs />
      <ChefRecommend />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
