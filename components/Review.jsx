import React from "react";

const Review = (props) => {
  const { name, title, text, id, pic } = props;
  return (
    <div
      id={`review-${id}`}
      className="review-card justify-center items-stretch shadow-[0px_-2px_0px_0px_#464646_inset,_0px_0px_0px_1px_#464646] transition-all hover:bg-rose-800 hover:text-white flex flex-col px-16 py-12 rounded-lg max-md:px-5"
    >
      <header className="justify-between flex gap-5 mt-16 max-md:mt-10">
        <img
          src={pic}
          className="aspect-square object-contain object-center w-16 overflow-hidden shrink-0 max-w-full rounded-[50%]"
        />
        <div className="self-center flex grow flex-col my-auto">
          <div className="transition-all text-zinc-700 text-2xl font-bold leading-5">
            {name}
          </div>
          <div className="transition-all text-neutral-500 text-xl font-semibold leading-5 mt-3">
            {title}
          </div>
        </div>
      </header>
      <div className="transition-all overflow-hidden text-zinc-800 text-ellipsis text-xl italic leading-8 mt-5 mb-10">
        {text}
      </div>
    </div>
  );
};

export default Review;
