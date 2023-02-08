import { motion } from "framer-motion";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import useScrollIn from "../../hooks/useScrollIn";

export default function AnimText({ title, text, vpEnter }) {
	const { ref, scrollIn } = useScrollIn();

	return (
		<motion.section
			className="wide flex h-screen items-center"
			ref={ref}
			onViewportEnter={scrollIn}>
			<motion.div
				className="flex  w-full flex-col justify-center md:w-4/12"
				onViewportEnter={vpEnter}>
				<Subheader>{title}</Subheader>
				<Paragraph>{text}</Paragraph>
			</motion.div>
		</motion.section>
	);
}
