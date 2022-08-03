import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const listVariants = {
	hidden: {
		y: 100,
	},
	visible: {
		y: [0, 0, 0],
		height: ["105px", "110px", "105px"],
		transition: {
			staggerChildren: 0.15,
			staggerDirection: -1,
			duration: 1,
			repeat: Infinity,
			repeatDelay: 2,
			ease: ["easeInOut", "easeIn"],
			times: [0, 0.85, 1],
		},
	},
};
const itemVariants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		justifySelf: ["start", "end"],
		transition: {
			duration: 1,
			repeat: Infinity,
			repeatDelay: 2,
			ease: "easeIn",
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
			style={{ opacity: scrollOp, height: "105px", justifySelf: "start" }}
			variants={listVariants}
			layoutScroll
			initial="hidden"
			animate="visible">
			{text.split("").map((l, i) => (
				<motion.div
					className="h-min"
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
