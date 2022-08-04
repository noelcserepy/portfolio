import { motion } from "framer-motion";
import MenuItem from "./MenuItem";

const linkVariants = {
	closed: {
		opacity: 1,
		transition: {
			staggerDirection: -1,
			staggerChildren: 0.07,
		},
	},
	exit: {
		opacity: 1,
		transition: {
			staggerDirection: -1,
			staggerChildren: 0.07,
		},
	},
	open: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.15,
		},
	},
};

function MenuLinks({ setShowMenu }) {
	return (
		<motion.ul
			className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between z-[1] w-min"
			variants={linkVariants}>
			<MenuItem setShowMenu={setShowMenu} href="/" text="Work" />
			<MenuItem setShowMenu={setShowMenu} href="/about" text="About" />
			<MenuItem setShowMenu={setShowMenu} href="/blog" text="Blog" />
		</motion.ul>
	);
}

export default MenuLinks;
