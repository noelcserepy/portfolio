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
		<motion.main
			className="mx-auto flex flex-col items-center gap-y-80 px-4 pb-32"
			initial={false}
			exit="exit"
			variants={wrapperVariants}>
			{children}
		</motion.main>
	);
}

export default ContentWrapper;
