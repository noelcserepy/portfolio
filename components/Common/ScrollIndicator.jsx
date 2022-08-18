import {
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect } from "react";
import ScrollLetter from "./ScrollLetter";

const containerVariants = {
	hidden: {
		y: 200,
	},
	visible: {
		y: 0,
		transition: {
			delay: 4,
			duration: 0.7,
			when: "beforeChildren",
			type: "spring",
		},
	},
};

function ScrollIndicator() {
	const { scrollY } = useScroll();
	const scrollOp = useTransform(scrollY, [0, 400], [0.9, 0]);
	const text = " ::scroll:";
	const textCount = text.length;

	const maxAnimHeight = -12;
	const bottomGap = -4;
	const lean = 0.9;
	const descendTime = 1;

	const turningPoints = text
		.split("")
		.map(
			(_, i) =>
				bottomGap +
				Math.pow((textCount - i) / textCount, lean) *
					(maxAnimHeight - bottomGap)
		);

	const y = useMotionValue(0);

	useEffect(() => {
		animate(y, maxAnimHeight, {
			duration: 0.5,
			repeat: Infinity,
			repeatDelay: 2,
			ease: "linear",
		});
	}, []);

	return (
		<motion.div
			className="flex flex-col justify-end items-center fixed left-8 bottom-16 sm:absolute sm:left-0 sm:bottom-6 z-10 pointer-events-none w-min"
			style={{ opacity: scrollOp }}
			variants={containerVariants}
			layout
			initial="hidden"
			animate="visible">
			{text.split("").map((l, i) => (
				<ScrollLetter
					key={l + i}
					y={y}
					letter={l}
					turningPoint={turningPoints[i]}
					descendTime={descendTime}
					maxAnimHeight={maxAnimHeight}
				/>
			))}
		</motion.div>
	);
}

export default ScrollIndicator;
