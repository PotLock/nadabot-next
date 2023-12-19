import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 300,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}

const Divistion = ({ title, number, className }) => (
  <div
    className={`flex flex-col items-stretchml-5 max-md:w-full max-md:ml-0 ${className}`}
  >
    <div className="px-4 flex flex-col items-center">
      <h1 className="text-black text-center text-7xl font-semibold leading-[96px] tracking-tighter whitespace-nowrap max-md:text-4xl">
        {number}
      </h1>
      <div className="text-zinc-800 text-center text-2xl font-medium leading-10 self-stretch whitespace-nowrap mt-3">
        {title}
      </div>
    </div>
  </div>
);

const RecentTransaction = () => {
  const [start, setStart] = useState(false);
  const [element, view] = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (view) setStart(true);
  }, [view]);

  return (
    <div className="items-stretch flex flex-col" ref={element}>
      <div className="border gap-5 grid grid-cols-3 max-md:flex-col border-[#656565] shadow-sm bg-zinc-50 w-full px-5 py-10 rounded-2xl border-solid max-md:max-w-full">
        <Divistion
          title={"Active Projects"}
          number={start ? <Number n={200} /> : 0}
        />
        <Divistion
          title={"Active Projects"}
          number={"$ 5,300,000"}
          className={"border-x border-x-[#656565]"}
        />
        <Divistion
          title={"Unique Donors"}
          number={start ? <Number n={400} /> : 0}
        />
      </div>
      <div className="text-black text-center text-3xl italic leading-[80px] tracking-tight self-center mt-2 max-md:max-w-full">
        ️ ❤️ <span className="underline">Eboni</span> generously gave $21 • a
        few seconds ago
      </div>
    </div>
  );
};

export default RecentTransaction;
