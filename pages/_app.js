import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import MazeLoader from "../components/MazeLoader";

function MyApp({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(false);

	const router = useRouter();
	const url = `https://noelcs.com${router.route}`;

	useEffect(() => {
		setShowMenu(false);
		console.log(router.pathname);
	}, [mazeAnimDone, router.pathname]);

	return (
		<Layout>
			{mazeAnimDone ? (
				<AnimatePresence
					exitBeforeEnter
					onExitComplete={() => window.scrollTo(0, 0)}>
					<Component
						{...pageProps}
						key={url}
						showMenu={showMenu}
						setShowMenu={() => setShowMenu(!showMenu)}
					/>
				</AnimatePresence>
			) : (
				<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default MyApp;
