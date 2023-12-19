import JoinTeanCard from "./JoinTeanCard";

const teamArr = [
  {
    icon: "/assets/join-team/builders.svg",
    title: "For Builders",
    text: "Start taking an issue today on our backlog. Check out our bounties here.",
    url: "/backlog",
  },
  {
    icon: "/assets/join-team/fundraisers.svg",
    title: "For Fundraisers",
    text: "Start earning for raising funding pools and your favorite non profits.",
    url: "/fundraisers",
  },
  {
    icon: "/assets/join-team/volunteer.svg",
    title: "For Volunteers",
    text: "Volunteer with core team to expand our ecosystem.",
    url: "/volunteer",
  },
];

const JoinTeam = () => {
  return (
    <section className="items-center flex flex-col mt-48">
      <h1 className="header text-black text-6xl max-md:text-4xl font-[622] leading-[74.24px] tracking-tighter self-center">
        Want to join the PotLock team?
      </h1>

      <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-10 self-center mt-5 max-md:max-w-full">
        Volunteer and help build open funding
      </div>

      <div className="w-full max-w-[1366px] mt-12 gap-14 max-xl:gap-9 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:mt-10">
        {teamArr.map((team) => (
          <JoinTeanCard {...team} key={team.title} />
        ))}
      </div>
    </section>
  );
};

export default JoinTeam;
