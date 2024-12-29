import Banner from "./Banner";
import CallUs from "./CallUs";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Show from "./Show";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Show />
      <PopularMenu />
      <CallUs />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
