import { motion } from "framer-motion";
import MazeBackground from "../Common/MazeBackground";
import MenuLinks from "./MenuLinks";

const overlay = {
	closed: {
		scaleX: 0,
		transition: {
			delay: 0.2,
			duration: 0.2,
			ease: "easeOut",
		},
	},
	open: {
		scaleX: 1,
		transition: {
			duration: 0.2,
			ease: "easeOut",
		},
	},
	exit: {
		scaleX: 0,
		transition: {
			delay: 0.2,
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

const maze = {
	closed: {
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
	open: {
		opacity: 1,
		transition: {
			delay: 0.2,
			duration: 1,
			ease: "easeIn",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.1,
		},
	},
};

function Menu({ showMenu, setShowMenu }) {
	return (
		<motion.div
			layout
			key="overlay"
			className="bg-orange h-screen w-screen fixed top-0 left-0 overflow-hidden z-30"
			style={{ originX: 0 }}
			variants={overlay}
			initial="closed"
			exit="exit"
			animate={showMenu ? "open" : "closed"}>
			<MenuLinks setShowMenu={setShowMenu} />
			<motion.div
				className="fixed right-1/4 top-1/2 stroke-primary"
				variants={maze}>
				<MazeBackground />
			</motion.div>
		</motion.div>
	);
}

export default Menu;
