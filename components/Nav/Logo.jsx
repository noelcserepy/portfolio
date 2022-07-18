import { motion } from "framer-motion";

const play = {
	hidden: {
		pathLength: 0,
		transition: {
			delay: 1,
			duration: 1,
			ease: "easeInOut",
		},
	},
	visible: {
		pathLength: 1,
		transition: {
			delay: 1,
			duration: 2,
			ease: "easeInOut",
		},
	},
};

function Logo({ showMenu }) {
	return (
		<motion.svg
			variants={play}
			initial="hidden"
			animate="visible"
			className={`h-8 w-8 stroke-${showMenu ? "white" : "primary"}`}
			viewBox="0 0 38 38"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_44_290)">
				<motion.line
					variants={play}
					x1="1.37872"
					y1="-0.590879"
					x2="17.3387"
					y2="36.6491"
					strokeWidth="3"
				/>
				<motion.line
					variants={play}
					x1="18.2202"
					y1="-0.759766"
					x2="18.2202"
					y2="37.2402"
					strokeWidth="3"
				/>
				<motion.path
					variants={play}
					d="M49.5 19C49.5 27.0534 43.1875 33.5 35.5 33.5C27.8125 33.5 21.5 27.0534 21.5 19C21.5 10.9466 27.8125 4.5 35.5 4.5C43.1875 4.5 49.5 10.9466 49.5 19Z"
					strokeWidth="3"
				/>
			</g>
			<motion.rect
				variants={play}
				x="1.5"
				y="1.5"
				width="35"
				height="35"
				strokeWidth="3"
			/>
			<defs>
				<clipPath id="clip0_44_290">
					<rect width="38" height="38" fill="white" />
				</clipPath>
			</defs>
		</motion.svg>
	);
}

export default Logo;
