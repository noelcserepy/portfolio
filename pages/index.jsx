import Nav from "../components/Nav/Nav";
import MazeLoader from "../components/MazeLoader";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ScreenBorder from "../components/ScreenBorder";
import Socials from "../components/Socials";
import Menu from "../components/Menu";

export default function Home() {
	const [animDone, setAnimDone] = useState(true);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {}, [animDone]);

	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden">
				{animDone ? (
					<>
						<Nav
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
						/>
						<Menu
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
						/>
						<Socials showMenu={showMenu} />
						<div className="grid grid-cols-8 gap-5 mx-auto max-w-5xl">
							<Hero />
						</div>
					</>
				) : (
					<MazeLoader setAnimDone={() => setAnimDone(true)} />
				)}
			</div>
		</>
	);
}
