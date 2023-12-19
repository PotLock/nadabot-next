import RoundingCard from "./RoundingCard";

const roundsData = [
  {
    title: "Creatives Fund",
    text: "A round to fund creative public goods.",
    matched: "10,000",
  },
  {
    title: "NFT Open Source on NEAR",
    text: "Grants for open-source projects primarily focused on developing on top of, or advancing the broader Ethereum and/or Web3 industry. Applications submitted by November 8th are guaranteed to be reviewed before the start of the round.",
    matched: "10,0000",
  },
  {
    title: "Africa Round",
    text: "To Fund public goods based out of Africa",
    matched: "3000",
  },
];

const MatchingRounds = () => {
  return (
    <section className="items-stretch flex flex-col mt-48">
      <h1 className="header text-black text-6xl max-md:text-4xl font-[622] leading-[74.24px] tracking-tighter self-center">
        Join A Matching Round
      </h1>

      <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-10 self-center max-w-[804px] mt-5 max-md:max-w-full">
        Apply to a matching round to get your donors support amplified
      </div>

      <section className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-9 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {roundsData.map((round) => (
            <RoundingCard {...round} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default MatchingRounds;
