import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import OurService from "../OurService/OurService";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Products />
      <Reviews />
      <OurService />
      <Footer />
    </div>
  );
};

export default Home;
