import { motion, useInView } from "framer-motion";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import { useRef } from "react";
import { useEffect } from "react";

const blockVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export default function AnimText({ title, text, vpEnter }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.6 });

	useEffect(() => {
		if (isInView) {
			vpEnter();
		}
	}, [isInView]);

	return (
		<motion.div className="h-screen w-screen" ref={ref}>
			<motion.div
				className="wide fixed top-1/2 flex flex-col justify-center"
				variants={blockVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}>
				<Subheader>{title}</Subheader>
				<Paragraph>{text}</Paragraph>
			</motion.div>
		</motion.div>
	);
}
