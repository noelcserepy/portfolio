import Logo from "./Logo";
import { motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";
import MenuToggle from "./MenuToggle";

const navVariants = {
	hidden: {
		opacity: 0,
		y: -10,
	},

	opening: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 2,
			duration: 1,
			ease: "easeInOut",
		},
	},
	toMenu: {
		y: -20,
	},
};

function Nav({ showMenu, setShowMenu, navAnimDone, setNavAnimDone }) {
	return (
		<motion.div
			variants={navVariants}
			initial="hidden"
			animate="opening"
			className={`fixed top-8 left-16 right-16 flex h-8 justify-between z-40 space-x-4 select-none ${
				showMenu ? "text-white" : "text-primary"
			}`}>
			<div className="flex justify-start space-x-4 items-center">
				<Logo showMenu={showMenu} />
				<div
					className={`w-0 h-2/3 border-l-[1px] ${
						showMenu ? "border-white" : "border-primary"
					}`}
				/>
				<div className="flex items-center w-16 h-full">
					<MenuToggle showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
			</div>
			<div className="group flex justify-end items-center cursor-pointer space-x-4">
				<ChatBubbles showMenu={showMenu} />

				<div className="flex justify-start items-center w-24 h-full">
					<motion.a
						className="font-text font-bold text-xl whitespace-nowrap"
						whileHover={{
							letterSpacing: "0.05em",
							transition: {
								type: "spring",
								duration: 0.3,
								bounce: 0.5,
							},
						}}
						whileTap={{
							letterSpacing: "0.04em",
							transition: {
								type: "spring",
								duration: 0.3,
								bounce: 0.5,
							},
						}}>
						Let's Talk
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}

export default Nav;
