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
				title="A little bit about me"
				subtitle="Past, present and future"
			/>
		</>
	);
}
