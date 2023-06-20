import { type NextPage } from "next";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { WheelEventHandler } from "react";
import data from "data";
import Lines from "components/graphics/lines";
import PageContent from "components/desktop/PageContent";

const Desktop: NextPage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const isMounted = useRef(true);
  const controls = useAnimationControls();

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  if (!data) throw new Error("No data");
  const pagesLength = data.pages.length;

  const { rive, RiveComponent } = useRive({
    src: "/rive/dial_1.riv",
    autoplay: false,
    artboard: "Desktop",
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.CenterRight,
    }),
    onStop: () => {
      if (!isMounted.current) return;
      controls.start("reEnter").catch(console.error);
    },
  });

  // Debounce scroll
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 700);
    return () => clearTimeout(timeout);
  }, [scrollIndex]);

  // Content enter animation
  useEffect(() => {
    const startSequence = async () => {
      await controls.start("enter");
    };

    if (!hasEntered) {
      startSequence().catch(console.error);
      return;
    }
  }, [controls, hasEntered]);

  // Rive enter animation
  if (!hasEntered) {
    rive && rive.play("Enter");
  }

  // Rive animation handlers
  const onNext = () => {
    rive && rive.play("Next");
  };
  const onPrevious = () => {
    rive && rive.play("Previous");
  };
  const onForward = () => {
    rive && rive.play("Forward");
  };
  const onBack = () => {
    rive && rive.play("Back");
  };

  // Page index selection
  const indexSelect = async (index: number): Promise<void> => {
    if (index === scrollIndex) return;
    setHasEntered(true);
    setIsScrolling(true);
    await controls.start("exit");

    if (index > scrollIndex) {
      onForward();
    } else {
      onBack();
    }

    setScrollIndex(index);
  };

  // Scroll handler
  const onScroll = async (e: WheelEvent) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setHasEntered(true);
    if (e.deltaY > 0) {
      await controls.start("exit");
      if (scrollIndex === pagesLength - 1) {
        setScrollIndex(0);
        onNext();
        return;
      }
      setScrollIndex(scrollIndex + 1);
      onNext();
    }
    if (e.deltaY < 0) {
      await controls.start("exit");
      if (scrollIndex === 0) {
        setScrollIndex(pagesLength - 1);
        onPrevious();
        return;
      }
      setScrollIndex(scrollIndex - 1);
      onPrevious();
    }
  };

  return (
    <main
      className="relative flex h-screen w-screen translate-x-0 flex-col-reverse items-center justify-start bg-light text-dark md:w-[110%] md:-translate-x-32 md:flex-row lg:w-screen lg:translate-x-0"
      onWheel={onScroll as unknown as WheelEventHandler<HTMLDivElement>}
    >
      <div className="relative flex aspect-2/1 h-min w-screen items-center justify-end md:aspect-1/2 md:h-screen md:w-min">
        <RiveComponent />
      </div>
      <div className="absolute left-12 top-1/2 flex aspect-lines h-1/3 -translate-y-1/2 translate-x-24 flex-col items-start  justify-center  lg:translate-x-0">
        <Lines
          pagesLength={pagesLength}
          indexSelect={indexSelect}
          scrollIndex={scrollIndex}
        />
      </div>

      <AnimatePresence mode="wait">
        {data.pages.map((page, index) => {
          if (index === scrollIndex) {
            return (
              <PageContent page={page} controls={controls} key={page.title} />
            );
          }
        })}
      </AnimatePresence>
      <p className="absolute bottom-0 left-[5%] text-xs text-gray-500">
        © 2023 Noël Cserépy
      </p>
    </main>
  );
};

export default Desktop;
