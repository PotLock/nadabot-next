import React from "react";
import { motion } from "framer-motion";
import PotlockLogo from "../public/assets/potlock-logo.svg";
import Arrow from "../public/assets/arrow-tr.svg";
import CardHover from "./CardHover";
import Ellipse from "./svgs/Ellipse";

const Card = ({ title, text, img, url, likeLabel }) => (
  <motion.div className="flex flex-col items-center rounded-[32px] border border-[3D3D3D] bg-white p-8 text-center shadow-[4px_4px_0px_0px_#3D3D3D]">
    <img src={img} alt="icon" className="w-80" />
    <div className="text-5xl font-bold text-[#292929] max-lg:text-2xl">
      {title}
    </div>
    <div className="text-3xl text-[#A6A6A6] max-lg:text-xl">{text}</div>
    <a
      href={url}
      target="_blank"
      className="mt-7 flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#2D6FDB] py-3 text-3xl text-white max-lg:text-xl"
    >
      {likeLabel} <Arrow className="h-5" />
    </a>
  </motion.div>
);

const cards = [
  {
    title: "For Humans",
    text: "Proof your a human, collect checks, and earn a higher on chain reputation...",
    img: "/assets/verify-card.svg",
    likeLabel: "Get Verified",
    url: "/verify",
  },
  {
    title: "For Providers",
    text: "Easily add your check to get added to our sybil score. Read our docs to see...",
    img: "/assets/provides.svg",
    likeLabel: "Integrate",
    url: "/integrate",
  },
];

const DappsCards = () => {
  return (
    <div className="relative flex w-full justify-center overflow-x-clip">
      <Ellipse />
      <div className="container mb-48 mt-12 flex flex-col items-center gap-12 px-10 max-md:px-4 max-sm:mb-24">
        <div className="border-neutral-[#C7C7C7] relative flex w-full max-w-[800px] flex-col items-center gap-8 rounded-[200px] border bg-white py-6 max-[540px]:gap-4">
          <div className="text-2xl font-semibold max-[540px]:text-xl">
            dApps using us
          </div>
          <PotlockLogo className="max-w-64 max-[540px]:w-[70%]" />
        </div>
        <div className="relative grid min-h-[650px] w-full grid-cols-2 gap-8 max-lg:h-[1200px] max-lg:grid-cols-1">
          {cards.map((cardData) => (
            <CardHover
              key={cardData.url}
              Component={Card}
              props={{ width: "100%", height: "100%", ...cardData }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default DappsCards;
