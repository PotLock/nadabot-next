const Hero = () => {
  return (
    <section className="mb-36">
      <div className="items-center flex flex-col">
        <header className="text-zinc-800 text-center text-2xl leading-10 whitespace-nowrap max-md:max-w-full">
          Introducing Potlock
        </header>
        <h1 className="text-black text-center text-8xl font-[622] leading-[128px] self-stretch w-full mt-7 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Putting public goods funding on the table.
        </h1>
        <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-[50px] self-stretch w-full mt-10 max-md:max-w-full">
          <span className="">
            PotLock is the portal for public goods, non-profits, and communities
            to{" "}
          </span>
          <span className="font-bold">raise funds</span>
          <span className="">
            {" "}
            transparently through our global donor network.{" "}
          </span>
          <span className="underline">Free to use forever.</span>
        </div>
        <form className="items-stretch flex justify-between gap-5 mt-20 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <a className="btn btn-dark" href="/app" target="_blank">
            Get Started
          </a>
          <a href="/docs" target="_blank" className="btn btn-white">
            Learn More
          </a>
        </form>
      </div>
    </section>
  );
};

export default Hero;
