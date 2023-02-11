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
		y: 40,
		transition: {
			duration: 0.1,
			ease: "easeIn",
		},
	},
	hiddenUp: {
		opacity: 0,
		y: -40,
		transition: {
			duration: 0.1,
			ease: "easeIn",
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.1,
			ease: "easeOut",
		},
	},
};

export default function AnimText({ title, text, setStage }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5 });
	const controls = useAnimationControls();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
			setStage();
		} else if (scrollYProgress.get() < 0.5) {
			controls.start("hidden");
		} else {
			controls.start("hiddenUp");
		}
	}, [isInView, scrollYProgress, controls, setStage]);

	return (
		<motion.div className="h-screen w-full" ref={ref}>
			<motion.div
				className="fixed top-[60%] left-0 w-full px-8 xl:top-[40%]"
				variants={blockVariants}
				initial="hidden"
				animate={controls}>
				<div className="mx-auto flex h-min max-w-[500px] flex-col  justify-center gap-4">
					<Subheader>{title}</Subheader>
					<Paragraph>{text}</Paragraph>
				</div>
			</motion.div>
		</motion.div>
	);
}
