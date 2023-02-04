import { motion } from "framer-motion";
import SEO from "../Common/SEO";
import MazeLoader from "../Loader/MazeLoader";
import ScreenBorder from "./ScreenBorder";
import ThemeContext from "../Common/themeContext";
import { useContext } from "react";

function Layout({ url, mazeAnimDone, setMazeAnimDone, children }) {
	const { theme } = useContext(ThemeContext);

	setMazeAnimDone(true);
	return (
		<div className={`${theme}`}>
			<SEO url={url} />
			<ScreenBorder />
			<motion.div className="-z-10 h-full min-h-screen w-full overflow-hidden  border-primary bg-background text-primary transition-colors duration-300 dark:border-background dark:bg-primary dark:text-background">
				{mazeAnimDone ? (
					children
				) : (
					<MazeLoader setMazeAnimDone={setMazeAnimDone} />
				)}
			</motion.div>
		</div>
	);
}

export default Layout;
