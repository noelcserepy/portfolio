import Logo from "./Logo";
import { animationControls, motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";
import { useEffect } from "react";

const navVariants = {
	hidden: {
		opacity: 0,
		y: -10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 2,
			duration: 1,
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
		<motion.nav
			variants={navVariants}
			initial="hidden"
			animate="visible"
			className={`fixed top-8 left-16 right-16 flex h-8 justify-between z-40 select-none ${
				showMenu ? "text-white" : "text-primary"
			}`}>
			<div className="flex justify-start space-x-4 items-center">
				<Logo showMenu={showMenu} />
				<div
					className={`w-0 h-2/3 border-l-[1px] ${
						showMenu ? "border-white" : "border-primary"
					}`}
				/>
				<div className="flex justify-center items-center w-16 h-full relative right-3">
					<a
						className="font-text font-bold text-xl hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer"
						onClick={() => setShowMenu(!showMenu)}>
						Menu
					</a>
				</div>
			</div>
			<div className="group flex justify-end items-center cursor-pointer">
				<ChatBubbles showMenu={showMenu} />

				<div className="flex justify-center items-center w-24 h-full">
					<a className="font-text font-bold text-xl whitespace-nowrap ml-4 group-hover:transition-all group-hover:tracking-wider origin-center duration-500">
						Let's Talk
					</a>
				</div>
			</div>
		</motion.nav>
	);
}

export default Nav;
