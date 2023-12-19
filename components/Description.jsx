import React from "react";
import Logo from "../public/assets/logo.svg";

const cards = [
  {
    icon: "/assets/description/hand-holding-heart.svg",
    title: "Plural Funding Sources",
    text: "Online giving strategies are growing. Equip your non profit with the industry’s most innovative funding mechanisms. Matched funding, amplified donations, Direct donations, campaigns, and more funding mechanisms to come.",
  },
  {
    icon: "/assets/description/people-arrows-left-right.svg",
    title: "Discoverability",
    text: "We are the global directory for self registered impact projects. All projects are listed so our network can find their interests and donate directly. Donors can testify and all data is permanent & accesible for transparency.",
  },
  {
    icon: "/assets/description/Vector.svg",
    title: "Web of Trust",
    text: "Have verified humans evaluate your impact. The more impact measured the high levels of funding you access.",
  },
];

const Description = () => {
  return (
    <section className="justify-center gap-16 container flex-col lg:flex lg:flex-row px-10 max-md:px-5 py-12">
      <header className="header mt-14 mb-9 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        <Logo className="h-9 w-full desc-logo" />
        {/* <img src="/assets/logo.svg" className="h-9 w-auto" alt="Logo" /> */}
        <h1 className="text-white text-6xl tracking-wide max-md:text-4xl font-semibold leading-[80px] mt-5 max-md:max-w-full max-md:leading-[56px]">
          Potlock is revolutionizing how non-profits get funding{" "}
        </h1>
        <p className="text-white text-3xl max-md:text-2xl leading-10 mt-12 max-md:max-w-full max-md:mt-10">
          Bigger networks, aligned incentives, open tracking, and new ways to
          get money, make PotLock the home for non-profits & donors.{" "}
        </p>
      </header>

      <section className="mt-14 mb-9 flex flex-col gap-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
        {cards.map((card) => (
          <div
            className="flex flex-col w-[100%] max-md:w-full max-md:mt-10 max-md:ml-0"
            key={card.title}
          >
            <div className="text-white text-4xl max-md:text-3xl font-bold leading-[56px] max-md:max-w-full">
              <img src={card.icon} className="inline mr-3 h-[48px] w-[48px] " />
              {card.title}
            </div>
            <div className="text-white text-2xl max-md:text-xl leading-9 mt-4 md:ml-16 max-md:max-w-full">
              {card.text}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Description;
