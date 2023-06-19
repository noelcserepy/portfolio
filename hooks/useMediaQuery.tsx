import { useEffect, useState } from "react";

/**
 * Checks if the window width matches a certain breakpoint.
 * @param {string} breakpoint A Tailwind breakpoint (e.g. "sm") or media query (e.g. "(min-width: 640px)").
 * @return {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} True if the viewport width matches the breakpoint.
 */
export function useMediaQuery(
  breakpoint: string
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [matches, setMatches] = useState(false);
  const twQueries = {
    xs: "(max-width: 639px)",
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  };

  let query = breakpoint;
  if (Object.keys(twQueries).find((key) => key === breakpoint)) {
    query = twQueries[breakpoint as keyof typeof twQueries];
  }

  const matchMedia = () => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    return media;
  };

  useEffect(() => {
    const media = matchMedia();
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return [matches, setMatches];
}
