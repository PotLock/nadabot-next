import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Status from "../components/Status";
import DappsCards from "../components/dappsCards";
import StampsLibrary from "../components/StampsLibrary";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-x-clip">
      <div className="top-section relative flex flex-col items-center overflow-clip">
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -left-[23rem] top-0"
          alt="bg-eff"
        />
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -right-[20rem] top-0 rotate-[40deg]"
          alt="bg-eff"
        />
        <div className="container px-10 max-md:px-5">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Status />
      <DappsCards />
      <StampsLibrary />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
