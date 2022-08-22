import { motion } from "framer-motion";
import SEO from "../Common/SEO";
import MazeLoader from "../Loader/MazeLoader";
import ScreenBorder from "./ScreenBorder";

function Layout({ url, mazeAnimDone, setMazeAnimDone, children }) {
	return (
		<>
			<SEO url={url} />
			<ScreenBorder />
			<motion.div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden">
				{mazeAnimDone ? (
					children
				) : (
					<MazeLoader setMazeAnimDone={setMazeAnimDone} />
				)}
			</motion.div>
		</>
	);
}

export default Layout;
