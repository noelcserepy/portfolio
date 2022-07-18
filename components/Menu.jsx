import { motion, AnimatePresence } from "framer-motion";
import MazeBackground from "./MazeBackground";

const menuVariants = {
	hidden: {
		opacity: 1,
	},

	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
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
};

function Menu({ showMenu, setShowMenu }) {
	return (
		<AnimatePresence exitBeforeEnter>
			{showMenu && (
				<div className="bg-orange h-screen w-screen fixed top-0 left-0 z-30 overflow-hidden">
					<motion.div
						variants={menuVariants}
						initial="hidden"
						animate="visible"
						className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between">
						<motion.a
							variants={textVariants}
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							Work
						</motion.a>
						<motion.a
							variants={textVariants}
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							About
						</motion.a>
						<motion.a
							variants={textVariants}
							className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							Blog
						</motion.a>
					</motion.div>
					<div className="fixed right-1/4 top-1/2 stroke-primary">
						<MazeBackground />
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}

export default Menu;
