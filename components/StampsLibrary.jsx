import React from "react";
import DoubleLine from "./svgs/DoubleLine";
import roket2 from "./animations/roket2.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const icons = [
  ["/assets/library/1.png", "/assets/library/2.png"],
  ["/assets/library/3.png", "/assets/library/4.png"],
  ["/assets/library/5.png", "/assets/library/6.png"],
  ["/assets/library/7.png", "/assets/library/8.png"],
  ["/assets/library/9.png", "/assets/library/10.png"],
];

const StampsLibrary = () => {
  // const [iconsRand, setIconsRandom] = useState(icons);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIconsRandom((prevArray) =>
  //       shuffleMultiDimensionalArray([...prevArray]),
  //     );
  //   }, 5000); // 20 seconds = 20000 milliseconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="container flex w-full justify-between px-10  max-lg:flex-col max-lg:items-center max-lg:gap-8 max-md:px-5">
      <div className="flex w-[55%] flex-col items-start max-lg:w-full">
        <div className="mb-5 -rotate-[30deg] text-8xl max-md:text-8xl max-sm:mb-3 max-sm:text-5xl">
          🏛️
        </div>
        <div className="flex max-h-[72px] items-center max-md:max-h-[36px]">
          <div className="relative flex h-fit items-center text-7xl font-medium text-[#292929] max-xl:text-5xl max-md:text-3xl">
            Our Library
            <DoubleLine />
          </div>
          <Lottie
            animationData={roket2}
            loop={true}
            className="h-fit w-44 rotate-[65deg] max-lg:w-36 max-[450px]:w-20"
          />
        </div>
        <div className="relative font-grace text-9xl leading-[1.1] text-[#2D6FDB] max-xl:text-8xl max-lg:text-[7rem] max-md:text-[4.5rem] max-[540px]:mt-1 max-[540px]:text-6xl">
          of Stamps
        </div>

        <div className="mb-12 text-3xl text-[#7B7B7B] max-sm:mb-8 max-sm:text-xl">
          Check out our collection of 3rd party stamps to get verified
        </div>
        <a
          href="/verify"
          target="_blank"
          className="btn-main text-4xl max-lg:text-3xl max-md:text-xl max-[450px]:text-base"
        >
          <div>Get Verified Now</div>
        </a>
      </div>
      <div className="mr-[-5%] flex w-[55%] max-w-[600px] flex-col max-lg:mr-0 max-lg:w-full max-lg:max-w-[400px] max-[540px]:max-w-[330px]">
        {icons.map((iconRow, idx) => (
          <div
            className={`${
              idx % 2 !== 0 &&
              "pr-[130px] max-xl:pr-[95px] max-[540px]:pr-[80px]"
            } -mb-6 flex w-full justify-end gap-24 max-xl:gap-16 `}
            key={iconRow}
          >
            {iconRow.map((icon) => (
              <div className="stamp-icon" key={icon}>
                <div className="relative z-10 flex h-[160px] w-[160px] items-center justify-center rounded-[50%] bg-[#F0F0F0] max-xl:h-[120px] max-xl:w-[120px] max-[540px]:h-[90px] max-[540px]:w-[90px]">
                  <motion.div
                    className={`h-[70%] w-[70%] rounded-[50%] bg-contain transition-all`}
                    style={{ backgroundImage: `url(${icon})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StampsLibrary;
