import Nav from "../components/Nav/Nav";
import MazeLoader from "../components/MazeLoader";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ScreenBorder from "../components/ScreenBorder";
import Socials from "../components/Socials";
import Menu from "../components/Menu";

export default function Home() {
	const [mazeAnimDone, setMazeAnimDone] = useState(true);
	const [navAnimDone, setNavAnimDone] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {}, [mazeAnimDone]);

	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden">
				{mazeAnimDone ? (
					<>
						<Nav
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
							navAnimDone={navAnimDone}
							setNavAnimDone={() => setNavAnimDone(true)}
						/>
						<Menu
							showMenu={showMenu}
							setShowMenu={() => setShowMenu(!showMenu)}
						/>
						<Socials showMenu={showMenu} />
						<div className="grid grid-cols-8 gap-5 mx-auto max-w-5xl">
							<Hero showMenu={showMenu} />
						</div>
					</>
				) : (
					<MazeLoader setMazeAnimDone={() => setMazeAnimDone(true)} />
				)}
			</div>
		</>
	);
}
