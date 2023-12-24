import React from "react";

const Status = () => {
  return (
    <div className="bg-[#F0F0F0] flex justify-center w-full py-6 mt-14 px-10 max-md:px-5">
      <div className="container grid grid-cols-3 max-md:grid-cols-1">
        <div className="flex flex-col items-center text-[#292929] gap-3 max-md:py-4">
          <div className="text-7xl font-extrabold">1000</div>
          <div className="text-2xl font-medium">Humans Verified</div>
        </div>
        <div className="flex flex-col items-center text-[#292929] border-x border-[#A6A6A6] max-md:py-4 max-md:border-y max-md:border-x-0 gap-3">
          <div className="text-7xl font-extrabold">8</div>
          <div className="text-2xl font-medium">Verified Providers</div>
        </div>
        <div className="flex flex-col items-center text-[#292929] gap-3 max-md:py-4">
          <div className="text-7xl font-extrabold">2500</div>
          <div className="text-2xl font-medium">Total Checks</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
