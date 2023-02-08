import { motion, useScroll, useTransform } from "framer-motion";
import { Suspense, useCallback, useContext, useState } from "react";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import WorkAnim from "./workAnim";
import { useRef } from "react";
import AnimText from "./animText";

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
		<motion.div className="h-full w-full" onViewportLeave={() => setStage(0)}>
			<AnimText
				title="Bias for Action"
				text="I am constantly looking to improve. From Spotify web apps to 3D"
				vpEnter={() => setStage(1)}
			/>
			<AnimText
				title="Latest Tech"
				text="I am constantly looking to improve. From Spotify web apps to 3D"
				vpEnter={() => setStage(2)}
			/>
			<AnimText
				title="End-to-End"
				text="I am constantly looking to improve. From Spotify web apps to 3D"
				vpEnter={() => setStage(3)}
			/>
			<AnimText
				title="You"
				text="I am constantly looking to improve. From Spotify web apps to 3D"
				vpEnter={() => setStage(4)}
			/>
			<Suspense fallback={null}>
				<WorkAnim stage={stage} />
			</Suspense>
		</motion.div>
	);
}
