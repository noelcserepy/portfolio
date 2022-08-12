import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(false);

	const router = useRouter();
	const url = `https://noelcserepy.com${router.route}`;

	const handleOnExitComplete = () => {
		window.scrollTo(0, 0);
		setShowMenu(false);
	};

	return (
		<Layout
			url={url}
			mazeAnimDone={mazeAnimDone}
			setMazeAnimDone={() => setMazeAnimDone(true)}>
			<AnimatePresence exitBeforeEnter onExitComplete={handleOnExitComplete}>
				<Component
					{...pageProps}
					key={url}
					showMenu={showMenu}
					setShowMenu={() => setShowMenu(!showMenu)}
				/>
			</AnimatePresence>
		</Layout>
	);
}

export default App;
