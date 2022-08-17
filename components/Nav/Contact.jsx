import { motion } from "framer-motion";
import ChatBubbles from "./ChatBubbles";

function Contact({ showMenu }) {
	return (
		<motion.div
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
			<a
				className="flex justify-end items-center space-x-2 sm:space-x-4 cursor-pointer"
				href="mailto:hello@noelcserepy.com?subject=Hi Noël, let's work together"
				target="_blank"
				rel="noreferrer">
				<div className="flex justify-end items-center w-14 sm:w-24 h-full">
					<motion.div className="whitespace-nowrap">Let's Talk</motion.div>
				</div>
				<ChatBubbles showMenu={showMenu} />
			</a>
		</motion.div>
	);
}

export default Contact;
