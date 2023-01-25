import Logo from "./Logo";
import { motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";
import MenuToggle from "./MenuToggle";
import Link from "next/link";
import Contact from "./Contact";

const navVariants = {
	hidden: {
		opacity: 0,
		y: -10,
	},

	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.2,
		},
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
	toMenu: {
		y: -20,
	},
};

function Header({ showMenu, setShowMenu }) {
	return (
		<motion.div
			className={`fixed top-8 left-8 right-8 z-40 flex h-8 select-none justify-between space-x-2 font-text text-lg font-bold sm:left-16 sm:right-16 sm:space-x-4 sm:text-xl ${
				showMenu ? "text-white" : ""
			}`}
			variants={navVariants}
			initial="hidden"
			animate="visible"
			exit="exit">
			<div className="flex items-center justify-start space-x-2 sm:space-x-4">
				<Link href="/">
					<Logo showMenu={showMenu} />
				</Link>
				<div
					className={`h-2/3 w-0 border-l-[1px] ${
						showMenu
							? "border-white"
							: "border-primary dark:border-background"
					}`}
				/>
				<div className="flex h-full w-16 items-center">
					<MenuToggle showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
			</div>
			<Contact showMenu={showMenu} />
		</motion.div>
	);
}

export default Header;
