import type { ReactElement } from "react";

function Upper({ children }: { children: ReactElement | string }) {
  return <span className="text-lg uppercase">{children}</span>;
}

export default Upper;
