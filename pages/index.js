import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import CreateProject from "../components/CreateProject";
import Donate from "../components/Donate";
import ProjectCards from "../components/Projects";
import MatchingRounds from "../components/MatchingRounds";
import Reviews from "../components/Reviews";
import JoinTeam from "../components/JoinTeam";
import RecentTransaction from "../components/RecentTransaction";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="top-section px-10 max-md:px-5">
        <div className="container">
          <Navbar />
          <Hero />
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
