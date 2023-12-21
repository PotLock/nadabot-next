import SearchIcon from "../public/assets/hero/search-icon.svg";
import Lottie from "lottie-react";
import roket from "./animations/roket.json";
import roket2 from "./animations/roket2.json";

const Hero = () => {
  return (
    <section className="mb-36 flex justify-center">
      <div className="flex flex-col items-center hero w-fit">
        <div className="relative w-fit text-7xl text-[#292929] font-medium flex items-center whitespace-nowrap gap-[0.2em]">
          <div className="smile-icon">🤩</div> Making your{" "}
          <img src="/assets/hero/plug.png" className="plug-icon" />
          <div className="font-bold relative flex items-center gap-1">
            contracts
            <img src="/assets/hero/star.png" alt="" />
            <img
              src="/assets/hero/double-lines.svg"
              className="absolute -bottom-[24%] w-full"
              alt="style"
            />
          </div>
        </div>
        <div className="text-[#2D6FDB] text-[9.5rem] font-grace leading-[1.1]">
          Human Compatible
        </div>

        <div className="flex items-center justify-center w-full gap-8 mt-3 relative">
          <a href="/" target="_blank" className="btn-main text-4xl">
            <div>Get Started</div>
          </a>
          <a href="/" target="_blank" className="btn-main text-4xl">
            <div className="text-black !bg-[#FEF6EE]">Learn More</div>
          </a>
          {/* <Lottie
            animationData={roket1}
            loop={true}
            className="absolute -right-16 w-44"
          /> */}
          <Lottie
            animationData={roket2}
            loop={true}
            className="absolute -right-16 rotate-[65deg] w-44"
          />
        </div>
        <div className="searchbar mt-16">
          <div className="searchbar-container">
            <img src="/assets/hero/search-icon.svg" alt="search" />
            <input type="text" placeholder="Enter a username" />
            <div className="search-btn">
              <SearchIcon />
            </div>
          </div>
          <div className="search-shadow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
