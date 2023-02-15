import Hero from "../components/Common/Hero";
import FeaturedProject from "../components/Home/FeaturedProject";
import OtherProjectsWrapper from "../components/Home/OtherProjectsWrapper";
import Nav from "../components/Nav/Nav";
import ContentWrapper from "../components/ui/ContentWrapper";
import WorkSection from "../components/Home/workSection";
import { useState } from "react";

export default function Home({ showMenu, setShowMenu }) {
	const [stage, setStage] = useState(0);

	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero
					showMenu={showMenu}
					title={"Heyo, \nI'm Noël \nCserépy"}
					subtitle="I build stuff for the web."
				/>
				<WorkSection />

				<FeaturedProject project="ShufflePlus" imageRight={false} />
				<FeaturedProject project="Packer" imageRight={true} />

				<OtherProjectsWrapper />
			</ContentWrapper>
		</>
	);
}
