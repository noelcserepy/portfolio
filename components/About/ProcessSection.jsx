import { motion } from "framer-motion";
import Title from "../ui/Title";
import ProcessItem from "./ProcessItem";
import { useState } from "react";

const ulVariants = {
	hidden: {
		opacity: 1,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 3,
			ease: "easeInOut",
			staggerChildren: 0.3,
			delayChildren: 1,
		},
	},
};

const lineVariants = {
	hidden: {
		height: 0,
	},
	visible: {
		height: "100%",
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

export default function ProcessSection() {
	const [inView, setInView] = useState(false);

	return (
		<motion.section
			className="relative flex min-h-screen w-full flex-col items-center gap-24"
			initial="hidden"
			animate="hidden"
			whileInView="visible"
			onViewportEnter={() => setInView(true)}
			viewport={{ once: false, amount: 0.6 }}>
			<div className="absolute right-[49.25%] -top-[46px] whitespace-nowrap text-end">
				<Title>My Process.</Title>
			</div>

			<motion.div
				className="absolute left-1/2 mt-[15px] h-full w-0 border-l-[1px] border-primary"
				variants={lineVariants}
			/>

			<motion.ul className="absolute left-1/2" variants={ulVariants}>
				<ProcessItem inView={inView} />
				<ProcessItem
					inView={inView}
					title="Consultation"
					text="Discuss the project requirements and client's objectives. During
						this consultation, you will ask detailed questions to understand the
						client's business, target audience, competitors, and overall vision
						for the website."
				/>
				<ProcessItem
					inView={inView}
					title="Consultation"
					text="Discuss the project requirements and client's objectives. During
						this consultation, you will ask detailed questions to understand the
						client's business, target audience, competitors, and overall vision
						for the website."
				/>
				<ProcessItem
					inView={inView}
					title="Consultation"
					text="Discuss the project requirements and client's objectives. During
						this consultation, you will ask detailed questions to understand the
						client's business, target audience, competitors, and overall vision
						for the website."
				/>
				<ProcessItem noLine inView={inView} />
			</motion.ul>
		</motion.section>
	);
}
