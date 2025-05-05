import React from "react";
import Product from "./Product";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <section className="max-w-[85%] mx-auto">
      <Product />
      <AboutUs />
    </section>
  );
};

export default Home;
