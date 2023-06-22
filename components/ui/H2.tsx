import { useWindowSize } from "hooks/useWindowSize";
import type { ReactElement } from "react";

function H2({ children }: { children: ReactElement | string }) {
  const size = useWindowSize();
  return (
    <h2
      className={`${
        size[1] && size[1] < 600 ? "text-md" : "text-lg"
      } font-semibold uppercase lg:text-2xl`}
    >
      {children}
    </h2>
  );
}

export default H2;
