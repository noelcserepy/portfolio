import { motion } from "framer-motion";

const dialVariants = {
  hidden: { x: "-0%", y: -10 },
  enter: {
    x: "-0%",
    y: -10,
    transition: {
      duration: 1,
      ease: "circOut",
    },
  },
};
const lineVariants = {
  hidden: { pathLength: 0 },
  enter: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "circOut",
    },
  },
};
const groupVariants = {
  hidden: { opacity: 1 },
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

function Dial() {
  return (
    <div className="relative flex h-screen w-full items-center justify-end">
      {/* <div className="absolute h-full w-full bg-gradient-to-r from-light to-transparent" /> */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 850 850"
        variants={dialVariants}
        width="90vh"
        height="90vh"
        animate="enter"
        initial="hidden"
        style={{ translateX: "-48%" }}
      >
        <path
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          d="m426,3.5C192.75,3.5,4,192.25,4,425.5s188.75,422,422,422,422-188.75,422-422S659.25,3.5,426,3.5Z"
        />
        <motion.g variants={groupVariants} initial="hidden" animate="enter">
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="426"
            y1="847.5"
            x2="426"
            y2="831"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="587.49"
            y1="815.38"
            x2="581.27"
            y2="800.37"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="724.4"
            y1="723.9"
            x2="712.88"
            y2="712.38"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="815.88"
            y1="586.99"
            x2="800.87"
            y2="580.77"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="848"
            y1="425.5"
            x2="831.5"
            y2="425.5"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="815.88"
            y1="264.01"
            x2="800.51"
            y2="270.37"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="724.4"
            y1="127.1"
            x2="712.38"
            y2="139.12"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x1="587.49"
            y1="35.62"
            x2="580.92"
            y2="51.48"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="426"
            y2="21"
            x1="426"
            y1="3.5"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="271.23"
            y2="51.84"
            x1="264.51"
            y1="35.62"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="140.12"
            y2="139.62"
            x1="127.6"
            y1="127.1"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="52.34"
            y2="270.73"
            x1="36.12"
            y1="264.01"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="21.5"
            y2="425.5"
            x1="4"
            y1="425.5"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="51.98"
            y2="580.42"
            x1="36.12"
            y1="586.99"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="139.62"
            y2="711.88"
            x1="127.6"
            y1="723.9"
          />
          <motion.line
            variants={lineVariants}
            fill="none"
            stroke="#000"
            strokeMiterlimit="10"
            x2="270.87"
            y2="800.01"
            x1="264.51"
            y1="815.38"
          />
        </motion.g>
      </motion.svg>
    </div>
  );
}

export default Dial;
