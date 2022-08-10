import {
	animate,
	motion,
	useMotionValue,
	useScroll,
	useTransform,
} from "framer-motion";
import { useEffect } from "react";

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
	const text = " |Vscroll";
	const textCount = text.length;

	const maxAnimHeight = -12;
	const bottomGap = -4;
	const lean = 0.9;

	const getTurningPoint = i => {
		return (
			bottomGap +
			Math.pow((textCount - i) / textCount, lean) * (maxAnimHeight - bottomGap)
		);
	};
	const turningPoints = text.split("").map((x, i) => getTurningPoint(i));

	const y = useMotionValue(0);

	useEffect(() => {
		animate(y, maxAnimHeight, {
			duration: 0.5,
			repeat: Infinity,
			repeatDelay: 3,
			ease: "linear",
		});
	}, []);

	return (
		<motion.div
			className="flex flex-col justify-end items-center fixed bottom-5 left-1/2 font-header text-md text-primary z-10 pointer-events-none"
			style={{ opacity: scrollOp }}
			variants={containerVariants}
			layout
			initial="hidden"
			animate="visible">
			{text.split("").map((l, i) => (
				<motion.div
					className="h-[15px] justify-self-end"
					key={l + i}
					style={{
						y: useTransform(
							y,
							[0, turningPoints[i], turningPoints[i] - 2, maxAnimHeight],
							[0, turningPoints[i], 0, 0]
						),
					}}
					layout>
					{l}
				</motion.div>
			))}
		</motion.div>
	);
}

export default ScrollIndicator;
