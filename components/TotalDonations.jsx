import React from "react";

const TotalDonations = () => {
  return (
    <section className="home-description">
      <div className="items-stretch flex flex-col">
        <div className="border border-[color:var(--Neutral-600,#656565)] shadow-sm bg-zinc-50 w-full px-5 py-10 rounded-2xl border-solid max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <header className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <div className="justify-center items-center border-r-[color:var(--Neutral-500,#7B7B7B)] flex grow flex-col px-8 border-r border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex flex-col items-center">
                  <div className="text-black text-center text-7xl font-semibold leading-[96px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                    200
                  </div>
                  <div className="text-zinc-800 text-center text-2xl font-medium leading-10 self-stretch whitespace-nowrap mt-3">
                    Active Projects
                  </div>
                </div>
              </div>
            </header>
            <header className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch flex grow flex-col px-8 max-md:max-full max-md:mt-10 max-md:px-5">
                <div className="text-black text-center text-7xl font-semibold leading-[96px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                  $53,000,00
                </div>
                <div className="text-zinc-800 text-center text-2xl font-medium leading-10 self-center whitespace-nowrap mt-3">
                  Total Donations
                </div>
              </div>
            </header>
            <header className=" flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-center border-l-[color:var(--Neutral-500,#7B7B7B)] flex grow flex-col px-8 border-l border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="flex flex-col items-center">
                  <div className="text-black text-center text-7xl font-semibold leading-[96px] tracking-tighter whitespace-nowrap max-md:text-4xl">
                    400
                  </div>
                  <div className="text-zinc-800 text-center text-2xl font-medium leading-10 self-stretch whitespace-nowrap mt-3">
                    Unique Donors
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="text-black text-center text-3xl italic leading-[80px] tracking-tight max-w-[641px] self-center mt-2 max-md:max-w-full">
          ️ ❤️ <span className="underline">Eboni</span> generously gave $21 • a
          few seconds ago
        </div>
      </div>
    </section>
  );
};

export default TotalDonations;
