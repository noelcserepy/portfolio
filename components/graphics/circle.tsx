import { AnimatePresence, type MotionValue, motion } from "framer-motion";

const circleVariants = {
  hidden: {
    width: 0,
    height: 0,
    x: -10,
    fontSize: 0,
  },
  enter: {
    width: "3rem",
    height: "3rem",
    x: 0,
    fontSize: "1.5rem",
    transition: {
      duration: 0.1,
      staggerChildren: 0.1,
      ease: "circOut",
    },
  },
  exit: {
    width: 0,
    height: 0,
    x: -10,
    fontSize: 0,
    transition: {
      duration: 0.1,
      ease: "circIn",
    },
  },
};

function Circle({
  circleTopPercent,
  currentPage,
}: {
  circleTopPercent: MotionValue;
  mouseOver: boolean;
  currentPage: MotionValue<number>;
}) {
  return (
    <AnimatePresence>
      <motion.div
        className="pointer-events-none absolute -right-2 flex h-12 w-12 -translate-y-1/2 items-center justify-center"
        style={{
          top: circleTopPercent,
        }}
      >
        <motion.div
          variants={circleVariants}
          initial="hidden"
          animate="enter"
          exit="exit"
          className={`h-full w-full rounded-full border-[1px] border-dark bg-light p-1`}
          style={{
            originX: 0.5,
            originY: 0.5,
          }}
        >
          <motion.div className="z-10 flex h-full w-full items-center justify-center rounded-full bg-dark pt-[2px] font-title  text-light">
            {currentPage}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Circle;
