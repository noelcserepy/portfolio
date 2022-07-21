import { motion } from "framer-motion";
import Link from "next/link";

const itemVariants = {
	closed: {
		x: 50,
		opacity: 0,
	},

	open: {
		x: 0,
		opacity: 1,
	},
};

const MenuItem = ({ children }) => {
	return (
		<motion.li
			className="font-title text-8xl text-white origin-center cursor-pointer list-none select-none"
			style={{ letterSpacing: "0em" }}
			variants={itemVariants}
			whileHover={{
				letterSpacing: "0.1em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}
			whileTap={{
				letterSpacing: "0.06em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}>
			{children}
		</motion.li>
	);
};

export default MenuItem;
