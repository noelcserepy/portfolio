import { type ReactElement } from "react";

function Button({ children }: { children: ReactElement | string | undefined }) {
  return (
    <button className="rounded-md bg-dark px-4 py-2 font-semibold text-light">
      {children}
    </button>
  );
}

export default Button;
