import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import MazeLoader from "../components/Loader/MazeLoader";
import MazeLoader2 from "../components/Loader/MazeLoader2";

function App({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(true);

	const router = useRouter();
	const url = `https://noelcs.com${router.route}`;

	useEffect(() => {
		setShowMenu(false);
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
				<MazeLoader2 setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default App;
