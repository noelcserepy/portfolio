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
		transitionEnd: {
			display: "none",
		},
	},
	open: {
		scaleX: 1,
		display: "block",
		transition: {
			display: {
				delay: 0,
				duration: 0,
			},
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
		transitionEnd: {
			display: "none",
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
	// document.body.style.overflow = "scroll";
	// if (showMenu) {
	// 	if (typeof window != "undefined" && window.document) {
	// 		document.body.style.overflow = "hidden";
	// 	}
	// }

	return (
		<motion.div
			role="menu"
			layout
			key="overlay"
			className="fixed top-0 left-0 z-30 h-screen w-screen overflow-clip bg-orange"
			style={{ originX: "0%" }}
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
