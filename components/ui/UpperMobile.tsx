import type { ReactElement } from "react";

function UpperMobile({ children }: { children: ReactElement | string }) {
  return <span className="text-sm uppercase">{children}</span>;
}

export default UpperMobile;
