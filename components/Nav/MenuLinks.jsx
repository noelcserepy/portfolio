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
			role="group"
			className="fixed left-16 top-16 z-[1] mt-16 flex h-1/3 w-min flex-col justify-between"
			variants={linkVariants}>
			<MenuItem setShowMenu={setShowMenu} href="/" text="Work" />
			<MenuItem setShowMenu={setShowMenu} href="/about" text="About" />
			<MenuItem
				setShowMenu={setShowMenu}
				href="https://blog.noelcserepy.com/"
				text="Blog"
				blog={true}
			/>
		</motion.ul>
	);
}

export default MenuLinks;
