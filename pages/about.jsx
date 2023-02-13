import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import * as images from "../components/About/aboutImages";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/Common/ContentWrapper";
import handshake from "../public/img/handshake.gif";
import unique from "../public/img/unique.gif";
import bye from "../public/img/bye.gif";
import Belief from "../components/About/belief";
import { useContext } from "react";
import ThemeContext from "../components/Common/themeContext";

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

				<motion.div
					className="mb-44"
					onViewportLeave={() => setTheme("light")}
					onViewportEnter={() => setTheme("dark")}
					viewport={{ amount: 0.5 }}>
					<motion.section className="narrow mb-64 flex flex-col items-center justify-between gap-8 md:flex-row">
						<div className="w-1/2">
							<h3 className="text-s text-7xl">
								Why all the mazes
								<span className="text-orange">?</span>
							</h3>
							<p className="text-p">
								I didn't take the straightest path to get here. After studying
								hospitality, I launched my own e-commerce business. It now
								serves thousands of customers around the world. But I chose to
								leave it behind to pursue my love for programming. I now bring
								my client's ideas to life on the web. That, and mazes look cool.
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
					</motion.section>

					<motion.section className="flex h-screen w-full flex-col items-center gap-24">
						<motion.h3 className="text-s text-7xl">
							What I believe
							<span className="text-orange">.</span>
						</motion.h3>
						<div className="flex h-min  max-w-centered items-start justify-center">
							<Belief
								img={handshake}
								title={"First impressions\nmatter"}
								text={`Your website is likely the first interaction users have with you. Creating memorable and enjoyable experiences will set the tone for all future interactions.`}
							/>
							<Belief
								img={unique}
								title={"unique you,\nunique experience"}
								text={`You are not like everybody else. Your online presence should reflect that. Be it bold or subtle, modern or classic,  your message deserves its own voice.`}
							/>
							<Belief
								img={bye}
								title={"bad ux is\ncostly"}
								text={`The user judges you on every click and every scroll. Long load times, frustrating interactions and hard-to-find information will cost drive away users.`}
							/>
						</div>
					</motion.section>
				</motion.div>

				<motion.section className="flex h-screen w-full flex-col ">
					<div className="flex items-end gap-8">
						<motion.h3 className="text-s text-7xl">
							My Process
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

				{/* <motion.section className="narrow flex h-screen w-full flex-col items-center gap-12">
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
				</motion.section> */}
			</ContentWrapper>
		</>
	);
}
