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
      <div className="hero flex w-fit flex-col items-center">
        <div className="relative flex w-fit items-center gap-[0.2em] whitespace-nowrap text-7xl font-medium text-[#292929] max-lg:text-5xl max-md:text-3xl max-[540px]:text-2xl">
          <Animation
            speed={0.8}
            animationJison={starFace}
            className="smile-icon w-48 max-lg:w-32 max-md:-left-[6rem] max-md:w-24 max-sm:-left-[2.7rem] max-sm:-top-[1rem] max-sm:w-12"
            interactivity={faceInteractivity}
          />
          {/* <div className="smile-icon max-lg:text-8xl max-md:text-5xl">🤩</div>{" "} */}
          Making your{" "}
          <img
            src="/assets/hero/plug.png"
            className="plug-icon max-md:w-16 max-[540px]:w-11"
            alt="plug-icon"
          />
          <div className="relative flex items-center gap-1 font-bold">
            contracts
            <img
              src="/assets/hero/star.png"
              className="start-icon max-md:h-8 max-sm:h-5"
              alt="start-icon"
            />
            <DoubleLine />
          </div>
        </div>
        <div className="relative font-grace text-[9.5rem] leading-[1.1] text-[#2D6FDB] max-lg:text-[7rem] max-md:text-[4.5rem] max-[540px]:mt-1 max-[540px]:text-5xl">
          Human Compatible
        </div>

        <div className="relative mt-3 flex w-full items-center justify-center gap-8 max-[450px]:gap-5">
          <a
            href="/support"
            target="_blank"
            className="btn-main text-4xl max-lg:text-3xl max-md:text-xl max-[450px]:text-base"
          >
            <div>Get Started</div>
          </a>
          <a
            href="/docs"
            target="_blank"
            className="btn-main text-4xl max-lg:text-3xl max-md:text-xl max-[450px]:text-base"
          >
            <div className="!bg-[#FEF6EE] text-black">Learn More</div>
          </a>
          <Lottie
            animationData={roket2}
            loop={true}
            className="absolute -right-16 w-44 rotate-[65deg] max-lg:-right-[13%] max-lg:w-36 max-md:-right-[16vw] max-[450px]:right-[-1rem] max-[450px]:w-20"
          />
        </div>
        <div className="searchbar relative mt-16">
          <Animation
            interactivity={armInteractivity}
            speed={0.8}
            animationJison={mechanicalArm}
            className="absolute -bottom-32 -left-20 w-32 -rotate-45 max-sm:-left-5 max-sm:w-20"
          />
          {/* <div className="searchbar-container">
            <img src="/assets/hero/search-icon.svg" alt="search" />
            <input type="text" placeholder="Enter a username (Coming soon)" />
            <div className="search-btn">
              <SearchIcon />
            </div>
          </div>
          <div className="search-shadow" /> */}
          <Animation
            interactivity={partyInteractivity}
            speed={1}
            animationJison={partyIcon}
            className="absolute -bottom-32 right-1/3 w-60 max-md:right-1/4 max-sm:right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
