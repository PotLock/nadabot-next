import { useRef, useEffect } from "react";
import Lottie from "lottie-react";

const Animation = ({ animationJison, className, speed, interactivity }) => {
  const lottieRef = useRef();
  useEffect(() => {
    lottieRef?.current?.setSpeed(speed);
  }, []);
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationJison}
      interactivity={interactivity}
      className={className}
    />
  );
};

export default Animation;
