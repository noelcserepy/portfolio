import { motion, useAnimate, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect } from "react";

const lineVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 1.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Line({
  i,
  pointerLineIndex,
}: {
  i: number;
  pointerLineIndex: MotionValue<number>;
  mouseOver: boolean;
}) {
  const [scope, animate] = useAnimate();

  const SPREAD = 4;
  const DISTANCE = 3.4;
  const POW = 3;

  const steppedIndex = useTransform(pointerLineIndex, (x) => {
    return Math.round(x);
  });

  const xShift = useTransform(steppedIndex, (x) => {
    if (x < 0) return 0;
    if (Math.abs(x - i) > SPREAD) return 0;

    return Math.max(Math.pow(DISTANCE - Math.abs(x - i), POW), 0);
  });

  const springXShift = useSpring(xShift, {
    damping: 10,
    mass: 0.1,
    stiffness: 600,
  });

  useEffect(() => {
    xShift.set(-30 * i);
    const controls = animate(xShift, springXShift.get(), {
      delay: 1.2,
      duration: 0.5,
      ease: "easeOut",
      onComplete: () => {
        pointerLineIndex.set(0);
      },
    });
    return controls.stop;
  }, []);

  return (
    <motion.line
      variants={lineVariants}
      initial="hidden"
      animate="enter"
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
