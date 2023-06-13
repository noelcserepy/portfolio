import {
  motion,
  useMotionTemplate,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { type MouseEvent, useState, useEffect } from "react";
import Line from "./line";
import Circle from "./circle";

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      delay: 0,
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

function Lines({
  pagesLength,
  indexSelect,
  scrollIndex,
}: {
  pagesLength: number;
  indexSelect: (index: number) => Promise<void>;
  scrollIndex: number;
}) {
  const yFraction = useSpring(0, {
    stiffness: 500,
    damping: 40,
  }) as MotionValue<number>;
  const pointerLineIndex = useTransform(yFraction, [0, 1], [0, 32]);
  const [mouseOver, setMouseOver] = useState(false);
  const circleTop = useTransform(yFraction, [0, 1], [0, 100]);
  const circleTopPercent = useMotionTemplate`${circleTop}%`;

  // Current page based on mouse position
  const currentPage = useTransform(yFraction, (y) => {
    const boundaries = Array.from(
      { length: pagesLength - 1 },
      (_, i) => (i + 1) / pagesLength
    );
    const index = boundaries.findIndex((boundary) => y < boundary);
    return index === -1 ? pagesLength - 1 : index;
  });

  // Get yFraction from scrollIndex
  useEffect(() => {
    yFraction.set(scrollIndex / (pagesLength - 1));
  }, [scrollIndex, yFraction, pagesLength, mouseOver]);

  const onMove = (e: MouseEvent) => {
    const y = e.clientY / e.currentTarget.clientHeight - 1;
    yFraction.set(y);
  };

  const onClick = () => {
    indexSelect(currentPage.get()).catch(console.error);
  };

  return (
    <>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174 289"
        className="cursor-pointer"
        variants={svgVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        onMouseMove={(e) => onMove(e)}
        onMouseEnter={() => {
          setMouseOver(true);
        }}
        onMouseLeave={() => {
          setMouseOver(false);
        }}
        onClick={onClick}
      >
        <defs>
          <style>
            {`
      .cls-1 {
        fill: none;
        stroke: #000;
        stroke-miterlimit: 10;
      }`}
          </style>
        </defs>
        {Array(33)
          .fill(0)
          .map((_, i) => (
            <Line
              i={i}
              pointerLineIndex={pointerLineIndex}
              key={i}
              mouseOver={mouseOver}
            />
          ))}
      </motion.svg>
      <Circle
        circleTopPercent={circleTopPercent}
        mouseOver={mouseOver}
        currentPage={currentPage}
      />
    </>
  );
}

export default Lines;
