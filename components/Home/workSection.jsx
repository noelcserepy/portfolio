import { motion } from "framer-motion";
import { Suspense, useContext, useState } from "react";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import WorkAnim from "./workAnim";

const blockVariants = {
	hidden: {
		opacity: 0,
		x: -40,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function WorkSection() {
	const [stage, setStage] = useState(0);

	return (
		<>
			<Suspense fallback={null}>
				<WorkAnim stage={stage} />
			</Suspense>
			<motion.section className="wide flex h-[70vh] items-center">
				<motion.div
					className="flex  w-full flex-col justify-center md:w-4/12"
					variants={blockVariants}
					whileInView="visible"
					onViewportEnter={() => setStage(1)}
					initial="hidden">
					<Subheader>{`Bias for Action`}</Subheader>
					<Paragraph>
						{`I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft.`}
					</Paragraph>
					<Paragraph>{`Here are some of the things I made.`}</Paragraph>
				</motion.div>
			</motion.section>

			<motion.section className="wide flex h-[70vh] items-center">
				<motion.div
					className="flex  w-full flex-col justify-center md:w-4/12"
					variants={blockVariants}
					whileInView="visible"
					onViewportEnter={() => setStage(2)}
					initial="hidden">
					<Subheader>{`Latest Tech`}</Subheader>
					<Paragraph>
						{`I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft.`}
					</Paragraph>
					<Paragraph>{`Here are some of the things I made.`}</Paragraph>
				</motion.div>
			</motion.section>

			<motion.section className="wide flex h-[70vh] items-center">
				<motion.div
					className="flex  w-full flex-col justify-center md:w-4/12"
					variants={blockVariants}
					whileInView="visible"
					onViewportEnter={() => setStage(3)}
					initial="hidden">
					<Subheader>{`End-to-End`}</Subheader>
					<Paragraph>
						{`I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft.`}
					</Paragraph>
					<Paragraph>{`Here are some of the things I made.`}</Paragraph>
				</motion.div>
			</motion.section>

			<motion.section className="wide flex h-[70vh] items-center">
				<motion.div
					className="flex  w-full flex-col justify-center md:w-4/12"
					variants={blockVariants}
					whileInView="visible"
					onViewportEnter={() => setStage(4)}
					initial="hidden">
					<Subheader>{`You`}</Subheader>
					<Paragraph>
						{`I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft.`}
					</Paragraph>
					<Paragraph>{`Here are some of the things I made.`}</Paragraph>
				</motion.div>
			</motion.section>
		</>
	);
}
