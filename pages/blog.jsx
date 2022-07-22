import Hero from "../components/Hero";
import { motion } from "framer-motion";
import BlogItem from "../components/BlogItem";

const data = require("/data.json");
const posts = data.posts;

export default function Blog({ showMenu }) {
	return (
		<>
			<Hero showMenu={showMenu} title="Blog" subtitle="..." />

			<div className="flex flex-col w-full space-y-24">
				{posts.map((p, i) => (
					<BlogItem key={p.title} post={p} />
				))}
			</div>
		</>
	);
}
