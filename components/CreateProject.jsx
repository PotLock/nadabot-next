import React from "react";

const CreateProject = () => {
  return (
    <div className="gap-5 flex mt-48 max-lg:mt-24 flex-col md:flex-row mb-48">
      <section className=" w-[48%] max-lg:w-full">
        <div className="flex flex-col my-auto items-start max-lg:max-w-full max-lg:mt-10">
          <h1 className="text-black text-6xl max-md:text-4xl font-semibold leading-[74px] max-lg:max-w-full max-lg:leading-[51px]">
            Register your non-profit to access new funding sources
          </h1>
          <p className="text-zinc-800 text-3xl max-md:text-xl leading-10 mt-6 max-lg:max-w-full">
            Signup as a non-profit organization in minutes and set up on Potlock
            to start getting funding via donations and matching rounds
          </p>
          <a href="/register" target="_blank" className="mt-10 btn btn-white">
            Create Project
          </a>
        </div>
      </section>
      <section className="flex flex-col items-stretch w-[52%] ml-5 max-lg:w-full max-lg:ml-0">
        <div className="grow max-lg:max-w-full max-lg:mt-10">
          <section className="gap-5 flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0">
            <div className="flex flex-col mt-20 items-stretch w-[33%] max-lg:w-full max-lg:ml-0 max-lg:mt-10">
              <img
                src="/assets/create-project/1.png"
                className="h-full w-full object-cover max-sm:max-h-[400px]"
              />
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-lg:w-full max-lg:ml-0">
              <div className="flex grow flex-col items-stretch max-lg:mt-6">
                <div className="flex-col items-stretch overflow-hidden relative flex aspect-[0.6036036036036037] max-lg:hidden w-full justify-center">
                  <img
                    src="/assets/create-project/2.png"
                    className="absolute h-full w-full object-cover object-center inset-0"
                  />
                </div>
                <img
                  src="/assets/create-project/3.png"
                  className="aspect-[3.44] object-contain object-center w-[210px] overflow-hidden self-center max-w-full mt-6"
                />
              </div>
            </div>
            <div className="flex relative flex-col mt-20 max-lg:mt-10 aspect-[0.6036036036036037] overflow-hidden items-stretch w-[33%] ml-5 max-lg:hidden max-lg:w-full max-lg:ml-0">
              <img
                src="/assets/create-project/4.png"
                className="absolute h-full w-full object-cover object-center inset-0"
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CreateProject;
