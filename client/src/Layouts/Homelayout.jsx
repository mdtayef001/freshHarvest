import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Homelayout = () => {
  return (
    <>
      <header className="bg-[url(./assets/hero_bg.png)] bg-no-repeat bg-cover">
        <Navbar />
        <Banner />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Homelayout;
