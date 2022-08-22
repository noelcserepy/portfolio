import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import Subheader from "../components/Common/Subheader";
import Paragraph from "../components/Common/Paragraph";
import Image from "next/image";
import * as images from "../components/About/aboutImages";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/Common/ContentWrapper";

const blockVariants = {
	hidden: {
		opacity: 0,
		y: 50,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

export default function About({ showMenu, setShowMenu, url }) {
	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero
					showMenu={showMenu}
					title={"A little \nbit \nabout me"}
					subtitle="Past, present and future"
				/>

				<motion.section className="flex flex-col-reverse w-full md:flex-row ">
					<motion.div
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<motion.div
							className="w-4/12 float-right min-w-[140px]"
							style={{
								clipPath: "circle(50%)",
								shapeOutside: "circle(50%)",
							}}>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.noel_portrait}
								layout="responsive"
								alt="A photograph of Noel"
							/>
						</motion.div>
						<Subheader stopper="?">{`Why all the mazes`}</Subheader>
						<Paragraph>
							{`At the risk of sounding trite, the answer is that I didn\’t take the straightest path in life.`}
						</Paragraph>
						<Paragraph>
							{`I grew up in Switzerland and went to school in England.`}
						</Paragraph>
						<Paragraph>
							{`I studied economics, then biochemistry and then graduated in hospitality management.`}
						</Paragraph>
						<Paragraph>
							{`I worked as a hôtelier in Bangkok and the swiss alps. I optimized keywords as an online marketer in Zürich. I founded a company selling flavoured toothpicks.`}
						</Paragraph>
						<Paragraph>
							{`Yet, since I started dabbling with Python in 2018, I could not stop thinking about programming. It took me a while to figure out, but I knew what I wanted to do. `}
							<strong>{`I want to make fantastic software with fantastic people. `}</strong>
							{`So I built projects, learned concepts and here we are.`}
						</Paragraph>
						<Paragraph>{`Okay, and mazes look cool.`}</Paragraph>
					</motion.div>
				</motion.section>

				<motion.section className="flex flex-col-reverse w-full md:flex-row ">
					<motion.div
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<motion.div
							className="w-4/12 float-right min-w-[140px]"
							style={{
								clipPath: "circle(closest-side)",
								shapeOutside: "circle(closest-side)",
							}}>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.zunder_toothpicks}
								layout="responsive"
								alt="A man in denim clothes opening a pack of Zunder Toothpicks"
							/>
						</motion.div>

						<Subheader stopper="!">{`Toothpicks? Yes, toothpicks`}</Subheader>
						<Paragraph>
							{`During my time at university, I wanted to build something real. Luckily, I shared that desire with two childhood friends, Alex and Daniel. `}
						</Paragraph>
						<Paragraph>
							{`Flavoured toothpicks were all the rage during my friends\’ military service. We thought we could make them better! `}
						</Paragraph>
						<Paragraph>
							{`We started production by hand in 2016. The local mailboxes almost burst with all the envelopes we stuffed in there. `}
						</Paragraph>
						<Paragraph>
							{`We have come a long way since then. ABA Amriswil now transforms ordinary toothpicks into the product our customers love. ABA is a social enterprise offering jobs and housing to people with disabilities. Packaged and ready to go, the toothpicks travel all over the world to their final destination. `}
						</Paragraph>
						<Paragraph>
							{`During my time at Zunder, I had many responsibilities. I negotiated with manufacturers, implemented systems and orchestrated a host of freelancers. Yet, my main task was to lead the marketing efforts of Zunder.`}
						</Paragraph>
						<Paragraph>
							{`I realized I thrived in thinking of efficient systems to manage our resources and data. This led me to go my own way and start programming. `}
						</Paragraph>
						<Paragraph>
							{`I still act in an advisory capacity as a board member at Zunder. `}
						</Paragraph>
					</motion.div>
				</motion.section>

				<motion.section className="flex flex-col md:flex-row w-full justify-between space-y-4 md:space-y-0 md:space-x-4">
					<motion.div
						className="flex flex-col w-full md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<Subheader>{`Photography`}</Subheader>
						<Paragraph>
							{`I like making things. Especially beautiful things. Web design scratches that itch and photography teaches me composition and colours. It also helps me to decompress and be attentive and explore my surroundings.`}
						</Paragraph>
						<motion.div>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.cliffside}
								layout="responsive"
								alt="A cliffside in the swiss alps"
							/>
						</motion.div>
						<motion.div>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.split_facade}
								layout="responsive"
								alt="A blue and white building facade"
							/>
						</motion.div>
					</motion.div>
					<motion.div
						className="flex flex-col md:w-1/2 space-y-4"
						variants={blockVariants}
						whileInView="visible"
						initial="hidden"
						viewport={{ once: true }}>
						<motion.div>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.windows}
								layout="responsive"
								alt="A green building facade with windows down the middle"
							/>
						</motion.div>
						<motion.div>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.train_station}
								layout="responsive"
								alt="A single woman with a jellow jacket waiting for a train"
							/>
						</motion.div>
						<motion.div>
							<Image
								lazyBoundary="2000px"
								placeholder="blur"
								src={images.glass_ceiling}
								layout="responsive"
								alt="A roof with many oddly shaped windows captured from the inside"
							/>
						</motion.div>
						<motion.div className="flex items-center justify-center h-full w-full border-2 border-orange">
							<motion.a
								className="font-text font-bold text-lg sm:text-xl text-primary text-center md:whitespace-pre-line lg:whitespace-normal"
								href="https://www.instagram.com/noelcserepy/"
								target="_blank"
								rel="noreferrer"
								whileHover={{
									letterSpacing: "0.05em",
									transition: {
										type: "spring",
										duration: 0.3,
										bounce: 0.5,
									},
								}}
								whileTap={{
									letterSpacing: "0.04em",
									transition: {
										type: "spring",
										duration: 0.3,
										bounce: 0.5,
									},
								}}>
								{`@noelcserepy \non \nInstagram`}
							</motion.a>
						</motion.div>
					</motion.div>
				</motion.section>
			</ContentWrapper>
		</>
	);
}
