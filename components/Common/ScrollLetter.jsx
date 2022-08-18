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

export default function ScrollLetter({
	letter,
	y,
	turningPoint,
	descendTime,
	maxAnimHeight,
}) {
	const yT = useTransform(
		y,
		[0, turningPoint, turningPoint - descendTime, maxAnimHeight],
		[0, turningPoint, 0, 0]
	);

	return (
		<motion.div
			className="h-[16px] justify-self-end font-header font-semibold text-sm md:text-lg text-primary"
			style={{
				y: yT,
			}}
			layout>
			{letter}
		</motion.div>
	);
}
