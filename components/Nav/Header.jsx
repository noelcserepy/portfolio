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
			className={`fixed top-8 left-8 right-8 sm:left-16 sm:right-16 flex h-8 justify-between z-40 space-x-2 sm:space-x-4 select-none font-text font-bold text-lg sm:text-xl ${
				showMenu ? "text-white" : "text-primary"
			}`}
			variants={navVariants}
			initial="hidden"
			animate="visible"
			exit="exit">
			<div className="flex justify-start space-x-2 sm:space-x-4 items-center">
				<Link href="/">
					<a>
						<Logo showMenu={showMenu} />
					</a>
				</Link>
				<div
					className={`w-0 h-2/3 border-l-[1px] ${
						showMenu ? "border-white" : "border-primary"
					}`}
				/>
				<div className="flex items-center w-16 h-full">
					<MenuToggle showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
			</div>
			<Contact showMenu={showMenu} />
		</motion.div>
	);
}

export default Header;
