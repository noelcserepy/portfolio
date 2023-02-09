import {
	motion,
	useAnimationControls,
	useInView,
	useScroll,
} from "framer-motion";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import { useRef } from "react";
import { useEffect } from "react";

const blockVariants = {
	hidden: {
		opacity: 0,
		y: 200,
	},
	hiddenUp: {
		opacity: 0,
		y: -200,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
};

export default function AnimText({ title, text, vpEnter }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5 });
	const controls = useAnimationControls();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	scrollYProgress.onChange(v => {
		console.log(v);
	});

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
			vpEnter();
		} else if (scrollYProgress.get() < 0.5) {
			controls.start("hidden");
		} else {
			controls.start("hiddenUp");
		}
	}, [isInView]);

	return (
		<motion.div className="h-screen w-screen" ref={ref}>
			<motion.div
				className="wide fixed top-1/2 flex max-w-[700px] flex-col justify-center"
				variants={blockVariants}
				initial="hidden"
				animate={controls}>
				<Subheader>{title}</Subheader>
				<Paragraph>{text}</Paragraph>
			</motion.div>
		</motion.div>
	);
}
