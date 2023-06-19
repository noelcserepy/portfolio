import { AnimatePresence, type MotionValue, motion } from "framer-motion";

const circleVariants = {
  hidden: {
    width: 0,
    height: 0,
    x: -10,
    y: "-50%",
    fontSize: 0,
    opacity: 0,
  },
  enter: {
    width: "1.8rem",
    height: "1.8rem",
    x: 0,
    opacity: 1,
    fontSize: "0.5rem",
    transition: {
      opacity: {
        delay: 2,
        duration: 0,
      },
      delay: 2,
      duration: 0.5,
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

function CircleMobile({
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
        variants={circleVariants}
        initial="hidden"
        animate="enter"
        exit="exit"
        className="pointer-events-none absolute -right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center"
        style={{
          top: circleTopPercent,
          originX: 0.5,
          originY: 0.5,
        }}
      >
        <motion.div
          className={`h-full w-full rotate-90 rounded-full border-[1px] border-dark bg-light p-1 text-base`}
        >
          <motion.div className="z-10 flex h-full w-full items-center justify-center rounded-full bg-dark pt-[2px] font-title  text-light">
            {currentPage}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default CircleMobile;
