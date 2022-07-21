import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import MazeLoader from "../components/MazeLoader";
import Nav from "../components/Nav/Nav";
import Menu from "../components/Nav/Menu";
import Socials from "../components/Socials";

function MyApp({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(false);
	const [navAnimDone, setNavAnimDone] = useState(false);

	const router = useRouter();

	useEffect(() => {
		setShowMenu(false);
	}, [mazeAnimDone, router.pathname]);

	return (
		<Layout showMenu={showMenu} setShowMenu={setShowMenu}>
			{mazeAnimDone ? (
				<AnimatePresence>
					<Nav
						key="nav"
						showMenu={showMenu}
						setShowMenu={setShowMenu}
						navAnimDone={navAnimDone}
						setNavAnimDone={() => setNavAnimDone(true)}
					/>
					<Menu key="menu" showMenu={showMenu} setShowMenu={setShowMenu} />
					<Socials key="socials" showMenu={showMenu} />
					<div
						key="content"
						className="flex flex-col space-y-32 mx-auto max-w-5xl">
						<Component {...pageProps} />
					</div>
				</AnimatePresence>
			) : (
				<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default MyApp;
