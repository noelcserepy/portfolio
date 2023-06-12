import { motion, useAnimate, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect } from "react";

const lineVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
  return: {
    opacity: 1,
    x: [null, 0],
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

function Line({
  i,
  pointerLineIndex,
  mouseOver,
}: {
  i: number;
  pointerLineIndex: MotionValue<number>;
  mouseOver: boolean;
}) {
  const SPREAD = 4;
  const DISTANCE = 3.4;
  const POW = 3;

  const steppedIndex = useTransform(pointerLineIndex, (x) => {
    return Math.round(x);
  });

  const xShift = useTransform(steppedIndex, (x) => {
    if (!mouseOver) return 0;
    if (x < 0) return 0;
    if (Math.abs(x - i) > SPREAD) return 0;

    return Math.max(Math.pow(DISTANCE - Math.abs(x - i), POW), 0);
  });

  const springXShift = useSpring(xShift, {
    damping: 10,
    mass: 0.1,
    stiffness: 700,
  });

  // useEffect(() => {
  //   if (!mouseOver) {
  //     console.log("ran");
  //     const controls = animate(xShift, 0, {
  //       duration: 0.5,
  //       ease: "easeInOut",
  //       onComplete: () => {
  //         return;
  //       },
  //     });

  //     return controls.stop();
  //   }
  // }, [mouseOver, xShift, animate]);

  return (
    <motion.line
      style={{
        x: springXShift,
      }}
      className="cls-1"
      y1={0.5 + 9 * i}
      x2="87"
      y2={0.5 + 9 * i}
      key={i}
    />
  );
}

export default Line;
