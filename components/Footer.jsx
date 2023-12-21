import React from "react";
import { links, socialLinks } from "./animations/data/footerLinks";

const changeHover = (className) => {
  console.log(className);
  //   if (className.includes("random")) {
  //     className.remove("random");
  //   } else {
  //     className.add("random");
  //   }
};

const Footer = () => {
  return (
    <div className="bg-footer-texture bg-[#FAFAFA] w-full pt-32 flex justify-center">
      <div className="container flex flex-col items-center">
        <div className="text-[#F7CE55] text-6xl font-medium stroke-black footer-title">
          prove that you are
        </div>
        <div className="text-[#2D6FDB] font-oi text-7xl mt-6">nada.bot</div>
        <div className="flex font-medium justify-between max-w-[701px] w-full mt-12">
          {links.map((link, idx) => (
            <a
              href={link.url}
              className={`footer-link transition-all ${
                idx % 2 === 0 ? "random" : ""
              }`}
              target="_blank"
              key={link.title}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="w-full h-[1px] bg-[#292929] mt-14 mb-8" />
        <div className="flex gap-3 mb-8">
          {socialLinks.map((link) => (
            <a
              href={link.url}
              className="footer-social-links"
              target="_blank"
              key={link.url}
            >
              {/* <img src={link.icon} alt={link.url} /> */}
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
