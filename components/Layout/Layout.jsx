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
			<div className="-z-10 h-full min-h-screen w-full overflow-hidden  border-primary bg-background text-primary transition-colors duration-300 dark:border-background dark:bg-primary dark:text-background">
				{mazeAnimDone ? (
					children
				) : (
					<MazeLoader setMazeAnimDone={setMazeAnimDone} />
				)}
			</div>
		</div>
	);
}

export default Layout;
