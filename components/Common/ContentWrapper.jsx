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
			className="flex flex-col space-y-72 mx-auto max-w-full px-8 sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl pb-32"
			initial={false}
			exit="exit"
			variants={wrapperVariants}>
			{children}
		</motion.main>
	);
}

export default ContentWrapper;
