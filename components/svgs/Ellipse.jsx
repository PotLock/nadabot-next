import React, { useRef } from "react";
import { motion } from "framer-motion";

export const lineAnimate = {
  hidden: { pathLength: 0, pathOffset: 1 },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      type: "linear",
      duration: 5,
      delay: 1,
    },
  },
};

const Ellipse = () => {
  const ref = useRef();

  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      initial="hidden"
      whileInView={"show"}
      ref={ref}
      className="flex"
    >
      <svg
        viewBox="0 0 1855 1126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-8 right-[-30%] z-[-1] h-full w-fit"
      >
        <motion.path
          variants={lineAnimate}
          d="M1838.76 234.382C1883.99 359.766 1823.37 510.213 1688.17 652.201C1553.01 794.141 1343.55 927.372 1091.8 1018.2C840.047 1109.02 593.768 1140.21 399.124 1117.25C204.414 1094.28 61.7013 1017.19 16.4665 891.807C-28.7683 766.422 31.8566 615.976 167.056 473.988C302.21 332.048 511.674 198.816 763.425 107.992C1015.18 17.1686 1261.45 -14.0171 1456.1 8.94198C1650.81 31.9089 1793.52 108.998 1838.76 234.382Z"
          stroke="#292929"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
};

export default Ellipse;
