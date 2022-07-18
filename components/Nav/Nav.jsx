import Logo from "./Logo";
import MenuLine from "./MenuLine";
import { animationControls, motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import Socials from "../Socials";

const textVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
		x: -10,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		x: 0,
		transition: {
			delay: 2.5,
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};

function Nav({ showMenu, setShowMenu, navAnimDone, setNavAnimDone }) {
	const navControls = animationControls();

	useEffect(() => {
		if (!navAnimDone) {
			navControls.start("opening");
			setNavAnimDone(true);
			return;
		}
		if (showMenu) {
			navControls.start("toMenu");
			return;
		}
		navControls.start("toPage");
	}, [showMenu]);

	return (
		<div
			className={`fixed top-8 left-16 right-16 flex h-8 justify-between z-40 select-none ${
				showMenu ? "text-white" : "text-primary"
			}`}>
			<div className="flex justify-start space-x-4 items-center">
				<Logo showMenu={showMenu} />
				<MenuLine showMenu={showMenu} />
				<div className="flex justify-center items-center w-16 h-full relative right-3">
					<motion.a
						className="font-text font-bold text-xl hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer"
						variants={textVariants}
						initial="hidden"
						animate="visible"
						onClick={setShowMenu}>
						Menu
					</motion.a>
				</div>
			</div>
			<motion.div
				className="group flex justify-end items-center cursor-pointer"
				variants={textVariants}
				initial="hidden"
				animate="visible">
				<ChatBubbles showMenu={showMenu} />

				<div className="flex justify-center items-center w-24 h-full">
					<a className="font-text font-bold text-xl whitespace-nowrap ml-4 group-hover:transition-all group-hover:tracking-wider origin-center duration-500">
						Let's Talk
					</a>
				</div>
			</motion.div>
		</div>
	);
}

export default Nav;
