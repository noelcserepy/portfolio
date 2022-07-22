import Hero from "../components/Hero";
import Subheader from "../components/Subheader";
import { motion } from "framer-motion";
import Paragraph from "../components/Paragraph";
import FeaturedProject from "../components/Home/FeaturedProject";
import OtherProjectsWrapper from "../components/Home/OtherProjectsWrapper";

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

export default function Home({ showMenu }) {
	return (
		<>
			<Hero
				showMenu={showMenu}
				title="Heyo, I'm Noël Cserépy"
				subtitle="I build stuff for the web."
			/>

			<motion.section
				className="w-5/12"
				variants={blockVariants}
				whileInView="visible"
				initial="hidden"
				viewport={{ once: true }}>
				<Subheader>Work</Subheader>
				<Paragraph>
					I am constantly looking to improve. From Spotify web apps to 3D
					rendering optimization, from Discord bots to robotic eyes, I build
					ever more challenging things to get better at my craft. Here are some
					of the things I made.
				</Paragraph>
			</motion.section>

			<FeaturedProject project="ShufflePlus" imageRight={false} />
			<FeaturedProject project="Packer" imageRight={true} />

			<OtherProjectsWrapper />
		</>
	);
}
