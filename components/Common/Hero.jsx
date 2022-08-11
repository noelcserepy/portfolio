import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import MazeBackground from "./MazeBackground";
import ScrollIndicator from "./ScrollIndicator";

const titleVariants = {
	hidden: {
		opacity: 1,
	},

	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.02,
			ease: "easeOut",
		},
	},
};

const titleLetters = {
	hidden: {
		opacity: 0,
	},

	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
};

const subtitleVariants = {
	hidden: {
		opacity: 0,
		x: -40,
	},

	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0,
			duration: 0.6,
			ease: [0.94, 0.12, 1, 0.58],
		},
	},
};

const dotVariants = {
	hidden: {
		opacity: 0,
		fontSize: "0em",
	},
	visible: {
		opacity: 1,
		fontSize: "1em",
		transition: {
			delay: 0.2,
			duration: 0.6,
			ease: [1, 0, 1, 0.15],
			opacity: {
				duration: 0,
			},
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
			delay: 0,
			duration: 3,
			ease: [0, 0.27, 0.19, 0.65],
		},
	},
};

const lineVariants = {
	hidden: {
		scaleX: 0,
	},
	visible: {
		scaleX: 1,
		transition: {
			delay: 0.05,
			duration: 0.4,
			ease: [0.08, 0.84, 0.54, 0.97],
		},
	},
};

function Hero({ showMenu, title, subtitle }) {
	const lineControls = useAnimationControls();
	const titleControls = useAnimationControls();
	const subtitleControls = useAnimationControls();
	const dotControls = useAnimationControls();
	const mazeControls = useAnimationControls();

	useEffect(() => {
		const enter = async () => {
			titleControls.start("visible");
			await subtitleControls.start("visible");
			await lineControls.start("visible");
			await dotControls.start("visible");
			await mazeControls.start("visible");
		};
		enter();
	}, []);

	return (
		<div className="text-primary h-screen w-full whitespace-nowrap relative">
			<ScrollIndicator />
			<div className="flex flex-col w-min relative top-1/2 -translate-y-3/4 md:-translate-y-1/2 mx-auto lg:mx-0">
				<div className="flex items-end w-full whitespace-pre">
					{/* Page title */}
					<motion.h1
						className="font-title text-7xl sm:text-8xl w-full"
						variants={titleVariants}
						initial="hidden"
						animate={titleControls}>
						{title.split("").map((letter, i) => {
							if (letter === "\n") {
								return <br key={letter + i} className="lg:hidden" />;
							} else {
								return (
									<motion.span key={letter + i} variants={titleLetters}>
										{letter}
									</motion.span>
								);
							}
						})}
						<motion.span
							className="text-orange font-title text-8xl"
							variants={dotVariants}
							initial="hidden"
							animate={dotControls}>
							.
						</motion.span>
					</motion.h1>

					{/* Maze Backgrund */}
					<motion.div
						className="relative w-0 h-0 -z-10  -left-2 -top-4 sm:-top-6 sm:-left-3 pointer-events-none stroke-lowContrastBlue"
						variants={mazeVariants}
						initial="hidden"
						animate={mazeControls}>
						<MazeBackground showMenu={showMenu} />
					</motion.div>
				</div>

				{/* Subtitle */}
				<div
					className={`flex justify-between items-center ${
						subtitle && "space-x-2"
					}`}>
					<motion.div
						style={{ originY: "50%" }}
						variants={subtitleVariants}
						initial="hidden"
						animate={subtitleControls}>
						<h2 className="font-header text-lg sm:text-2xl md:text-2xl w-max h-min">
							{subtitle}
						</h2>
					</motion.div>

					{/* Line */}
					<motion.div
						className={`w-full h-0 border-t-[2px] ${
							showMenu ? "border-white" : "border-primary"
						}`}
						variants={lineVariants}
						initial="hidden"
						animate={lineControls}
						style={{ originX: "0%" }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Hero;
