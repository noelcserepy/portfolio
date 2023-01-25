import "../styles/globals.css";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import ThemeContext from "../components/Common/themeContext";

function App({ Component, pageProps }) {
	const [showMenu, setShowMenu] = useState(false);
	const [mazeAnimDone, setMazeAnimDone] = useState(false);
	const [theme, setTheme] = useState("light");

	const router = useRouter();
	const url = `https://noelcserepy.com${router.route}`;

	const handleOnExitComplete = () => {
		window.scrollTo(0, 0);
		setShowMenu(false);
	};

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
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
		</ThemeContext.Provider>
	);
}

export default App;
