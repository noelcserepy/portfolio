import Hero from "../components/Hero";
import { motion } from "framer-motion";

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
