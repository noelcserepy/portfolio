import { motion } from "framer-motion";
import UpperTitle from "../ui/UpperTitle";
import P from "../ui/P";

const lineVariants = {
	hidden: {
		bottom: "100%",
	},
	visible: {
		bottom: "0%",
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

export default function ProcessItem({ title, text }) {
	return (
		<motion.li
			className="relative w-[500px]"
			initial="hidden"
			animate="hidden"
			whileInView="visible">
			<motion.div
				className="absolute left-0 top-0 border-l-[1px] border-primary"
				variants={lineVariants}
			/>
			<motion.div className="absolute left-0 h-6 w-6 -translate-x-1/2 rounded-full border-[1px] border-primary bg-background" />
			<motion.div
				className="flex -translate-y-3 flex-col gap-4 pl-16 pb-16"
				variants={textVariants}
				initial="hidden"
				animate="hidden"
				whileInView="visible"
				onAnimationComplete={() => {
					console.log("hey");
				}}>
				<UpperTitle>Consultation</UpperTitle>
				<P>
					Discuss the project requirements and client's objectives. During this
					consultation, you will ask detailed questions to understand the
					client's business, target audience, competitors, and overall vision
					for the website.
				</P>
			</motion.div>
		</motion.li>
	);
}
