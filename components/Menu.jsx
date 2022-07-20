import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import MazeBackground from "./MazeBackground";

const menuVariants = {
	hidden: {
		opacity: 1,
		scaleX: 0,
	},
	visible: {
		scaleX: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 1,
		scaleX: 0,
		transition: {
			delay: 0.2,
			duration: 0.2,
			ease: "easeIn",
		},
	},
};

const linksVariants = {
	hidden: {
		opacity: 1,
		transition: {
			duration: 0.2,
			delayChildren: 0,
			staggerChildren: 0.03,
		},
	},
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			ease: "easeOut",
			staggerChildren: 0.2,
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		x: 50,
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
			duration: 0.1,
		},
	},

	exit: {
		opacity: 0,
		x: -50,
		transition: {
			duration: 0.1,
		},
	},
};

const mazeVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},

	visible: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeIn",
		},
	},
};

function Menu({ showMenu, setShowMenu }) {
	return (
		<AnimatePresence>
			{showMenu && (
				<motion.div
					className="bg-orange h-screen w-screen fixed top-0 left-0 z-30 overflow-hidden"
					style={{ originX: 0 }}
					variants={menuVariants}
					initial="hidden"
					animate="visible"
					exit="exit">
					<motion.div
						variants={linksVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between">
						<motion.div
							variants={textVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-[300] cursor-pointer">
							Work
						</motion.div>
						<motion.div
							variants={textVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-[300] cursor-pointer">
							<Link href="/about">About</Link>
						</motion.div>
						<motion.div
							variants={textVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-[300] cursor-pointer">
							Blog
						</motion.div>
					</motion.div>
					<motion.div
						className="fixed right-1/4 top-1/2 stroke-primary"
						variants={mazeVariants}
						initial="hidden"
						animate="visible"
						exit="hidden">
						<MazeBackground />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Menu;
