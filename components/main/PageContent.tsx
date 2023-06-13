import {
  type AnimationControls,
  motion,
  useSpring,
  useMotionValueEvent,
  useMotionValue,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import { type Page } from "data";
import Clickable from "components/ui/Clickable";
import H1 from "components/ui/H1";
import H2 from "components/ui/H2";
import Image, { type StaticImageData } from "next/image";
import { type MouseEvent, useState, useRef, useEffect } from "react";

const contentVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2,
      duration: 0.2,
      ease: "easeOut",
    },
  },
  reEnter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: -10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const hoveredImageVariants = {
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
      delay: 0.3,
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

function PageContent({
  page,
  controls,
}: {
  page: Page;
  controls: AnimationControls;
}) {
  const [hoveredImage, setHoveredImage] = useState<StaticImageData | null>(
    null
  );
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    if (window) {
      const h = window.innerHeight;
      console.log(h, "h");
      setWindowHeight(h);
    }
  }, []);

  const mouseX = useMotionValue(1000);
  const mouseY = useMotionValue(500);

  const mouseYWindow = useTransform(
    mouseY,
    [0, windowHeight],
    [50, windowHeight - 530]
  );

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseYWindow, { stiffness: 500, damping: 40 });

  // useMotionValueEvent(mouseY, "change", (x) => console.log(x));

  const onImageHover = (img: StaticImageData, e: MouseEvent) => {
    // springX.set(e.clientX - 600);
    // springY.set(e.clientY / 2);
    setHoveredImage(img);
  };

  const onMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX - 640);
    mouseY.set(e.clientY);
  };

  const onMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <motion.div
      key={page.title}
      className="ml-2 flex h-[92%] w-2/3"
      variants={contentVariants}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <motion.div className="flex h-full w-full flex-col justify-between">
        <Clickable>{page.header}</Clickable>
        <div className="flex w-3/5 flex-col space-y-6">
          <H1>{page.title}</H1>
          <H2>{page.subtitle}</H2>
          <p>{page.desciption}</p>
        </div>
        <Clickable>{page.date}</Clickable>
      </motion.div>
      <motion.div className="flex h-full w-40 flex-col justify-between">
        {page.images &&
          page.images.map((img, i) => (
            <motion.div key={i}>
              <Image
                src={img}
                alt={`${page.title}${i}`}
                width={500}
                height={500}
                onMouseMove={onMouseMove}
                onMouseOver={(e) => onImageHover(img, e)}
                onMouseLeave={onMouseLeave}
              />
            </motion.div>
          ))}
      </motion.div>
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0">
        <AnimatePresence>
          {hoveredImage && (
            <motion.div
              className="pointer-events-none absolute left-2/3 top-0 h-[480px] w-[640px]"
              style={{ top: springY, left: springX }}
              variants={hoveredImageVariants}
              initial="hidden"
              animate="enter"
              exit="exit"
            >
              <Image src={hoveredImage} alt={`${page.title} hover`} fill />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default PageContent;
