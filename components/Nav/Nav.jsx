import Socials from "../Socials";
import Header from "./Header";
import Menu from "./Menu";

export default function Nav({
	showMenu,
	setShowMenu,
	navAnimDone,
	setNavAnimDone,
}) {
	return (
		<>
			<Header
				showMenu={showMenu}
				setShowMenu={setShowMenu}
				navAnimDone={navAnimDone}
				setNavAnimDone={setNavAnimDone}
			/>
			<Menu showMenu={showMenu} setShowMenu={setShowMenu} />
			<Socials showMenu={showMenu} />
		</>
	);
}
