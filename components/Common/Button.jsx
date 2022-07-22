import { motion } from "framer-motion";
import Paragraph from "../Paragraph";

const buttonVariants = {
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

function Button({ children }) {
	return (
		<motion.div
			className="cursor-pointer select-none"
			variants={buttonVariants}
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
			<Paragraph>{children}</Paragraph>
		</motion.div>
	);
}

export default Button;
