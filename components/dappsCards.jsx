import React from "react";
import { motion } from "framer-motion";
import PotlockLogo from "../public/assets/potlock-logo.svg";
import Arrow from "../public/assets/arrow-tr.svg";
import CardFlip from "./CardFlip";
import Ellipse from "./svgs/Ellipse";

const Card = ({ title, text, img, url, likeLabel }) => (
  <motion.div className="shadow-[4px_4px_0px_0px_#3D3D3D] bg-white flex flex-col items-center text-center p-8 rounded-[32px] border border-[3D3D3D]">
    <img src={img} alt="icon" className="w-80" />
    <div className="text-[#292929] text-5xl font-bold">{title}</div>
    <div className="text-3xl text-[#A6A6A6]">{text}</div>
    <a
      href={url}
      target="_blank"
      className="text-3xl mt-7 gap-2 bg-[#2D6FDB] w-full text-white flex justify-center items-center rounded-[18px] py-3"
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
    <div className="relative overflow-x-clip flex justify-center w-full">
      <Ellipse />
      <div className="container flex flex-col items-center mt-12 gap-12 mb-48 px-10 max-md:px-5">
        <div className="bg-white relative border border-neutral-[#C7C7C7] rounded-[200px] w-full max-w-[800px] flex flex-col py-6 gap-8 items-center">
          <div className="text-2xl font-semibold">dApps using us</div>
          <PotlockLogo />
        </div>
        <div className="grid grid-cols-2 gap-8 w-full relative min-h-[800px]">
          {cards.map((cardData) => (
            <CardFlip
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
