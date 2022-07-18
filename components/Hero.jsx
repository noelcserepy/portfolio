import { motion } from "framer-motion";
import MazeBackground from "./MazeBackground";

const sentenceVariants = {
	hidden: {
		opacity: 1,
	},

	visible: {
		opacity: 1,
		transition: {
			delay: 0,
			staggerChildren: 0.05,
			ease: "easeInOut",
		},
	},
};
const subtitleVariants = {
	hidden: {
		opacity: 1,
	},

	visible: {
		opacity: 1,
		transition: {
			delayChildren: 1,
			staggerChildren: 0.04,
		},
	},
};

const letterVariants = {
	hidden: {
		opacity: 0,
		x: -50,
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeIn",
		},
	},
};

const dotVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 2.2,
			duration: 0.5,
		},
	},
};

const mazeVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 3,
			duration: 2,
		},
	},
};

const lineVariants = {
	hidden: {
		pathLength: 0,
	},
	visible: {
		pathLength: 1,
		transition: {
			delay: 0,
			duration: 2,
			ease: "easeInOut",
		},
	},
};

function Hero() {
	const titleText = "Heyo, I'm Noël Cserépy";
	const subtitleText = "I build stuff for the web.";

	return (
		// Page Wrapper
		<div className="text-primary h-screen col-start-0 col-span-8 whitespace-nowrap">
			{/* Content Wrapper */}
			<div className="flex flex-col w-min relative top-1/2 -translate-y-1/2">
				<div className="flex items-end">
					<motion.h1
						className="font-title text-8xl relative top-1/3 "
						variants={sentenceVariants}
						initial="hidden"
						animate="visible">
						{titleText.split("").map((letter, i) => {
							return (
								<motion.span key={letter + i} variants={letterVariants}>
									{letter}
								</motion.span>
							);
						})}
						<motion.span
							className="text-orange "
							variants={dotVariants}
							initial="hidden"
							animate="visible">
							.
						</motion.span>
					</motion.h1>
					<motion.div
						className="relative w-4 h-4 -z-10 -top-5 -left-5 pointer-events-none stroke-lowContrastBlue"
						variants={mazeVariants}
						initial="hidden"
						animate="visible">
						<MazeBackground />
					</motion.div>
				</div>

				<div className="flex justify-between items-center whitespace-nowrap">
					<motion.h2
						className="font-header text-2xl w-max h-min"
						variants={subtitleVariants}
						initial="hidden"
						animate="visible">
						{subtitleText.split("").map((letter, i) => {
							return (
								<motion.span key={letter + i} variants={letterVariants}>
									{letter}
								</motion.span>
							);
						})}
					</motion.h2>
					<motion.svg
						className="flex-grow w-full ml-1 mr-4"
						viewBox="0 0 200 10">
						<motion.line
							variants={lineVariants}
							initial="hidden"
							animate="visible"
							x1="200"
							y1="5"
							x2="0"
							y2="5"
							stroke="#0D1823"
							strokeWidth={1}
						/>
					</motion.svg>
				</div>
			</div>
		</div>
	);
}

export default Hero;
