import { motion } from "framer-motion";
import OtherProject from "./OtherProject";

const listVariants = {
	hidden: {
		transition: { staggerChildren: 0.3, delayChildren: 0.6 },
	},
	visible: {
		transition: {
			delay: 1,
			staggerChildren: 0.3,
			delayChildren: 0.6,
			ease: "easeInOut",
		},
	},
};

const lineVariants = {
	hidden: {
		scaleY: 0,
	},
	visible: {
		scaleY: 1,
		transition: {
			duration: 1.3,
			ease: "easeInOut",
		},
	},
};

function OtherProjectsWrapper() {
	return (
		<motion.section
			className="relative flex w-full self-center lg:w-[80%]"
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}>
			<motion.div
				className="absolute h-full w-0 border-l-2 border-primary lg:left-1/2"
				style={{ originY: "0%" }}
				variants={lineVariants}
			/>

			<motion.ul
				className="flex flex-col space-y-16"
				variants={listVariants}>
				<OtherProject project="Memr" />
				<OtherProject project="Eye" />
				<OtherProject project="Lazy-Torrent" />
				<OtherProject project="Spotifile" />
				<OtherProject project="My_Ls" />
			</motion.ul>
		</motion.section>
	);
}

export default OtherProjectsWrapper;
