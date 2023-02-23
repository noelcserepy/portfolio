import Image from "next/image";
import UpperTitle from "../ui/UpperTitle";
import P from "../ui/P";
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const textVariants = {
	hidden: {
		opacity: 0,
		x: -20,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

const lineVariants = {
	hidden: {
		height: "0px",
	},
	visible: {
		height: "320px",
		transition: {
			ease: "easeInOut",
			duration: 0.5,
		},
	},
};

const coverVariants = {
	active: {
		opacity: 0,
	},
	inActive: {
		opacity: 1,
	},
};
const bannerVariants = {
	active: {
		height: "256px",
		borderBottomWidth: "1px",
		transition: {
			bounce: 0.7,
			duration: 0.2,
		},
	},
	inActive: {
		opacity: 1,
		borderBottomWidth: "0px",
		transition: {
			bounce: 0.7,
			duration: 0.2,
		},
	},
};

function Belief({ img, title, text }) {
	const [isHovered, setIsHovered] = useState(false);
	const isXl = useMediaQuery("xl");

	return (
		<motion.div
			className="flex h-min w-full max-w-sm flex-col items-start justify-between gap-4 p-4 text-left"
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<motion.div className="flex h-80">
				<motion.div
					className="border-l-[1px] border-primary "
					initial="hidden"
					whileInView="visible"
					variants={lineVariants}
				/>
				<motion.div
					className="flex flex-col gap-y-4 px-4"
					initial="hidden"
					whileInView="visible"
					variants={textVariants}>
					<UpperTitle> {title} </UpperTitle>
					<P>{text}</P>
				</motion.div>
			</motion.div>
			{/* 
			<motion.div
				className="relative h-[1px] w-44 overflow-hidden rounded-b-full border-[1px] border-primary"
				animate={isHovered ? "active" : "inActive"}
				variants={bannerVariants}>
				<Image
					src={img}
					alt="A gif"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
				{isXl && (
					<motion.div
						className="absolute inset-0 bg-background"
						variants={coverVariants}
						animate={isHovered ? "active" : "inActive"}
					/>
				)}
			</motion.div> */}
		</motion.div>
	);
}

export default Belief;
