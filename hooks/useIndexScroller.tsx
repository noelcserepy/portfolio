import { useMotionValue } from "framer-motion";
import { useCallback, useContext, useEffect, useRef } from "react";
import _, { DebouncedFunc, debounce } from "lodash";
import IsMobileContext from "components/contexts/isMobileContext";

function useIndexScroller(
  maxIndex: number,
  currentIndex: number,
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
) {
  const ready = useRef(true);

  const { isMobile, setIsMobile } = useContext(IsMobileContext);

  const indexRef = useRef(currentIndex);
  const totalScroll = useMotionValue(0);

  // const resetReady = debounce(() => {
  //   ready.current = true;
  // }, 700);}

  // const debouncedResetReady = useCallback(resetReady, []);
  const debouncedResetReady = useCallback<() => void>(
    debounce(() => {
      ready.current = true;
    }, 700) as () => void,
    []
  );

  // Using touch events to detect swipe
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
      if (!ready.current) {
        return;
      }
      ready.current = false;
      debouncedResetReady();

      const deltaY = endY - startY;
      const deltaX = endX - startX;
      const deltaTime = endTime - startTime;

      // Check if the swipe is long enough and fast enough
      if (isMobile) {
        // Uses X if narrow
        if (Math.abs(deltaX) > 50 && deltaTime < 300) {
          if (deltaX > 0) {
            totalScroll.set(totalScroll.get() + 1);
            if (indexRef.current === maxIndex) {
              indexRef.current = 0;
            } else {
              indexRef.current += 1;
            }
          } else {
            totalScroll.set(totalScroll.get() - 1);
            if (indexRef.current - 1 < 0) {
              indexRef.current = maxIndex;
            } else {
              indexRef.current -= 1;
            }
          }
          setCurrentIndex(indexRef.current);
        }
      } else {
        // Uses Y if wide
        if (Math.abs(deltaY) > 50 && deltaTime < 300) {
          if (deltaY > 0) {
            totalScroll.set(totalScroll.get() + 1);
            if (indexRef.current === maxIndex) {
              indexRef.current = 0;
            } else {
              indexRef.current += 1;
            }
          } else {
            totalScroll.set(totalScroll.get() - 1);
            if (indexRef.current - 1 < 0) {
              indexRef.current = maxIndex;
            } else {
              indexRef.current -= 1;
            }
          }
          setCurrentIndex(indexRef.current);
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
  }, [isMobile]);

  // Using scroll event listener to update index
  useEffect(() => {
    function handleScroll(e: WheelEvent) {
      if (!ready.current) {
        return;
      }
      ready.current = false;
      debouncedResetReady();
      if (e.deltaY > 0) {
        totalScroll.set(totalScroll.get() + 1);
        if (indexRef.current === maxIndex) {
          indexRef.current = 0;
        } else {
          indexRef.current += 1;
        }
      }
      if (e.deltaY < 0) {
        totalScroll.set(totalScroll.get() - 1);
        if (indexRef.current - 1 < 0) {
          indexRef.current = maxIndex;
        } else {
          indexRef.current -= 1;
        }
      }
      setCurrentIndex(indexRef.current);
      console.log(indexRef.current);
    }

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isMobile]);

  return { totalScroll };
}

export default useIndexScroller;
