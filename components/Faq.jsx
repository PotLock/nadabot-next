import React, { useState } from "react";
import DoubleLine from "./svgs/DoubleLine";
import { faqData } from "./data/faqData";

const Faq = () => {
  const [toogleId, setToggleId] = useState("1");
  return (
    <div className="container mb-24 mt-8 flex w-full flex-col justify-center px-10 max-md:px-5">
      <div className="mb-14 ml-[10%] w-fit -rotate-[30deg] text-8xl max-md:text-8xl max-sm:mb-3 max-sm:text-5xl">
        📚
      </div>
      <div className="relative flex h-fit w-fit flex-col items-center text-7xl font-medium text-[#292929] max-xl:text-5xl max-md:text-3xl">
        <div>FAQ</div>
        <DoubleLine className="relative mt-[-12px] w-[140%]" />
      </div>
      <div className="mb-12 mt-6 text-3xl text-[#7B7B7B]  max-sm:mb-8 max-sm:text-xl">
        We got some answers for you? Not here then check out telegram support
        channel!
      </div>
      <div className="bg-#FAFAFA flex w-full cursor-pointer flex-col rounded-xl border border-[#3D3D3D]">
        {faqData.map((faq) => (
          <div
            className="gap-4 border-b border-b-[#DBDBDB] p-4"
            key={faq.qa}
            onClick={() => setToggleId(faq.id === toogleId ? "" : faq.id)}
          >
            <div className="text-2xl font-semibold text-[#292929] max-sm:text-xl ">
              {faq.qa}
            </div>
            <div
              className={`faq-an max-h-0 overflow-hidden text-xl text-[#B0B0B0] max-sm:text-lg ${
                toogleId === faq.id ? "max-h-16" : ""
              }`}
            >
              {faq.an}
            </div>
            <div className="h-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
