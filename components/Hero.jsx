import SearchIcon from "../public/assets/hero/search-icon.svg";
import Lottie from "lottie-react";
import roket from "./animations/roket.json";
import roket2 from "./animations/roket2.json";

const Hero = () => {
  return (
    <section className="mb-36 flex justify-center">
      <div className="flex flex-col items-center hero w-fit">
        <div className="relative w-fit text-7xl max-lg:text-5xl max-md:text-3xl max-[540px]:text-xl text-[#292929] font-medium flex items-center whitespace-nowrap gap-[0.2em]">
          <div className="smile-icon max-lg:text-8xl max-md:text-5xl">🤩</div>{" "}
          Making your{" "}
          <img src="/assets/hero/plug.png" className="plug-icon max-md:w-16" />
          <div className="font-bold relative flex items-center gap-1">
            contracts
            <img
              src="/assets/hero/star.png"
              className="start-icon max-md:h-8"
              alt="start-icon"
            />
            <img
              src="/assets/hero/double-lines.svg"
              className="absolute -bottom-[24%] w-full"
              alt="style"
            />
          </div>
        </div>
        <div className="relative text-[#2D6FDB] text-[9.5rem] max-lg:text-[7rem] max-md:text-[4.5rem] max-[540px]:text-5xl font-grace leading-[1.1]">
          Human Compatible
        </div>

        <div className="flex items-center justify-center w-full gap-8 max-[450px]:gap-5 mt-3 relative">
          <a
            href="/support"
            target="_blank"
            className="btn-main text-4xl max-lg:text-3xl max-md:text-xl max-[450px]:text-base"
          >
            <div>Get Started</div>
          </a>
          <a
            href="/doc"
            target="_blank"
            className="btn-main text-4xl max-lg:text-3xl max-md:text-xl max-[450px]:text-base"
          >
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
            className="absolute -right-16 max-lg:-right-[13%] max-md:-right-[16vw] max-[450px]:right-[-1rem] rotate-[65deg] w-44 max-[450px]:w-20 max-lg:w-36"
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
