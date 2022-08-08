import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import Subheader from "./Subheader";

const lineVariants = {
	hidden: {
		scaleX: 0,
	},
	visible: {
		scaleX: 1,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

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

function BlogItem({ post }) {
	return (
		<motion.section
			className="grid grid-cols-8 auto-rows-min"
			whileInView="visible"
			initial="hidden"
			viewport={{ once: true }}>
			<p className="text-orange font-header text-base col-span-2 md:col-span-1 text-end pr-4">
				{post.date}
			</p>

			<motion.div className="col-start-3 md:col-start-2 col-end-9 flex items-center">
				<motion.div
					className="w-full h-0 border-t-2 border-primary"
					style={{ originX: 0 }}
					variants={lineVariants}
				/>
			</motion.div>
			<motion.div
				className="col-start-1 md:col-start-2 col-end-9 row-start-2 pl-4 mt-1"
				variants={blockVariants}
				whileInView="visible"
				initial="hidden"
				viewport={{ once: true }}>
				<Subheader>{post.title}</Subheader>
				<Paragraph>{post.description}</Paragraph>
			</motion.div>
		</motion.section>
	);
}

export default BlogItem;
