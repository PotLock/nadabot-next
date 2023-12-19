import Review from "./Review";

const reviewsData = [
  {
    name: "Roshaan Khan",
    title: "Chairman at Minority Think Tank Foundation",
    text: "“PotLock allowed me to expand my donor based globally and engage with new fundraising strategies all seamlessly and smoothly from a quite friendly user interface",
    pic: "https://www.nearimpact.org/people/roshan.webp",
  },
  {
    name: "Cameron Dennis",
    title: "Founder of Blockchain Acceleration Foundation",
    text: "”Potlock allowed for new discovery for my non-profit allowing both donors and contributors to get involved",
    pic: "https://assets-global.website-files.com/61b845039d459604c5412c49/61dc6f5bbde1cf5b8afa2984_Cameron.jpg",
  },
  {
    name: "Chule",
    title: "Founder of Chatafisha",
    text: "I first learned about PotLock from donating, but then realized it was an open source funding protocol I could contribute to. It’s amazing to be part of a community where I can use my skills to directly grow impact",
    pic: "https://pbs.twimg.com/profile_images/1668910567740850177/S08fInBa_400x400.jpg",
  },
  {
    name: "Elijah Spina",
    title: "Contributor at MoonDAO",
    text: "Potlock isn’t just a platform, it’s an underlying innovation first community that stays on top of what I need to stay on top of an increasingly digital giving economy",
    pic: "https://gbma.lifesci.ucsb.edu/sites/default/files/styles/medium_square/public/2020-06/elijah.jpg?h=44ca2865&itok=shKuYcHG",
  },
  {
    name: "Russell Ballard",
    title: "Co-Founder at 40AcresDAO",
    text: "Potlock turned something as boring as donations to a gamified community experience where i am in the front row seat of helping grow and support my favorite causes.",
    pic: "https://www.nearimpact.org/people/russ.jpg",
  },
  {
    name: "Tracey Bowen",
    title: "Founder at H.E.R. DAO",
    text: "Outside of donations, I use PotLock for tracking my progress to donors.",
    pic: "https://www.fintechnexus.com/wp-content/uploads/2022/07/tracey-bowen--300x300.png",
  },
];

const Reviews = () => {
  return (
    <section className="items-stretch flex flex-col mt-48">
      <h1 className="header text-black text-6xl max-md:text-4xl font-[622] leading-[74.24px] tracking-tighter self-center">
        What they say about us?
      </h1>

      <div className="text-zinc-800 text-center text-3xl max-md:text-xl leading-10 self-center mt-5 max-md:max-w-full">
        Hear unique testimonials about Potlock from our amazing users{" "}
      </div>

      <section className="w-full mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-12 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {reviewsData
            .map((review, idx) => (
              <Review {...review} id={idx} />
            ))}
        </div>
      </section>
    </section>
  );
};

export default Reviews;
