const Hero = () => {
  return (
    <section className="mb-36">
      <div className="items-center flex flex-col">
        <header className="text-zinc-800 text-center text-2xl leading-10 whitespace-nowrap max-md:max-w-full">
          Introducing Nada.bot
        </header>
        <h1 className="text-black text-center text-8xl font-[622] leading-[128px] self-stretch w-full mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Making your contracts human compatible.
        </h1>
        <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-[50px] self-stretch w-full mt-10 max-md:max-w-full">
          <span className="">
          nada.bot is the sybil check aggregator
            to{" "}
          </span>
          <span className="font-bold">built on near</span>
          <span className="">
            {" "}
            transparently through our global donor network.{" "}
          </span>
          <span className="underline">prevent bots.</span>
        </div>
        <form className="items-stretch flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <a className="btn btn-dark" href="/docs" target="_blank">
            Verify
          </a>
          <a href="/docs" target="_blank" className="btn btn-white">
             Docs
          </a>
        </form>
      </div>
    </section>
  );
};

export default Hero;
