import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="top-section px-10 max-md:px-5 relative overflow-clip">
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -left-[23rem]"
          alt="bg-eff"
        />
        <img
          src="/assets/hero/bg-eff.svg"
          className="absolute -right-[20rem] rotate-[40deg]"
          alt="bg-eff"
        />
        <div className="container">
          <Navbar />
          <Hero />
          <div className="text-7xl max-lg:text-5xl max-md:text-3xl max-[540px]:text-xl my-14 text-center">
            Coming Soon
          </div>
        </div>
        {/* <RecentTransaction />
      </div>
      <div className="flex w-full justify-center bg-rose-900">
        <Description />
      </div>
      <div className="container px-10 max-md:px-5">
        <CreateProject />
        <Donate />
        <ProjectCards />
        <MatchingRounds />
        <Reviews />
        <JoinTeam /> */}
      </div>
    </div>
  );
};

export default Home;
