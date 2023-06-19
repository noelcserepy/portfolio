import type { ReactElement } from "react";

function H1({ children }: { children: ReactElement | string }) {
  return (
    <h1 className="-mb-3 font-title text-7xl lg:text-8xl xl:text-9xl ">
      {children}
    </h1>
  );
}

export default H1;
