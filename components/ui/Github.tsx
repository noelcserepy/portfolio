import { type ReactElement } from "react";
import { motion } from "framer-motion";

function Button({ children }: { children: ReactElement | string | undefined }) {
  return (
    <motion.button className="rounded-md border-[1px] border-dark bg-light px-2 py-1 text-dark transition-all hover:bg-dark hover:text-white">
      {children}
    </motion.button>
  );
}

export default Button;
