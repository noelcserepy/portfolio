import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { type MouseEvent, useState } from "react";
import Line from "./line";
import Circle from "./circle";

function Lines({
  pagesLength,
  indexSelect,
}: {
  pagesLength: number;
  indexSelect: (index: number) => void;
}) {
  const yFraction = useMotionValue(0);
  const pointerLineIndex = useTransform(yFraction, [0, 1], [0, 32]);
  const [mouseOver, setMouseOver] = useState(false);
  const circleTop = useTransform(yFraction, [0, 1], [0, 100]);
  const circleTopPercent = useMotionTemplate`${circleTop}%`;

  // Current page based on yFraction
  const currentPage = useTransform(yFraction, (y) => {
    return Math.round(y * (pagesLength - 1));
  });

  const onMove = (e: MouseEvent) => {
    // Get mouse y position in percentage of svg height
    const y = e.clientY / e.currentTarget.clientHeight - 1;
    yFraction.set(y);
  };

  const onClick = () => {
    indexSelect(currentPage.get());
  };

  return (
    <>
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 174 289"
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
