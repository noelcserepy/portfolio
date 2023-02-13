import { motion, useInView } from "framer-motion";
import { Suspense, useEffect, useState, useRef } from "react";
import AnimText from "./animText";
import dynamic from "next/dynamic";
import useMediaQuery from "../../hooks/useMediaQuery";
const WorkAnim = dynamic(() => import("./workAnim"), { ssr: false });

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
	},
};

export default function WorkSection() {
	const [stage, setStage] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.05 });
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	useEffect(() => {
		if (!isInView) {
			setStage(0);
		}
	}, [isInView]);

	return (
		<motion.div ref={ref} className="mb-40 h-[600vh] w-screen ">
			<AnimText
				title="So this is me"
				text={`I am a Zürich-based web developer with a background in marketing, e-commerce and hospitality.`}
				setStage={() => setStage(1)}
			/>
			<AnimText
				title="Unique Web Experiences"
				text={`I am passionate about programming and design and am committed to delivering engaging, one-of-a-kind web experiences.`}
				setStage={() => setStage(2)}
			/>
			<AnimText
				title="Your Vision"
				text={`Every project has its own set of requirements. In close collaboration with my clients, I bring their vision to life on the web.`}
				setStage={() => setStage(3)}
			/>
			<AnimText
				title="Latest Tech"
				text={`I use cutting-edge tools like Next.js and TypeScript to craft highly performant web applications. I deliver a seamless, intuitive, and joyful user experience by implementing modern design principles.`}
				setStage={() => setStage(4)}
			/>
			<AnimText
				title="End-to-End"
				text={`I bring expertise in design, marketing and content creation to every project. This allows me to offer a complete and integrated solution from start to finish.`}
				setStage={() => setStage(5)}
			/>
			<AnimText
				title="My Work"
				text={`Below is a selection of my work.`}
				setStage={() => setStage(6)}
			/>
			<motion.div
				className={`fixed bottom-[40%] left-4 right-4 aspect-square sm:left-1/2 sm:right-auto sm:h-[60vh] sm:-translate-x-1/2 lg:left-1/2 lg:top-1/2 lg:h-auto lg:w-[45vw] lg:-translate-x-0 lg:-translate-y-1/2 2xl:w-[800px] `}
				variants={containerVariants}
				initial="hidden"
				animate={stage > 0 ? "visible" : "hidden"}>
				<WorkAnim stage={stage} isMobile={isMobile} />
			</motion.div>
		</motion.div>
	);
}
