import type { ReactElement } from "react";

function H2({ children }: { children: ReactElement | string }) {
  return (
    <h2 className="text-lg font-semibold uppercase lg:text-2xl">{children}</h2>
  );
}

export default H2;
