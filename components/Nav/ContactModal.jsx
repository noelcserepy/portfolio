import { motion } from "framer-motion";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const bgVariants = {
	hidden: {
		opacity: 0,
		pointerEvents: "none",
	},
	closed: () => ({
		clipPath: `circle(16px at calc(100% - 5rem) 3rem)`,
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			opacity: {
				duration: 0,
			},
			pointerEvents: {
				duration: 0,
			},
		},
		transitionEnd: {
			opacity: 0,
			pointerEvents: "none",
		},
	}),

	open: maxXY => ({
		clipPath: `circle(50% at calc(100% - 5rem) 3rem)`,
		opacity: 1,
		pointerEvents: "auto",
		transition: {
			duration: 0.5,
			ease: "easeIn",
			opacity: {
				duration: 0,
			},
			pointerEvents: {
				duration: 0,
			},
		},
	}),
};

export default function ContactModal({ showModal, setShowModal }) {
	const { height, width } = useWindowDimensions();
	const maxXY = Math.max(height, width);

	return (
		<motion.div
			className="bg-orange fixed top-0 -right-8 sm:right-0 w-screen sm:w-auto h-screen sm:h-auto"
			custom={maxXY}
			variants={bgVariants}
			initial="hidden"
			animate={showModal ? "open" : "closed"}>
			<motion.div className="flex flex-col justify-start items-start p-8 h-52 w-52">
				<motion.div classname="p-4 " onClick={setShowModal}>
					close
				</motion.div>
				<motion.div classname="p-4 " onClick={setShowModal}>
					Email me
				</motion.div>
				<motion.div classname="p-4 " onClick={setShowModal}>
					Message me on LinkedIn
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
