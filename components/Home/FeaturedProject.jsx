import { motion } from "framer-motion";
import Paragraph from "../Paragraph";
import Subheader from "../Subheader";
import Image from "next/image";

const data = require("/data.json");

const duration = 0.5;

const mainVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: duration,
			ease: "easeOut",
		},
	},
};
const imageVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: duration,
			ease: "easeOut",
		},
	},
};
const subHeaderVariants = {
	hidden: {
		opacity: 0,
		y: -20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: duration,
			ease: "easeOut",
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
			duration: duration,
			ease: "easeOut",
		},
	},
};
const toolsVariants = {
	hidden: {
		x: 40,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: duration,
			delay: 0.3,
			ease: "easeOut",
		},
	},
};
const descriptionVariants = {
	hidden: {
		x: -40,
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
		transition: {
			duration: duration,
			delay: 0.3,
			ease: "easeOut",
		},
	},
};

function FeaturedProject({ project, imageRight }) {
	const current = data.projects.find(
		p => p.name.toString() === project.toString()
	);

	return (
		<motion.section
			className="flex w-full items-center justify-between"
			variants={mainVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.8 }}>
			<motion.div
				className={`w-[60%] origin-[0%_50%] ${
					imageRight ? "order-last translate-x-[9%]" : "-translate-x-[9%]"
				}`}
				variants={imageVariants}>
				<Image
					src={current.image}
					layout="responsive"
					width={594.26}
					height={350}
				/>
			</motion.div>

			<div className="flex flex-col w-[40%]">
				<motion.div variants={subHeaderVariants}>
					<Subheader>{current.name}</Subheader>
				</motion.div>

				<div className="flex space-x-4 ">
					<motion.div variants={toolsVariants}>
						<ul className="text-primary font-header text-base">
							{current.tools.map((t, i) => (
								<li key={t + i}>{t}</li>
							))}
						</ul>
					</motion.div>
					<motion.div
						className="w-0 border-l-2 border-primary "
						style={{ originY: 0 }}
						variants={lineVariants}
					/>
					<motion.div className="flex flex-col" variants={descriptionVariants}>
						<Paragraph>{current.description}</Paragraph>
						<div className="flex">
							{current.github !== "" && (
								<svg
									className="hover:scale-125 transition-all duration-300 cursor-pointer fill-primary"
									preserveAspectRatio="none"
									width="15"
									height="15"
									viewBox="0 0 15 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M7.5 0C3.35625 0 0 3.35625 0 7.5C0 10.8188 2.14687 13.6219 5.12813 14.6156C5.50313 14.6813 5.64375 14.4563 5.64375 14.2594C5.64375 14.0813 5.63438 13.4906 5.63438 12.8625C3.75 13.2094 3.2625 12.4031 3.1125 11.9812C3.02813 11.7656 2.6625 11.1 2.34375 10.9219C2.08125 10.7812 1.70625 10.4344 2.33437 10.425C2.925 10.4156 3.34687 10.9688 3.4875 11.1938C4.1625 12.3281 5.24062 12.0094 5.67188 11.8125C5.7375 11.325 5.93438 10.9969 6.15 10.8094C4.48125 10.6219 2.7375 9.975 2.7375 7.10625C2.7375 6.29063 3.02813 5.61563 3.50625 5.09063C3.43125 4.90313 3.16875 4.13438 3.58125 3.10313C3.58125 3.10313 4.20937 2.90625 5.64375 3.87188C6.24375 3.70312 6.88125 3.61875 7.51875 3.61875C8.15625 3.61875 8.79375 3.70312 9.39375 3.87188C10.8281 2.89688 11.4563 3.10313 11.4563 3.10313C11.8687 4.13438 11.6063 4.90313 11.5312 5.09063C12.0094 5.61563 12.3 6.28125 12.3 7.10625C12.3 9.98438 10.5469 10.6219 8.87813 10.8094C9.15 11.0437 9.38438 11.4937 9.38438 12.1969C9.38438 13.2 9.375 14.0063 9.375 14.2594C9.375 14.4563 9.51562 14.6906 9.89062 14.6156C11.3795 14.113 12.6732 13.1561 13.5898 11.8796C14.5063 10.6032 14.9996 9.07143 15 7.5C15 3.35625 11.6438 0 7.5 0Z"
									/>
								</svg>
							)}
						</div>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
}

export default FeaturedProject;
