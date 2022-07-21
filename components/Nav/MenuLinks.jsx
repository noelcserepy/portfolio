import { motion } from "framer-motion";
import Link from "next/link";
import MenuItem from "./MenuItem";

const linkVariants = {
	closed: {
		opacity: 1,
		transition: {
			staggerDirection: -1,
			staggerChildren: 0.05,
		},
	},
	open: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

function MenuLinks() {
	return (
		<motion.ul
			className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between z-[1]"
			variants={linkVariants}>
			<MenuItem>
				<Link href="/">Work</Link>
			</MenuItem>
			<MenuItem>
				<Link href="/about">About</Link>
			</MenuItem>
			<MenuItem>
				<Link href="/blog">Blog</Link>
			</MenuItem>
		</motion.ul>
	);
}

export default MenuLinks;
