import type { ReactElement } from "react";

function UpperSmall({ children }: { children: ReactElement | string }) {
  return <span className="text-xs font-bold uppercase">{children}</span>;
}

export default UpperSmall;
