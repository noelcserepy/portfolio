import type { ReactElement } from "react";

function H2({ children }: { children: ReactElement | string }) {
  return <h2 className="text-2xl font-semibold uppercase">{children}</h2>;
}

export default H2;
