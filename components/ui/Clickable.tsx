import type { ReactElement } from "react";

function Clickable({ children }: { children: ReactElement | string }) {
  return <span className="text-lg uppercase">{children}</span>;
}

export default Clickable;
