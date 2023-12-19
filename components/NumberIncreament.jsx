import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const NumberIncrement = ({ endValue }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const targetRef = useRef(null);

  const animation = useSpring({
    number: isVisible ? endValue : 0,
    from: { number: 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(targetRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      setAnimatedValue(endValue);
    }
  }, [isVisible, endValue]);

  return (
    <div ref={targetRef}>
      <animated.span>{animation.number}</animated.span>
    </div>
  );
};

export default NumberIncrement;
