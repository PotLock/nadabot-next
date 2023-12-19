import ProjectCard from "./ProjectCard";

const ProjectCards = () => {
  return (
    <section className="flex flex-col items-center">
      <h1 className="text-black text-6xl max-md:text-4xl font-[622] leading-[74.24px] tracking-tighter self-center justify-center">
        Find Projects
      </h1>

      <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-10 max-w-[804px] mt-5 max-md:max-w-full">
        The hardest thing about our platform is choosing how you want to make
        the most impact.
      </div>

      <div className="w-full mt-12 gap-7 grid grid-cols-3 max-lg:grid-cols-2 max-sm:flex max-sm:flex-col max-md:mt-10">
        <ProjectCard
          name="Open Web Academy"
          banner="https://ipfs.near.social/ipfs/bafkreigoc6ajz5bh3p6as6ct27bvxhbnv2qrjtoitzkjhfoa3s5ncd3pj4"
          desc="The community that helps build Web 3 projects in LATAM⛓️"
          tags={["Education"]}
          donations="19.13"
          url="https://near.social/potlock.near/widget/Index?tab=project&projectId=openwebacademy.near"
        />
        <ProjectCard
          name="H.E.R. DAO"
          banner="https://ipfs.io/ipfs/QmSde6uUR2tBtasQ2HaSCcx5S37UvXtSnT9LkJF7EBb8Au"
          desc="A womxn focused developer DAO championing innovation & diversity. The new launchpad for womxn led ventures."
          tags={["Community"]}
          donations="17.16"
          url="https://near.social/potlock.near/widget/Index?tab=project&projectId=herdao.near"
        />
        <ProjectCard
          name="Marma J"
          banner="https://ipfs.near.social/ipfs/bafybeidt6sambtb62ifndzmv6accfsycweqdbocosclg5233pxayfkbqzm"
          desc="The purpose of the Marma J DAO is to make decisions regarding the Marma J Community initiatives. The Marma J DAO exists to govern the Marma J Foundation’s community initiatives. Our DAO is comprised of council members who vote on proposals to spread love and positivity in the open web ecosystem."
          tags={["Public Good"]}
          donations="1.97"
          url="https://near.social/potlock.near/widget/Index?tab=project&projectId=marmaj.sputnik-dao.near"
        />
      </div>
    </section>
  );
};

export default ProjectCards;
