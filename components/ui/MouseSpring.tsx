import { type MouseEvent, type ReactElement } from "react";
import { motion, useSpring } from "framer-motion";

function MouseSpring({
  children,
  w = 150,
  h = 150,
}: {
  children: ReactElement | string | undefined;
  w?: number;
  h?: number;
}) {
  const STRENGTH = 20;

  const xOffset = useSpring(0, { stiffness: 700, damping: 20 });
  const yOffset = useSpring(0, { stiffness: 700, damping: 20 });

  const onMouseMove = (e: MouseEvent) => {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();

    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);

    const distance = Math.sqrt(x * x + y * y);
    const drop = Math.max(0, 1 - distance);

    xOffset.set(STRENGTH * x * drop);
    yOffset.set(STRENGTH * y * drop);
  };

  return (
    <motion.div className="relative" style={{ x: xOffset, y: yOffset }}>
      {children}
      <motion.div
        className={`absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2`}
        style={{ width: w, height: h }}
        onMouseMove={onMouseMove}
        onMouseLeave={() => {
          xOffset.set(0);
          yOffset.set(0);
        }}
      />
    </motion.div>
  );
}

export default MouseSpring;
