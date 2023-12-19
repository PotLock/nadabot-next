import React from "react";

const RoundingCard = (props) => {
  const { title, text, matched } = props;
  return (
    <div className="w-full flex flex-col bg-white border border-gray-200 rounded-lg shadow">
      <div className="p-5">
        <h5 className="mb-2 text-lg font-semibold tracking-tight">{title}</h5>
        <p className="mb-3 font-normal">{text}</p>
      </div>
      <hr className="w-[100%] mt-auto" />
      {false && <p className="ml-5 mt-5 font-normal ">13 contributors</p>}
      <div className="p-5">
        <div>
          <span className="font-bold">${matched}USD</span>
          <span className="font-light ml-1">matched</span>
        </div>
        <p className="px-2 py-2 text-sm font-medium mt-5 rounded bg-green-100 border w-fit">
          Feburary
        </p>
      </div>
    </div>
  );
};

export default RoundingCard;
