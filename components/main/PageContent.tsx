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

  const onImageHover = (img: StaticImageData) => {
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
        <Upper>{page.header}</Upper>
        <div className="flex w-3/5 flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <H1>{page.title}</H1>
            <H2>{page.subtitle}</H2>
          </div>
          <div className="flex flex-col space-y-2">
            {(page.technologies || page.responsibilities) && (
              <UpperSmall>Description</UpperSmall>
            )}
            <p>{page.desciption}</p>
          </div>
          {page.responsibilities && (
            <div className="flex flex-col space-y-2">
              <UpperSmall>Responsibilities</UpperSmall>
              <p>{page.responsibilities}</p>
            </div>
          )}
          {page.technologies && (
            <div className="flex flex-col space-y-2">
              <UpperSmall>Technologies</UpperSmall>
              <p>{page.technologies}</p>
            </div>
          )}
          <div className="flex space-x-2">
            {page.website && (
              <a href={page.website} target="_blank" rel="noreferrer">
                <button className="rounded-md bg-black px-4 py-2 text-white">
                  {page.buttonText}
                </button>
              </a>
            )}

            {page.github && (
              <a href={page.github} target="_blank" rel="noreferrer">
                <button className="rounded-md bg-black px-4 py-2 text-white">
                  Github
                </button>
              </a>
            )}
          </div>
        </div>
        <Upper>{page.date}</Upper>
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
                onMouseOver={() => onImageHover(img)}
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
