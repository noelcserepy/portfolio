import Hero from "../components/Common/Hero";
import { motion } from "framer-motion";
import BlogItem from "../components/BlogItem";
import ContentWrapper from "../components/Common/ContentWrapper";
import Nav from "../components/Nav/Nav";

const data = require("/data.json");
const posts = data.posts;

export default function Blog({ showMenu, setShowMenu }) {
	return (
		<>
			<Nav showMenu={showMenu} setShowMenu={setShowMenu} />
			<ContentWrapper>
				<Hero showMenu={showMenu} title="Blog" subtitle="..." />

				<div className="flex flex-col w-full space-y-24">
					{posts.map((p, i) => (
						<BlogItem key={p.title} post={p} />
					))}
				</div>
			</ContentWrapper>
		</>
	);
}
