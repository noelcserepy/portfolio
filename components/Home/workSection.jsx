import { motion, useInView } from "framer-motion";
import { Suspense, useEffect, useState, useRef } from "react";
import WorkAnim from "./workAnim";
import AnimText from "./animText";

export default function WorkSection() {
	const [stage, setStage] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.1 });

	useEffect(() => {
		console.log("isInView", isInView);
		if (!isInView) {
			setStage(0);
		}
	}, [isInView]);

	return (
		<motion.div ref={ref} className="h-[400vh] w-screen">
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
