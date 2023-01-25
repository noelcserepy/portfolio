import { motion } from "framer-motion";
import SEO from "../Common/SEO";
import MazeLoader from "../Loader/MazeLoader";
import ScreenBorder from "./ScreenBorder";
import ThemeContext from "../Common/themeContext";
import { useContext } from "react";

function Layout({ url, mazeAnimDone, setMazeAnimDone, children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${theme}`}>
			<SEO url={url} />
			<ScreenBorder />
			<motion.div className="bg-background text-primary border-primary dark:border-background dark:bg-primary  dark:text-background transition-colors duration-300 w-full h-full min-h-screen -z-10 overflow-hidden">
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
