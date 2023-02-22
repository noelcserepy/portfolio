import { motion, useAnimationControls, useInView } from "framer-motion";
import Title from "../ui/Title";
import ProcessItem from "./ProcessItem";
import { useEffect, useRef, useState } from "react";

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
			duration: 2,
			ease: "easeInOut",
		},
	},
};

export default function ProcessSection() {
	const lineControls = useAnimationControls();
	const [orangeStart, setOrangeStart] = useState(false);

	useEffect(() => {
		if (orangeStart) {
			lineControls.start("visible");
		} else {
			lineControls.start("hidden");
		}
	}, [orangeStart]);

	return (
		<motion.section className="relative flex h-[240vh] w-full flex-col items-center gap-24">
			<div className="absolute right-[49.25%] -top-[46px] whitespace-nowrap text-end">
				<motion.h3 className="font-title text-7xl" layout>
					{`My Process`}
					{orangeStart && <motion.span> </motion.span>}
					<motion.span layout className="text-orange">
						.
					</motion.span>
				</motion.h3>
			</div>

			<motion.div
				className="absolute left-1/2 mt-[15px] h-full w-0 border-l-[1px] border-primary"
				variants={lineVariants}
				animate={lineControls}
				initial="hidden"
			/>

			<motion.ul className="ml-auto w-1/2" variants={ulVariants}>
				<ProcessItem
					orangeStart={orangeStart}
					setOrangeStart={setOrangeStart}
				/>
				<ProcessItem
					orangeStart={orangeStart}
					title="Initial Consultation"
					text="Discuss the project requirements and client's objectives. During
          this consultation, you will ask detailed questions to understand the
          client's business, target audience, competitors, and overall vision
          for the website."
				/>
				<ProcessItem
					orangeStart={orangeStart}
					title="Proposal and Agreement"
					text="This proposal will serve as a roadmap for the project, and both you and the client will sign an agreement to ensure that everyone is on the same page regarding the project's scope and deliverables."
				/>
				<ProcessItem
					orangeStart={orangeStart}
					title="Design and Development"
					text="During this phase, you will create wireframes, design mockups, and develop the website. You will work closely with the client to ensure that the design and functionality meet their expectations, and you will provide regular updates to keep them informed of progress."
				/>
				<ProcessItem
					orangeStart={orangeStart}
					title="Testing and Launch"
					text="you will conduct thorough testing to ensure that it works properly on all devices and browsers. Once testing is complete, you will launch the website, making it live and accessible to the public. You will also provide training to the client on how to manage and update the website if required."
				/>
				<ProcessItem
					orangeStart={orangeStart}
					title="Maintenance and Support"
					text="After the website is live, you will provide ongoing maintenance and support to ensure that it continues to function smoothly. This includes regular backups, software updates, and addressing any issues or bugs that may arise. You will also provide ongoing support to the client to help them maintain and update their website."
				/>
				<ProcessItem noLine orangeStart={orangeStart} title="Done!" />
			</motion.ul>
		</motion.section>
	);
}
