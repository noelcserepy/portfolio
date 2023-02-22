import {
	motion,
	useAnimationControls,
	useMotionValueEvent,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import UpperTitle from "../ui/UpperTitle";
import P from "../ui/P";
import { useEffect, useRef, useState } from "react";

const circleVariants = {
	hidden: {
		scale: 0.7,
		x: "-48%",
		scaleX: 0,
		opacity: 0,
		backgroundColor: "#EAEEF5",
		border: "0px solid #0D1823",
		transition: {
			duration: 0,
		},
	},
	visible: {
		scale: 1,
		x: "-48%",
		opacity: 1,
		scaleX: 1,
		backgroundColor: "#EAEEF5",
		border: "1px solid #0D1823",
		transition: {
			opacity: {
				duration: 0,
			},
		},
	},
	active: {
		scale: 1.18,
		scaleX: 1,
		x: "-48%",
		opacity: 1,
		originX: 0.5,
		originY: 0.5,
		backgroundColor: "#BF4D00",
		border: "1px solid #BF4D00",
		transition: {
			duration: 0.01,
			scale: {
				type: "spring",
				stiffness: 1000,
				mass: 0.5,
			},
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		x: -20,
		y: -15,
	},
	visible: {
		opacity: 1,
		x: 0,
		y: -15,
		transition: {
			delay: 0.1,
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

export default function ProcessItem({
	title,
	text,
	noLine = false,
	orangeStart = false,
	setOrangeStart,
}) {
	const circleControls = useAnimationControls();
	const textControls = useAnimationControls();

	// Scroll source
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 55%", "end 55%"],
	});

	// Line animation
	const springScroll = useSpring(scrollYProgress, {
		damping: 22,
		stiffness: 350,
		restSpeed: 0.5,
	});
	const orangeLineHeight = useTransform(springScroll, [0, 1], ["0%", "100%"]);

	useMotionValueEvent(scrollYProgress, "change", value => {
		if (value > 0.01) {
			circleControls.start("active");
			textControls.start("visible");
			if (setOrangeStart) {
				setOrangeStart(true);
			}
		} else {
			if (!text && !title) {
				circleControls.start("hidden");
			} else {
				circleControls.start("visible");
			}
			textControls.start("hidden");
			if (setOrangeStart) {
				setOrangeStart(false);
			}
		}
	});

	useEffect(() => {
		if (orangeStart) {
			circleControls.start("visible");
		} else {
			circleControls.start("hidden");
		}
	}, [orangeStart]);

	return (
		<motion.li className="relative h-[40vh] w-[500px]" ref={ref}>
			{!noLine && (
				<motion.div
					className="absolute left-0 z-10 mt-2 w-0 -translate-x-[2px] border-l-[5px] border-orange"
					style={{ height: orangeLineHeight, strokeLinecap: "round" }}
				/>
			)}

			<motion.div
				className={`absolute left-0 z-20 h-6 w-6 rounded-full border-[1px] border-primary bg-background ${
					!text && !title && "opacity-0"
				}`}
				style={{
					x: "-48%",
					scale: 0.7,
				}}
				variants={circleVariants}
				animate={circleControls}
			/>

			{(text || title) && (
				<motion.div
					className="flex flex-col gap-4 pl-16"
					variants={textVariants}
					initial="hidden"
					animate={textControls}>
					<UpperTitle>{title}</UpperTitle>
					<P>{text}</P>
				</motion.div>
			)}
		</motion.li>
	);
}
