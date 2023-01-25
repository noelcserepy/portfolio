import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import Subheader from "../components/Common/Subheader";
import Paragraph from "../components/Common/Paragraph";
import Image from "next/image";
import * as images from "../components/About/aboutImages";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/Common/ContentWrapper";
import grow from "../public/img/grow.gif";
import handshake from "../public/img/handshake.gif";
import directness from "../public/img/directness.gif";
import Belief from "../components/About/belief";
import { useContext } from "react";
import ThemeContext from "../components/Common/themeContext";
import DelightAnim, { Scene } from "../components/About/delightAnim";

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
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero
					showMenu={showMenu}
					title={"A little \nbit \nabout me"}
					subtitle="Past, present and future"
				/>

				<section className="narrow flex flex-col items-center justify-between gap-8 md:flex-row">
					<div className="w-1/2">
						<h3 className="text-s text-7xl">
							So this is me
							<span className="text-orange">.</span>
						</h3>
						<p className="text-p">
							I am a freelance web developer that enjoys
							developing one-of-a-kind and engaging web
							experiences. I bring a unique perspective to my work
							because of my history in software development,
							hospitality and marketing.
						</p>
						<p className="text-p">
							After launching my own business, I chose to pursue
							my love for programming, and I now assist customers
							in bringing their ideas to life on the web. Using
							Next.js and TypeScript, I strive to create
							captivating and memorable digital experiences that
							stand out and bring joy.
						</p>
					</div>
					<div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl">
						<Image
							src={images.noel_portrait}
							alt="A photograph of Noel"
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
						/>
					</div>
				</section>

				<motion.div
					className="wide"
					onViewportEnter={() => setTheme("dark")}
					onViewportLeave={() => setTheme("light")}>
					<motion.section className="flex h-screen w-full flex-col items-center gap-12">
						<motion.h3 className="text-s text-7xl">
							What I believe
							<span className="text-orange">.</span>
						</motion.h3>
						<div className="flex h-screen items-center justify-center">
							<Belief
								img={grow}
								title={"Growth"}
								text={`Every day I seek to become a better person. With self
									reflection and intentional action, I push myself to become a
									man I am happy to be.`}
							/>
							<Belief
								img={handshake}
								title={"Win-Win"}
								text={`Not every interaction is worth pursuing. But in every interaction it is worth pursuing the best outcome for all parties.`}
							/>
							<Belief
								img={directness}
								title={"Directness"}
								text={`Say the important things. I seek to make my expectations and those of others clear, so we can move forward together.`}
							/>
						</div>
					</motion.section>

					<motion.section className="flex h-screen w-full flex-col justify-end">
						<DelightAnim />
						<div className="flex items-end gap-8">
							<motion.h3 className="text-s text-7xl">
								Delight
								<span className="text-orange">.</span>
							</motion.h3>
							<p className="text-p">
								{`Just as a restaurant is more than simply food, a website is more than merely a collection of pages and code; it is an experience. A website should be meticulously created to deliver a smooth and delightful experience for the user.`}
							</p>
							<p className="text-p">
								{`It can be tough to assess the value of our purchases and navigate the clutter in a sea of products. Every product, especially in the digital space, should have a clear purpose and be created with the user in mind. My goal as a developer is to use technology to make our lives more efficient and enjoyable.`}
							</p>
						</div>
					</motion.section>
				</motion.div>

				<motion.section className="wide flex h-screen w-full flex-col items-center gap-12">
					<motion.h3 className="text-s text-7xl">
						What I can do for you
						<span className="text-orange">.</span>
					</motion.h3>
					<div className="flex h-screen items-center justify-center">
						<Belief
							img={grow}
							title={"Growth"}
							text={`Every day I seek to become a better person. With self
									reflection and intentional action, I push myself to become a
									man I am happy to be.`}
						/>
						<Belief
							img={handshake}
							title={"Win-Win"}
							text={`Not every interaction is worth pursuing. But in every interaction it is worth pursuing the best outcome for all parties.`}
						/>
						<Belief
							img={directness}
							title={"Directness"}
							text={`Say the important things. I seek to make my expectations and those of others clear, so we can move forward together.`}
						/>
					</div>
				</motion.section>

				<motion.section className="narrow flex h-screen w-full flex-col items-center gap-12">
					<motion.h3 className="text-s text-7xl">
						Why all the mazes
						<span className="text-orange">?</span>
					</motion.h3>
					<div className="relative h-[300px] w-[300px] overflow-hidden rounded-xl">
						<Image
							src={images.noel_portrait}
							alt="A photograph of Noel"
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
							}}
						/>
					</div>
				</motion.section>
			</ContentWrapper>
		</>
	);
}
