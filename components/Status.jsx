import React from "react";

const Status = () => {
  return (
    <div className="mt-14 flex w-full justify-center bg-[#F0F0F0] px-10 py-10 max-md:px-5">
      <div className="container grid grid-cols-3 max-md:grid-cols-1">
        <div className="flex flex-col items-center gap-3 text-[#292929] max-md:py-4">
          <div className="text-7xl font-extrabold">0</div>
          <div className="text-2xl font-medium">Humans Verified</div>
        </div>
        <div className="flex flex-col items-center gap-3 border-x border-[#A6A6A6] text-[#292929] max-md:border-x-0 max-md:border-y max-md:py-4">
          <div className="text-7xl font-extrabold">2</div>
          <div className="text-2xl font-medium">Verified Providers</div>
        </div>
        <div className="flex flex-col items-center gap-3 text-[#292929] max-md:py-4">
          <div className="text-7xl font-extrabold">0</div>
          <div className="text-2xl font-medium">Total Checks</div>
        </div>
      </div>
    </div>
  );
};

export default Status;
