import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(true);
	const router = useRouter();

	useEffect(() => {
		setShowMenu(false);
	}, [mazeAnimDone, router.pathname]);

	return (
		<Layout showMenu={showMenu} setShowMenu={setShowMenu}>
			{mazeAnimDone ? (
				<AnimatePresence exitBeforeEnter>
					<Component {...pageProps} />
				</AnimatePresence>
			) : (
				<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default MyApp;
