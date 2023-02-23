import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import * as images from "../components/About/aboutImages";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/ui/ContentWrapper";
import handshake from "../public/img/handshake.gif";
import unique from "../public/img/unique.gif";
import bye from "../public/img/bye.gif";
import Belief from "../components/About/belief";
import P from "../components/ui/P";
import Title from "../components/ui/Title";
import SectionWrapper from "../components/ui/SectionWrapper";
import ProcessSection from "../components/About/ProcessSection";

export default function About({ showMenu, setShowMenu, url }) {
	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero
					showMenu={showMenu}
					title={"A bit \nabout me"}
					subtitle="And what I believe."
				/>

				<motion.section className="flex min-h-screen w-full flex-col items-center gap-24">
					<Title>What I believe.</Title>
					<div className="flex h-min max-w-centered flex-col items-start justify-center gap-24 xl:flex-row xl:gap-0">
						<Belief
							img={handshake}
							title={"First\nimpressions\nmatter"}
							text={`Your website is likely the first interaction users have with you. Creating memorable and enjoyable experiences will set the tone for all future interactions.`}
						/>
						<Belief
							img={unique}
							title={"unique you,\nunique\nexperience"}
							text={`You are not like everybody else. Your online presence should reflect that. Be it bold or subtle, modern or classic, your message deserves its own voice.`}
						/>
						<Belief
							img={bye}
							title={"great design\ndrives engagement"}
							text={`Aesthetics are not just superficial, they are a key driver of user engagement and loyalty. A well-designed website is essential to brand value and customer retention.`}
						/>
					</div>
				</motion.section>

				<ProcessSection />

				<SectionWrapper>
					<div className="flex flex-col gap-4 md:w-1/2">
						<Title>Why all the mazes?</Title>
						<P>
							I didn't take the straightest path to get here. After studying
							hospitality, I launched my own e-commerce business. It now serves
							thousands of customers around the world. But I chose to leave it
							behind to pursue my love for programming. I now bring my client's
							ideas to life on the web. That, and mazes look cool.
						</P>
					</div>
				</SectionWrapper>
			</ContentWrapper>
		</>
	);
}
