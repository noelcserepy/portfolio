import { type NextPage } from "next";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { AnimatePresence, useAnimationControls } from "framer-motion";
import {
  type WheelEventHandler,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import data from "data";
import PageContentMobile from "./PageContentMobile";
import LinesMobile from "./graphics/LinesMobile";
import IsMobileContext from "components/contexts/isMobileContext";

const Mobile: NextPage = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const { isMobile } = useContext(IsMobileContext);

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
    artboard: "Mobile",
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.TopCenter,
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
  const onNext = useCallback(() => {
    rive && rive.play("Next");
  }, [rive]);
  const onPrevious = useCallback(() => {
    rive && rive.play("Previous");
  }, [rive]);

  const onForward = useCallback(() => {
    rive && rive.play("Forward");
  }, [rive]);
  const onBack = useCallback(() => {
    rive && rive.play("Back");
  }, [rive]);

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

  const nextSequence = useCallback(async () => {
    await controls.start("exit");
    if (scrollIndex === pagesLength - 1) {
      setScrollIndex(0);
      onNext();
      return;
    }
    setScrollIndex(scrollIndex + 1);
    onNext();
  }, [controls, onNext, pagesLength, scrollIndex]);

  const previousSequence = useCallback(async () => {
    await controls.start("exit");
    if (scrollIndex === 0) {
      setScrollIndex(pagesLength - 1);
      onPrevious();
      return;
    }
    setScrollIndex(scrollIndex - 1);
    onPrevious();
  }, [controls, onPrevious, pagesLength, scrollIndex]);

  // Scroll handler
  const onScroll = async (e: WheelEvent) => {
    if (isScrolling) return;
    setIsScrolling(true);
    setHasEntered(true);
    if (e.deltaY > 0) {
      await nextSequence();
    }
    if (e.deltaY < 0) {
      await previousSequence();
    }
  };

  // Touch handler
  useEffect(() => {
    let startY = 0;
    let endY = 0;
    let startX = 0;
    let endX = 0;
    let startTime = 0;
    let endTime = 0;

    function handleTouchStart(e: TouchEvent) {
      if (!e.touches[0]) return;
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
      endY = e.touches[0].clientY;
      endX = e.touches[0].clientX;
      startTime = e.timeStamp;
    }

    function handleTouchMove(e: TouchEvent) {
      if (!e.touches[0]) return;
      endY = e.touches[0].clientY;
      endX = e.touches[0].clientX;
      endTime = e.timeStamp;
    }

    function handleTouchEnd() {
      if (isScrolling) return;
      setHasEntered(true);
      const deltaY = endY - startY;
      const deltaX = endX - startX;
      const deltaTime = endTime - startTime;

      // Check if the swipe is long enough and fast enough
      if (isMobile) {
        // Uses X if narrow
        if (Math.abs(deltaX) > 50 && deltaTime < 300) {
          if (deltaX > 0) {
            setIsScrolling(true);
            previousSequence().catch(console.error);
          } else {
            setIsScrolling(true);
            nextSequence().catch(console.error);
          }
        }
      } else {
        // Uses Y if wide
        if (Math.abs(deltaY) > 50 && deltaTime < 300) {
          if (deltaY > 0) {
            setIsScrolling(true);
            previousSequence().catch(console.error);
          } else {
            setIsScrolling(true);
            nextSequence().catch(console.error);
          }
        }
      }
    }

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile, isScrolling, nextSequence, previousSequence]);

  return (
    <main
      className="relative flex h-screen w-screen translate-x-0 flex-col-reverse items-center justify-start bg-light text-dark"
      onWheel={onScroll as unknown as WheelEventHandler<HTMLDivElement>}
    >
      <div className="relative flex aspect-2/1 h-min max-h-[30%] w-screen items-center justify-end">
        <RiveComponent />
      </div>
      <div className="absolute -bottom-4 flex aspect-lines h-[15%] -rotate-90 flex-col items-start justify-center">
        <LinesMobile
          pagesLength={pagesLength}
          indexSelect={indexSelect}
          scrollIndex={scrollIndex}
        />
      </div>

      <AnimatePresence mode="wait">
        {data.pages.map((page, index) => {
          if (index === scrollIndex) {
            return (
              <PageContentMobile
                page={page}
                controls={controls}
                key={page.title}
              />
            );
          }
        })}
      </AnimatePresence>
    </main>
  );
};

export default Mobile;
