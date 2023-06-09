import { motion, useMotionValue, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

function Lines() {
  const yFraction = useMotionValue(-1);
  const lineIndex = useTransform(yFraction, (y) => Math.floor(y * 31));

  const onMove = (e: MouseEvent) => {
    // Get mouse y position in percentage of svg height
    const y = e.clientY / e.currentTarget.clientHeight - 1;
    yFraction.set(y);
    console.log(yFraction.get());
  };

  return (
    <motion.svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 87 288"
      onMouseMove={(e) => onMove(e)}
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
      {Array(31)
        .fill(0)
        .map((_, i) => (
          <motion.line
            style={{
              x: (i - lineIndex.get()) * 2,
            }}
            className="cls-1"
            y1={0.5 + 9 * i}
            x2="87"
            y2={0.5 + 9 * i}
            key={i}
          />
        ))}

      {/* <motion.line className="cls-1" y1=".5" x2="87" y2=".5" />
      <motion.line className="cls-1" y1="9.5" x2="87" y2="9.5" />
      <motion.line className="cls-1" y1="18.5" x2="87" y2="18.5" />
      <motion.line className="cls-1" y1="27.5" x2="87" y2="27.5" />
      <motion.line className="cls-1" y1="36.5" x2="87" y2="36.5" />
      <motion.line className="cls-1" y1="45.5" x2="87" y2="45.5" />
      <motion.line className="cls-1" y1="54.5" x2="87" y2="54.5" />
      <motion.line className="cls-1" y1="63.5" x2="87" y2="63.5" />
      <motion.line className="cls-1" y1="72.5" x2="87" y2="72.5" />
      <motion.line className="cls-1" y1="81.5" x2="87" y2="81.5" />
      <motion.line className="cls-1" y1="90.5" x2="87" y2="90.5" />
      <motion.line className="cls-1" y1="99.5" x2="87" y2="99.5" />
      <motion.line className="cls-1" y1="108.5" x2="87" y2="108.5" />
      <motion.line className="cls-1" y1="117.5" x2="87" y2="117.5" />
      <motion.line className="cls-1" y1="126.5" x2="87" y2="126.5" />
      <motion.line className="cls-1" y1="135.5" x2="87" y2="135.5" />
      <motion.line className="cls-1" y1="144.5" x2="87" y2="144.5" />
      <motion.line className="cls-1" y1="153.5" x2="87" y2="153.5" />
      <motion.line className="cls-1" y1="162.5" x2="87" y2="162.5" />
      <motion.line className="cls-1" y1="171.5" x2="87" y2="171.5" />
      <motion.line className="cls-1" y1="180.5" x2="87" y2="180.5" />
      <motion.line className="cls-1" y1="189.5" x2="87" y2="189.5" />
      <motion.line className="cls-1" y1="198.5" x2="87" y2="198.5" />
      <motion.line className="cls-1" y1="207.5" x2="87" y2="207.5" />
      <motion.line className="cls-1" y1="216.5" x2="87" y2="216.5" />
      <motion.line className="cls-1" y1="225.5" x2="87" y2="225.5" />
      <motion.line className="cls-1" y1="234.5" x2="87" y2="234.5" />
      <motion.line className="cls-1" y1="243.5" x2="87" y2="243.5" />
      <motion.line className="cls-1" y1="252.5" x2="87" y2="252.5" />
      <motion.line className="cls-1" y1="261.5" x2="87" y2="261.5" />
      <motion.line className="cls-1" y1="270.5" x2="87" y2="270.5" />
      <motion.line className="cls-1" y1="279.5" x2="87" y2="279.5" /> */}
    </motion.svg>
  );
}

export default Lines;
