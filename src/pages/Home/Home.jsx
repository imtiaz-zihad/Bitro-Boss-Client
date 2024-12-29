import Banner from "./Banner";
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
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;
