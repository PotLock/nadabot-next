import React, { useRef } from "react";
import { motion } from "framer-motion";

export const lineAnimate = {
  hidden: { pathLength: 0, pathOffset: 1, strokeLinecap: "butt" },
  show: {
    pathLength: 1,
    pathOffset: 0,
    strokeLinecap: "round",
  },
};
const DoubleLine = ({ className }) => {
  const ref = useRef();
  return (
    <motion.div
      viewport={{ once: true, amount: 0.8 }}
      initial="hidden"
      whileInView={"show"}
      ref={ref}
      className={`absolute -bottom-[24%] ml-[-10%] flex w-[110%] ${className}`}
    >
      <svg
        viewBox="0 0 423 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=""
      >
        <g clipPath="url(#clip0_80_128)">
          <motion.path
            variants={lineAnimate}
            transition={{
              type: "linear",
              duration: 0.4,
              delay: 0,
            }}
            d="M38.8563 17.2566C12.2653 14.6537 92.139 13.3908 118.962 12.5285C219.094 9.30934 320.343 8.43419 420.123 6.04901"
            stroke="#DD3345"
            strokeWidth="5"
            strokeLinecap="butt"
          />
          <motion.path
            variants={lineAnimate}
            transition={{
              type: "linear",
              duration: 0.4,
              delay: 0.4,
            }}
            d="M9.3922 28.0339C-17.1988 25.431 62.6748 24.1682 89.4977 23.3058C189.63 20.0867 290.879 19.2115 390.659 16.8264"
            stroke="#DD3345"
            strokeWidth="5"
            strokeLinecap="butt"
          />
        </g>
        <defs>
          <clipPath id="clip0_80_128">
            <rect width="423" height="34" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </motion.div>
  );
};

export default DoubleLine;
