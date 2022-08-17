import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const menuVariants = {
	hidden: {
		opacity: 0,
		x: -30,
		transition: {
			duration: 0.15,
			ease: "easeIn",
		},
	},

	visible: {
		opacity: 1,
		x: 0,
		letterSpacing: "0em",
		transition: {
			delay: 0.3,
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

const closeVariants = {
	hidden: {
		opacity: 0,
		x: 30,
		transition: {
			duration: 0.15,
			ease: "easeIn",
		},
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.1,
			duration: 0.2,
			ease: "easeOut",
		},
	},
};

function MenuToggle({ showMenu, setShowMenu }) {
	useEffect(() => {}, [showMenu]);

	return (
		<AnimatePresence exitBeforeEnter>
			{showMenu ? (
				<motion.a
					key="close"
					className="text-white cursor-pointer"
					onClick={() => setShowMenu(!showMenu)}
					variants={closeVariants}
					animate="visible"
					initial="hidden"
					exit="hidden"
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
					Close
				</motion.a>
			) : (
				<motion.a
					key="menu"
					className="text-primary cursor-pointer"
					onClick={() => setShowMenu()}
					variants={menuVariants}
					animate="visible"
					initial="hidden"
					exit="hidden"
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
					Menu
				</motion.a>
			)}
		</AnimatePresence>
	);
}

export default MenuToggle;
