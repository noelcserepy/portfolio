import Logo from "./Logo";
import { motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";
import MenuToggle from "./MenuToggle";
import Link from "next/link";

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

function Header({ showMenu, setShowMenu }) {
	return (
		<motion.div
			variants={navVariants}
			initial="hidden"
			animate="opening"
			exit="exit"
			className={`fixed top-8 left-8 right-8 sm:left-16 sm:right-16 flex h-8 justify-between z-40 space-x-4 select-none ${
				showMenu ? "text-white" : "text-primary"
			}`}>
			<div className="flex justify-start space-x-4 items-center">
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

export default Header;
