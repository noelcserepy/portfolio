import { useState } from "react";
import Menu from "./Nav/Menu";
import Nav from "./Nav/Nav";
import ScreenBorder from "./ScreenBorder";
import Socials from "./Socials";

function Layout({ showMenu, setShowMenu, children }) {
	const [navAnimDone, setNavAnimDone] = useState(false);

	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden pb-14">
				<Nav
					showMenu={showMenu}
					setShowMenu={setShowMenu}
					navAnimDone={navAnimDone}
					setNavAnimDone={() => setNavAnimDone(true)}
				/>
				<Menu showMenu={showMenu} setShowMenu={setShowMenu} />
				<Socials showMenu={showMenu} />
				<div className="flex flex-col space-y-32 mx-auto max-w-5xl">
					{children}
				</div>
			</div>
		</>
	);
}

export default Layout;
