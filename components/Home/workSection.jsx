import { motion } from "framer-motion";
import { useContext, useState } from "react";
import Subheader from "../Common/Subheader";
import Paragraph from "../Common/Paragraph";
import ThemeContext from "../Common/themeContext";
import WorkAnim from "./workAnim";

const blockVariants = {
	hidden: {
		opacity: 0,
		x: -40,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function WorkSection() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [hideWorkAnim, setHideWorkAnim] = useState(true);

	const enterView = () => {
		setTheme("dark");
		setHideWorkAnim(false);
	};
	const leaveView = () => {
		setTheme("light");
		setHideWorkAnim(true);
	};

	return (
		<motion.section className="wide flex h-[50vh] items-center justify-between gap-4">
			<WorkAnim hidden={hideWorkAnim} />
			<motion.div
				className="flex w-1/2 flex-col"
				onViewportEnter={enterView}
				onViewportLeave={leaveView}
				variants={blockVariants}
				whileInView="visible"
				initial="hidden"
				// viewport={{ once: true }}
			>
				<Subheader>{`Work`}</Subheader>
				<Paragraph>
					{`I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft.`}
				</Paragraph>
				<Paragraph>{`Here are some of the things I made.`}</Paragraph>
			</motion.div>
		</motion.section>
	);
}
