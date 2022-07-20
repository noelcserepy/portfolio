import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(true);

	useEffect(() => {}, [mazeAnimDone]);

	return (
		<Layout showMenu={showMenu} setShowMenu={setShowMenu}>
			{mazeAnimDone ? (
				<Component {...pageProps} />
			) : (
				<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default MyApp;
