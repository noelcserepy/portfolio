import { motion, useTransform } from "framer-motion";

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
			className="h-[16px] justify-self-end font-header text-sm font-semibold text-primary md:text-lg"
			style={{
				y: yT,
			}}
			layout>
			{letter}
		</motion.div>
	);
}
