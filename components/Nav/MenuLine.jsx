import { motion } from "framer-motion";

const lineVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			duration: 2,
			ease: "easeInOut",
		},
	},
};

function MenuLine({ showMenu }) {
	return (
		<div className="w-3 h-min">
			<motion.svg
				className={`w-3 h-6 stroke-${showMenu ? "white" : "primary"}`}
				viewBox="0 0 3 200">
				<motion.path
					variants={lineVariants}
					initial="hidden"
					animate="visible"
					d="M2 0 V200"
					strokeWidth={1}
					vectorEffect="non-scaling-stroke"
				/>
			</motion.svg>
		</div>
	);
}

export default MenuLine;
