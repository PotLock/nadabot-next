import React from "react";

const JoinTeanCard = (props) => {
  const { icon, title, text, url } = props;
  return (
    <a
      href={url}
      className="justify-center bg-orange-50 flex w-full h-full flex-col m-auto pl-6 pr-10 py-12 team-card"
    >
      <div className="flex justify-between gap-5 mt-3">
        <img
          loading="lazy"
          src={icon}
          className="aspect-square object-contain object-center w-9 fill-slate-800 overflow-hidden shrink-0 max-w-full"
          alt="Fundraisers"
        />
        <h2 className="text-slate-800 text-2xl font-semibold leading-8 self-center grow whitespace-nowrap my-auto">
          {title}
        </h2>
      </div>
      <div className="text-zinc-800 text-base leading-6 mt-4">{text} </div>
      <div className="arrow transition-transform flex gap-1 items-center mt-auto">
        <a href={url} className="text-zinc-800 text-lg leading-6">
          Learn More
        </a>
        <img
          src="/assets/ArrowNarrowRight.svg"
          className=" "
          alt="Learn More"
        />
      </div>
    </a>
  );
};

export default JoinTeanCard;
