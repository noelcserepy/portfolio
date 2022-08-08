import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import Subheader from "../components/Subheader";
import Paragraph from "../components/Paragraph";
import Image from "next/image";
import Button from "../components/Common/Button";
import * as images from "../components/aboutImages";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/Common/ContentWrapper";

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

export default function About({ showMenu, setShowMenu }) {
	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero
					showMenu={showMenu}
					title={"A little \nbit \nabout me"}
					subtitle="Past, present and future"
				/>

				<motion.section className="flex flex-col-reverse md:flex-row w-full justify-between items-center md:space-x-4">
					<motion.div
						className="flex flex-col w-full md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<Subheader stopper="?">Why all the mazes</Subheader>
						<Paragraph>
							At the risk of sounding corny, the answer is that I didn’t take
							the straightest path in life.
						</Paragraph>
						<Paragraph>
							I grew up in Switzerland, went to school in England. I studied
							economics, biochemistry and then graduated in hospitality
							management. I worked in a hotel in Bangkok, did online marketing
							in Zürich and founded a company that sells flavoured toothpicks to
							customers across the globe.
						</Paragraph>
						<Paragraph>
							Only after dabbling with Python back in 2018 did I know what I
							want to do. I want to join a team to build world-class software
							products. Since then, I have been building projects and learning
							concepts to make that happen.
						</Paragraph>
						<Paragraph>
							Okay, and mazes just look really cool... Don’t judge.
						</Paragraph>
					</motion.div>
					<motion.div className="flex justify-center items-center w-full md:w-5/12">
						<Image src={images.noelFace} layout="intrinsic" />
					</motion.div>
				</motion.section>

				<motion.section className="flex flex-col md:flex-row w-full justify-between items-center space-x-4">
					<motion.div className="flex justify-center items-center w-full md:w-5/12">
						<Image src={images.zunderDude} layout="intrinsic" />
					</motion.div>
					<motion.div
						className="flex flex-col w-full md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<Subheader stopper="!">Toothpicks? Yes, toothpicks</Subheader>
						<Paragraph>
							During my time at university, I wanted to build something real.
							Luckily, I shared that desire with two of my childhood friends,
							Alex an Daniel. Flavoured toothpicks were quite popular during my
							friends’ military service and we thought we could make them
							better.
						</Paragraph>
						<Paragraph>
							In 2016 we started production by hand in a literal cellar,
							flooding our local mailboxes with envelopes. We now produce our
							toothpicks in collaboration with ABA Amriswil, a social enterprise
							offering jobs and housing to people with disabilities. The
							toothpicks are sent to one of our warehouses and then shipped
							across the world to their final destination.
						</Paragraph>
						<Paragraph>
							I led the marketing efforts until 2020, when I decided to leave
							the company to start programming. Now I am a board member and
							investor, helping out on occasion.
						</Paragraph>
					</motion.div>
				</motion.section>

				<motion.section className="flex flex-col md:flex-row w-full justify-between space-y-4 md:space-y-0 md:space-x-4">
					<motion.div
						className="flex flex-col md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<Subheader>Photography</Subheader>
						<Paragraph>
							I like beautiful things. But I also want to create beautiful
							things. Web design scratches that itch and photography helps me
							improve on things like composition and colours. It also helps me
							to decompress and be attentive and explore my surroundings.
						</Paragraph>
						<motion.div>
							<Image src={images.photo1} layout="responsive" />
						</motion.div>
						<motion.div>
							<Image src={images.photo2} layout="responsive" />
						</motion.div>
					</motion.div>
					<motion.div
						className="flex flex-col md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<motion.div>
							<Image src={images.photo3} layout="responsive" />
						</motion.div>
						<motion.div>
							<Image src={images.photo4} layout="responsive" />
						</motion.div>
						<motion.div>
							<Image src={images.photo5} layout="responsive" />
						</motion.div>
						<motion.div className="flex justify-center items-center">
							<Button>Find me on Instagram</Button>
						</motion.div>
					</motion.div>
				</motion.section>
			</ContentWrapper>
		</>
	);
}
