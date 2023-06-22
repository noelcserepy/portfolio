import {
  type AnimationControls,
  motion,
  useSpring,
  useMotionValue,
  useTransform,
  useAnimate,
} from "framer-motion";
import { type Page } from "data";
import Upper from "components/ui/Upper";
import Image, { type StaticImageData } from "next/image";
import { type MouseEvent, useState, useEffect } from "react";
import PageDetails from "./PageDetails";
import { useWindowSize } from "hooks/useWindowSize";

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
    zIndex: 0,
  },
  enter: {
    opacity: 1,
    zIndex: 50,
    transition: {
      duration: 0,
      ease: "easeOut",
    },
  },
  exit: {
    zIndex: 0,
    opacity: 0,
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

  const size = useWindowSize();
  const [scope, animate] = useAnimate();

  const mouseX = useMotionValue(1000);
  const mouseY = useMotionValue(500);

  const mouseYWindow = useTransform(
    mouseY,
    [0, size[1] as number],
    [50, (size[1] as number) - 530]
  );

  const springX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const springY = useSpring(mouseYWindow, { stiffness: 500, damping: 40 });

  const onMouseMove = (e: MouseEvent) => {
    mouseX.set(e.clientX * 0.45);
    mouseY.set(e.clientY);
  };

  // Hovered image enter and exit animation
  useEffect(() => {
    const enter = async () => {
      await animate(
        scope.current,
        {
          scale: 1,
          opacity: 1,
        },
        {
          duration: 0.2,
          ease: "easeOut",
        }
      );
    };
    const exit = async () => {
      await animate(
        scope.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          delay: 0.3,
          duration: 0.2,
          ease: "easeIn",
        }
      );
    };
    if (hoveredImage) {
      enter().catch((e) => console.log(e));
      return;
    }
    exit().catch((e) => console.log(e));
  }, [hoveredImage, animate, scope]);

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
        <PageDetails page={page} />
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
                onMouseOver={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
              />
            </motion.div>
          ))}
      </motion.div>
      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0">
        <motion.div
          ref={scope}
          className="pointer-events-none absolute left-2/3 top-0 h-[400px] w-[500px] lg:h-[480px] lg:w-[640px]"
          style={{ top: springY, left: springX }}
        >
          {page.images &&
            page.images.map((img, i) => (
              <motion.div
                key={i}
                className="h-full w-full"
                variants={hoveredImageVariants}
                initial="hidden"
                animate={img === hoveredImage ? "enter" : "exit"}
              >
                <Image
                  src={img}
                  alt={`${page.title} hover`}
                  fill
                  sizes="50vw"
                  quality={100}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default PageContent;
