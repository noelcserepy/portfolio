import "../styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";
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
	const url = `https://noelcs.com${router.route}`;

	useEffect(() => {
		setShowMenu(false);
		console.log(router.pathname);
	}, [mazeAnimDone, router.pathname]);

	return (
		<Layout>
			{mazeAnimDone ? (
				<>
					<Nav
						key="nav"
						showMenu={showMenu}
						setShowMenu={() => setShowMenu(!showMenu)}
						navAnimDone={navAnimDone}
						setNavAnimDone={() => setNavAnimDone(true)}
					/>
					<Menu
						key="menu"
						showMenu={showMenu}
						setShowMenu={() => setShowMenu(!showMenu)}
					/>
					<Socials key="socials" showMenu={showMenu} />
					<motion.div className="flex flex-col space-y-72 mx-auto max-w-5xl pb-32">
						<AnimatePresence
							exitBeforeEnter
							onExitComplete={() => window.scrollTo(0, 0)}>
							<Component {...pageProps} key={url} />
						</AnimatePresence>
					</motion.div>
				</>
			) : (
				<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
			)}
		</Layout>
	);
}

export default MyApp;
