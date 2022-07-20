import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Subheader from "../components/Subheader";
import { motion } from "framer-motion";
import Paragraph from "../components/Paragraph";
import FeaturedProject from "../components/FeaturedProject";
import ScrollAnim from "../components/ScrollAnim";
import OtherProject from "../components/OtherProject";

export default function Home({ showMenu }) {
	return (
		<>
			<Hero
				showMenu={showMenu}
				title="Heyo, I'm Noël Cserépy"
				subtitle="I build stuff for the web."
			/>

			<motion.section className="w-5/12 mt-20">
				<ScrollAnim preset="slideInUp">
					<Subheader>Something about me</Subheader>
				</ScrollAnim>
				<ScrollAnim preset="slideInLeft" delay={0.3}>
					<Paragraph>
						I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft. Here are
						some of the things I made.
					</Paragraph>
				</ScrollAnim>
			</motion.section>

			<motion.section className="w-5/12 mt-20">
				<ScrollAnim preset="slideInUp">
					<Subheader>Work</Subheader>
				</ScrollAnim>
				<ScrollAnim preset="slideInLeft" delay={0.3}>
					<Paragraph>
						I am constantly looking to improve. From Spotify web apps to 3D
						rendering optimization, from Discord bots to robotic eyes, I build
						ever more challenging things to get better at my craft. Here are
						some of the things I made.
					</Paragraph>
				</ScrollAnim>
			</motion.section>

			<FeaturedProject project="ShufflePlus" imageRight={false} />
			<FeaturedProject project="Packer" imageRight={true} />

			{/* Other projects */}
			<section className="flex w-[80%] relative self-center">
				<ScrollAnim preset="none">
					<motion.div
						className="w-0 h-full border-l-2 border-primary absolute left-1/2"
						style={{ originY: 0 }}
						initial={{ scaleY: 0 }}
						animate={{
							scaleY: 1,
							transition: {
								delay: 0.1,
								duration: 0.5,
								ease: "easeInOut",
							},
						}}
					/>
				</ScrollAnim>
				<div className="flex flex-col space-y-16">
					<OtherProject project="Memr" />
					<OtherProject project="Spotifile" />
					<OtherProject project="Lazy-Torrent" />
					<OtherProject project="My_Ls" />
				</div>
			</section>
			<div className="h-72" />
		</>
	);
}
