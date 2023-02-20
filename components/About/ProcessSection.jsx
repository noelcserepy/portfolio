import { motion } from "framer-motion";
import { useState } from "react";
import Title from "../ui/Title";
import ProcessItem from "./ProcessItem";

export default function ProcessSection({ children }) {
	return (
		<motion.section className="flex min-h-screen w-full flex-col items-center gap-24">
			<Title>My Process.</Title>
			<ul>
				<ProcessItem />
				<ProcessItem />
				<ProcessItem />
			</ul>
		</motion.section>
	);
}
