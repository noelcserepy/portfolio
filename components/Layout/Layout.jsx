import SEO from "../Common/SEO";
import MazeLoader from "../Loader/MazeLoader";
import ScreenBorder from "./ScreenBorder";
import ThemeContext from "../Common/themeContext";
import { useContext } from "react";
import { Squada_One, Rasa, Roboto_Slab } from "@next/font/google";

const squadaOne = Squada_One({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-squada-one",
});

const rasa = Rasa({
	subsets: ["latin"],
	variable: "--font-rasa",
});

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	variable: "--font-roboto-slab",
});

function Layout({ url, mazeAnimDone, setMazeAnimDone, children }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			className={`${theme} ${squadaOne.variable} ${rasa.variable} ${robotoSlab.variable}`}>
			<SEO url={url} />
			<ScreenBorder />
			<div className="-z-10 h-full min-h-screen w-full overflow-hidden border-primary bg-background text-primary transition-colors duration-300 dark:border-background dark:bg-primary dark:text-background">
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
