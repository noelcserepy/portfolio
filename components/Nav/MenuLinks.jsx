import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
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
			delayChildren: 0.3,
			staggerChildren: 0.15,
		},
	},
};

const lineVariants = {
	hidden: {
		scaleX: 0,
		transition: {
			delay: 0,
			duration: 0.3,
		},
	},
	visible: {
		scaleX: 1,
		transition: {
			delay: 0,
			duration: 0.1,
		},
	},
};

function MenuLinks() {
	const router = useRouter();

	return (
		<motion.ul
			className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between z-[1] w-min"
			variants={linkVariants}>
			<MenuItem>
				<Link href="/" scroll={false}>
					Work
				</Link>
				<motion.div
					className="w-full h-0 border-t-[2px]"
					variants={lineVariants}
					animate={router.pathname === "/" ? "visible" : "hidden"}
					style={{ originX: 0 }}
				/>
			</MenuItem>
			<MenuItem>
				<Link href="/about" scroll={false}>
					About
				</Link>
				{/* <motion.div
					className="w-full h-0 border-t-[2px]"
					variants={lineVariants}
					animate={router.pathname === "/about" ? "visible" : "hidden"}
					style={{ originX: 0 }}
				/> */}
			</MenuItem>
			<MenuItem>
				<Link href="/blog" scroll={false}>
					Blog
				</Link>
				{/* <motion.div
					className="w-full h-0 border-t-[2px]"
					variants={lineVariants}
					animate={router.pathname === "/blog" ? "visible" : "hidden"}
					style={{ originX: 0 }}
				/> */}
			</MenuItem>
		</motion.ul>
	);
}

export default MenuLinks;
