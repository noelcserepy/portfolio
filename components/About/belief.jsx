import Image from "next/image";
import UpperTitle from "../ui/UpperTitle";
import P from "../ui/P";
import { motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";

const coverVariants = {
	active: {
		opacity: 0,
	},
	inActive: {
		opacity: 1,
	},
};

function Belief({ img, title, text }) {
	const [isHovered, setIsHovered] = useState(false);
	const isXl = useMediaQuery("xl");

	return (
		<motion.div
			className="flex h-min  w-full max-w-sm flex-col items-center justify-between gap-16 border-b-[1px] border-primary p-4 text-center  dark:border-background xl:border-b-0 xl:border-l-[1px] xl:last:border-r-[1px]"
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}>
			<UpperTitle> {title} </UpperTitle>
			<div className="flex flex-col items-center justify-start gap-8">
				<div className="relative h-64 w-44 overflow-hidden rounded-t-full border-[1px] border-primary">
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
				</div>
				<P>{text}</P>
			</div>
		</motion.div>
	);
}

export default Belief;
