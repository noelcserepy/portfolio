import {
  type AnimationControls,
  motion,
  useSpring,
  useMotionValue,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { type Page } from "data";
import Upper from "components/ui/Upper";
import H1 from "components/ui/H1";
import H2 from "components/ui/H2";
import Image, { type StaticImageData } from "next/image";
import { type MouseEvent, useState, useEffect } from "react";
import UpperSmall from "components/ui/UpperSmall";
import Button from "components/ui/Button";
import MouseSpring from "components/ui/MouseSpring";
import PageDetailsMobile from "./PageDetailsMobile";
import UpperMobile from "components/ui/UpperMobile";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.2,
      ease: "easeOut",
    },
  },
  reEnter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const clickedVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function PageContentMobile({
  page,
  controls,
}: {
  page: Page;
  controls: AnimationControls;
}) {
  const [clicked, setClicked] = useState<StaticImageData | null>(null);

  const onClick = (img: StaticImageData) => {
    if (clicked === img) {
      setClicked(null);
      return;
    }
    setClicked(img);
  };

  return (
    <motion.div
      key={page.title}
      className="mx-2 mb-2 flex h-min w-full flex-col space-y-8"
      variants={contentVariants}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <motion.div className="z-10 grid h-full max-h-[20%] w-full grid-cols-4">
        {page.images &&
          page.images.map((img, i) => (
            <motion.div key={i}>
              <Image
                src={img}
                alt={`${page.title}${i}`}
                width={150}
                height={150}
                sizes="25vw"
                onClick={() => onClick(img)}
              />
            </motion.div>
          ))}
      </motion.div>
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0">
        <AnimatePresence>
          {clicked && (
            <motion.div
              className="pointer-events-auto absolute left-0 top-0 z-20 h-full w-full"
              variants={clickedVariants}
              initial="hidden"
              animate="enter"
              exit="exit"
              onClick={() => setClicked(null)}
            >
              <Image
                src={clicked}
                alt={`${page.title} large`}
                fill
                style={{ objectFit: "contain" }}
                sizes="100vw"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div className="flex h-full w-full flex-col items-center justify-end space-y-12">
        <PageDetailsMobile page={page} />
        <div className="flex w-full justify-between px-3">
          <UpperMobile>{page.header}</UpperMobile>
          <UpperMobile>{page.date}</UpperMobile>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PageContentMobile;
