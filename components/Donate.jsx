const Donate = () => {
  return (
    <section className="gap-5 max-lg:gap-9 mb-48 flex flex-col lg:flex-row">
      <div className="flex flex-col max-md:w-full max-md:ml-0">
        <img
          src="/assets/donate-img.png"
          className="aspect-[1.12] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
        />
      </div>
      <div className="flex flex-col items-stretch ml-5 max-md:w-full max-md:ml-0">
        <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
          <h1 className="text-black text-6xl max-md:text-4xl font-[622] leading-[74px] tracking-tighter self-stretch max-md:max-w-full max-md:leading-[51px]">
            Join the global network of changemakers funding impact directly
          </h1>
          <div className="text-zinc-800 text-3xl max-md:text-xl leading-10 self-stretch mt-6 max-md:max-w-full">
            Signup as a non-profit organization in minutes and set up on Potlock
            to start getting funding via donations and matching rounds
          </div>
          <a href="/app" target="_blank" className="mt-10 btn btn-white">Donate Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Donate;
