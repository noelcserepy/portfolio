import { motion } from "framer-motion";
import Paragraph from "./Paragraph";

const skipVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 2,
		},
	},
};

function Skip({ setAbort }) {
	return (
		<motion.div
			className="absolute bottom-8 right-8 z-10 cursor-pointer select-none"
			onClick={() => setAbort()}
			variants={skipVariants}
			initial="hidden"
			animate="visible"
			whileHover={{
				letterSpacing: "0.05em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}
			whileTap={{
				letterSpacing: "0.04em",
				transition: {
					type: "spring",
					duration: 0.3,
					bounce: 0.5,
				},
			}}>
			<Paragraph>Skip Animation</Paragraph>
		</motion.div>
	);
}

export default Skip;
