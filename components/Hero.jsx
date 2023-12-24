/* eslint-disable @next/next/no-img-element */
import SearchIcon from "../public/assets/hero/search-icon.svg";
// animations
import Lottie from "lottie-react";
import partyIcon from "./animations/party-cel.json";
import roket2 from "./animations/roket2.json";
import mechanicalArm from "./animations/mechanical-arm.json";
import starFace from "./animations/star-face.json";
import Animation from "./Animation";
import DoubleLine from "./svgs/DoubleLine";

const faceInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1],
      type: "loop",
      frames: [0, 45],
    },
  ],
};
const armInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 1],
      type: "seek",
      frames: [0, 122],
    },
  ],
};
const partyInteractivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0, 0.6],
      type: "seek",
      frames: [0, 1],
    },
    {
      visibility: [0.6, 1],
      type: "loop",
      frames: [1, 122],
    },
  ],
};

const Hero = () => {
  return (
    <section className="mb-36 flex justify-center">
      <div className="flex flex-col items-center hero w-fit">
        <div className="relative w-fit text-7xl max-lg:text-5xl max-md:text-3xl max-[540px]:text-xl text-[#292929] font-medium flex items-center whitespace-nowrap gap-[0.2em]">
          <Animation
            speed={0.8}
            animationJison={starFace}
            className="smile-icon w-48 max-lg:w-32 max-md:w-24 max-md:-left-[6rem] max-sm:w-12 max-sm:-left-[2.7rem] max-sm:-top-[1rem]"
            interactivity={faceInteractivity}
          />
          {/* <div className="smile-icon max-lg:text-8xl max-md:text-5xl">🤩</div>{" "} */}
          Making your{" "}
          <img
            src="/assets/hero/plug.png"
            className="plug-icon max-md:w-16 max-[540px]:w-11"
            alt="plug-icon"
          />
          <div className="font-bold relative flex items-center gap-1">
            contracts
            <img
              src="/assets/hero/star.png"
              className="start-icon max-md:h-8 max-sm:h-5"
              alt="start-icon"
            />
            <DoubleLine />
          </div>
        </div>
        <div className="relative text-[#2D6FDB] text-[9.5rem] max-lg:text-[7rem] max-md:text-[4.5rem] max-[540px]:text-5xl max-[540px]:mt-1 font-grace leading-[1.1]">
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
          <Lottie
            animationData={roket2}
            loop={true}
            className="absolute -right-16 max-lg:-right-[13%] max-md:-right-[16vw] max-[450px]:right-[-1rem] rotate-[65deg] w-44 max-[450px]:w-20 max-lg:w-36"
          />
        </div>
        <div className="searchbar mt-16 relative">
          <Animation
            interactivity={armInteractivity}
            speed={0.8}
            animationJison={mechanicalArm}
            className="absolute -left-20 w-32 max-sm:w-20 max-sm:-left-5 -rotate-45 -bottom-32"
          />
          <div className="searchbar-container">
            <img src="/assets/hero/search-icon.svg" alt="search" />
            <input type="text" placeholder="Enter a username" />
            <div className="search-btn">
              <SearchIcon />
            </div>
          </div>
          <div className="search-shadow" />
          <Animation
            interactivity={partyInteractivity}
            speed={1}
            animationJison={partyIcon}
            className="absolute right-1/3 max-sm:right-0 max-md:right-1/4 w-60 -bottom-32"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
