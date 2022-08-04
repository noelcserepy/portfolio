import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const listVariants = {
	hidden: {
		y: 100,
	},
	visible: {
		y: 0,
		transition: {
			delay: 4,
			staggerChildren: 0.02,
			staggerDirection: -1,
		},
	},
};
const itemVariants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		y: [0, 2, 0],
		transition: {
			duration: 0.5,
			repeat: Infinity,
			repeatDelay: 2,
			ease: "easeInOut",
			times: [0, 0.5, 1],
		},
	},
};

function ScrollIndicator() {
	const { scrollY } = useScroll();
	const scrollOp = useTransform(scrollY, [0, 600], [1, 0]);
	const text = "scroll";

	useEffect(() => {
		return scrollY.onChange(latest => {
			console.log("Page scroll: ", latest);
		});
	}, []);

	return (
		<motion.div
			className="flex flex-col -space-y-2 items-center absolute bottom-4 left-0 font-header text-md text-primary z-10"
			style={{ opacity: scrollOp, height: "105px" }}
			variants={listVariants}
			layout
			initial="hidden"
			animate="visible">
			{text.split("").map((l, i) => (
				<motion.div
					className="h-min justify-self-end"
					key={l + i}
					variants={itemVariants}
					layout>
					{l}
				</motion.div>
			))}
		</motion.div>
	);
}

export default ScrollIndicator;
