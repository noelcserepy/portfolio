import { motion, useInView } from "framer-motion";
import { Suspense, useEffect, useState, useRef } from "react";
import AnimText from "./animText";
import dynamic from "next/dynamic";

const WorkAnim = dynamic(() => import("./workAnim"), { ssr: false });

export default function WorkSection() {
	const [stage, setStage] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.1 });

	useEffect(() => {
		if (!isInView) {
			setStage(0);
		}
	}, [isInView]);

	return (
		<motion.div ref={ref} className="h-[500vh] w-screen">
			<AnimText
				title="So this is me"
				text={`With a background in software development, hospitality, and marketing, I bring a unique and creative approach to web development as a freelance professional.
My passion for programming and design is reflected in my commitment to delivering one-of-a-kind and engaging web experiences for clients.`}
				vpEnter={() => setStage(1)}
			/>
			<AnimText
				title="Unique Web Experiences"
				text={`My passion for programming and design is reflected in my commitment to delivering one-of-a-kind and engaging web experiences for clients.`}
				vpEnter={() => setStage(2)}
			/>
			<AnimText
				title="Collaborate"
				text={`I believe in the power of collaboration and work closely with clients to understand their vision and bring it to life on the web.
  By incorporating client feedback and open communication throughout the development process, I ensure that every project is a true reflection of their unique needs and desired outcomes.`}
				vpEnter={() => setStage(3)}
			/>
			<AnimText
				title="End-to-End"
				text={`As a cross-functional web developer, I bring expertise in design, marketing, content creation, and hosting to every project.
This allows me to offer a complete and integrated solution for clients, resulting in a seamless and efficient process from start to finish.`}
				vpEnter={() => setStage(4)}
			/>
			<AnimText
				title="Latest Tech"
				text={`I am dedicated to staying at the forefront of web technology, utilizing the latest tools and techniques to craft exceptional and highly performant web applications.
Whether it's using cutting-edge frameworks like Next.js and TypeScript or implementing modern design principles, I am committed to delivering a seamless, intuitive, and joyful experience for users.`}
				vpEnter={() => setStage(5)}
			/>
			<div
				className={`fixed top-1/2 right-4 z-0 h-[800px] w-[800px] -translate-y-1/2`}>
				<WorkAnim stage={stage} />
			</div>
		</motion.div>
	);
}
