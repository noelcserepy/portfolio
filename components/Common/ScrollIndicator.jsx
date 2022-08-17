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

	const yTransforms = [
		useTransform(
			y,
			[0, turningPoints[0], turningPoints[0] - descendTime, maxAnimHeight],
			[0, turningPoints[0], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[1], turningPoints[1] - descendTime, maxAnimHeight],
			[0, turningPoints[1], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[2], turningPoints[2] - descendTime, maxAnimHeight],
			[0, turningPoints[2], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[3], turningPoints[3] - descendTime, maxAnimHeight],
			[0, turningPoints[3], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[4], turningPoints[4] - descendTime, maxAnimHeight],
			[0, turningPoints[4], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[5], turningPoints[5] - descendTime, maxAnimHeight],
			[0, turningPoints[5], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[6], turningPoints[6] - descendTime, maxAnimHeight],
			[0, turningPoints[6], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[7], turningPoints[7] - descendTime, maxAnimHeight],
			[0, turningPoints[7], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[8], turningPoints[8] - descendTime, maxAnimHeight],
			[0, turningPoints[8], 0, 0]
		),
		useTransform(
			y,
			[0, turningPoints[9], turningPoints[9] - descendTime, maxAnimHeight],
			[0, turningPoints[9], 0, 0]
		),
	];

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
			className="flex flex-col justify-end items-center absolute left-0 bottom-6 inset-0 z-10 pointer-events-none w-min"
			style={{ opacity: scrollOp }}
			variants={containerVariants}
			layout
			initial="hidden"
			animate="visible">
			{text.split("").map((l, i) => (
				<motion.div
					className="h-[16px] justify-self-end font-header font-semibold text-sm md:text-lg text-primary"
					key={l + i}
					style={{
						y: yTransforms[i],
					}}
					layout>
					{l}
				</motion.div>
			))}
		</motion.div>
	);
}

export default ScrollIndicator;
