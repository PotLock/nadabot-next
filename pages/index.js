import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center top-section relative overflow-clip">
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -left-[23rem] top-0"
          alt="bg-eff"
        />
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -right-[20rem] rotate-[40deg] top-0"
          alt="bg-eff"
        />
        <div className="container px-10 max-md:px-5">
          <Navbar />
          <Hero />
          <div className="text-7xl max-lg:text-5xl max-md:text-3xl max-[540px]:text-xl my-14 text-center">
            Coming Soon
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
