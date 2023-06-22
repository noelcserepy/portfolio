import { useWindowSize } from "hooks/useWindowSize";
import type { ReactElement } from "react";

function H1({ children }: { children: ReactElement | string }) {
  const size = useWindowSize();
  return (
    <h1
      className={`-mb-3 font-title ${
        size[1] && size[1] < 600 ? "text-5xl" : "text-7xl"
      } lg:text-8xl xl:text-9xl`}
    >
      {children}
    </h1>
  );
}

export default H1;
