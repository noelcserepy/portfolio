import { motion } from "framer-motion";

const wrapperVariants = {
	exit: {
		x: -200,
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};

function ContentWrapper({ children }) {
	return (
		<motion.div
			className="flex flex-col space-y-72 mx-auto max-w-5xl pb-32"
			initial={false}
			exit="exit"
			variants={wrapperVariants}>
			{children}
		</motion.div>
	);
}

export default ContentWrapper;
