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
    mouseX.set(e.clientX * 0.45);
    mouseY.set(e.clientY);
  };

  const onMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <motion.div
      key={page.title}
      className="mx-2 flex h-full w-full justify-start  md:h-[92%]"
      variants={contentVariants}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <motion.div className="flex h-full w-full max-w-7xl flex-col justify-between">
        <Upper>{page.header}</Upper>
        <div className="flex w-[90%] flex-col space-y-4 lg:w-3/5 lg:space-y-8">
          <div className="flex flex-col space-y-2">
            <H1>{page.title}</H1>
            <H2>{page.subtitle}</H2>
          </div>
          <div className="flex flex-col space-y-2">
            {(page.technologies || page.responsibilities) && (
              <h3>
                <UpperSmall>Description</UpperSmall>
              </h3>
            )}
            <p>{page.description}</p>
          </div>
          {page.responsibilities && (
            <div className="flex flex-col space-y-2">
              <h3>
                <UpperSmall>Responsibilities</UpperSmall>
              </h3>
              <p>{page.responsibilities}</p>
            </div>
          )}
          {page.technologies && (
            <div className="flex flex-col space-y-2">
              <h3>
                <UpperSmall>Technologies</UpperSmall>
              </h3>
              <p>{page.technologies}</p>
            </div>
          )}
          <div className="flex items-center space-x-4">
            {page.website && (
              <a href={page.website} target="_blank" rel="noreferrer">
                {page.header === "Portfolio" ? (
                  <MouseSpring>
                    <Button>{page.buttonText}</Button>
                  </MouseSpring>
                ) : (
                  <MouseSpring w={50} h={50}>
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm89.8 96h-43.92c-1.15-30.72-11.09-59.83-27.94-82.2A90.18 90.18 0 0 1 217.8 122ZM128 218a1.75 1.75 0 0 1-1.32-.59c-19.56-21.07-31.26-51.2-32.56-83.41h67.75c-1.29 32.21-13 62.34-32.55 83.41a1.75 1.75 0 0 1-1.32.59Zm-33.88-96c1.3-32.21 13-62.34 32.56-83.41a1.77 1.77 0 0 1 2.64 0c19.56 21.07 31.26 51.2 32.55 83.41Zm15.94-82.2C93.21 62.17 83.27 91.28 82.12 122H38.2a90.18 90.18 0 0 1 71.86-82.2ZM38.2 134h43.92c1.15 30.72 11.09 59.83 27.94 82.2A90.18 90.18 0 0 1 38.2 134Zm107.74 82.2c16.85-22.37 26.79-51.48 27.94-82.2h43.92a90.18 90.18 0 0 1-71.86 82.2Z"
                      />
                    </motion.svg>
                  </MouseSpring>
                )}
              </a>
            )}

            {page.github && (
              <a href={page.github} target="_blank" rel="noreferrer">
                <MouseSpring w={50} h={50}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M206.13 75.92A57.79 57.79 0 0 0 201.2 29a6 6 0 0 0-5.2-3a57.77 57.77 0 0 0-47 24h-26a57.77 57.77 0 0 0-47-24a6 6 0 0 0-5.2 3a57.79 57.79 0 0 0-4.93 46.92A55.88 55.88 0 0 0 58 104v8a54.06 54.06 0 0 0 50.45 53.87A37.85 37.85 0 0 0 98 192v10H72a26 26 0 0 1-26-26a38 38 0 0 0-38-38a6 6 0 0 0 0 12a26 26 0 0 1 26 26a38 38 0 0 0 38 38h26v18a6 6 0 0 0 12 0v-40a26 26 0 0 1 52 0v40a6 6 0 0 0 12 0v-40a37.85 37.85 0 0 0-10.45-26.13A54.06 54.06 0 0 0 214 112v-8a55.88 55.88 0 0 0-7.87-28.08ZM202 112a42 42 0 0 1-42 42h-48a42 42 0 0 1-42-42v-8a43.86 43.86 0 0 1 7.3-23.69a6 6 0 0 0 .81-5.76a45.85 45.85 0 0 1 1.43-36.42a45.85 45.85 0 0 1 35.23 21.1a6 6 0 0 0 5.06 2.77h32.34a6 6 0 0 0 5.06-2.76a45.83 45.83 0 0 1 35.23-21.11a45.85 45.85 0 0 1 1.43 36.42a6 6 0 0 0 .79 5.74A43.78 43.78 0 0 1 202 104Z"
                    />
                  </svg>
                </MouseSpring>
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
                width={200}
                height={200}
                sizes="10vw"
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
              className="pointer-events-none absolute left-2/3 top-0 h-[400px] w-[500px] lg:h-[480px] lg:w-[640px]"
              style={{ top: springY, left: springX }}
              variants={hoveredImageVariants}
              initial="hidden"
              animate="enter"
              exit="exit"
            >
              <Image
                src={hoveredImage}
                priority
                alt={`${page.title} hover`}
                fill
                sizes="50vw"
                quality={100}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default PageContent;
