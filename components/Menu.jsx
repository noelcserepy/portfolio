import { AnimatePresence } from "framer-motion";
import MazeBackground from "./MazeBackground";

function Menu({ showMenu, setShowMenu }) {
	return (
		<AnimatePresence exitBeforeEnter>
			{showMenu && (
				<div className="bg-orange h-screen w-screen fixed top-0 left-0 z-30 overflow-hidden">
					<div className="flex flex-col mt-16 fixed left-16 top-16 h-1/3 justify-between">
						<a className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							Work
						</a>
						<a className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							About
						</a>
						<a className="font-title text-8xl text-white hover:transition-all hover:tracking-widest origin-center duration-500 cursor-pointer">
							Blog
						</a>
					</div>
					<div className="fixed right-1/4 top-1/2 stroke-primary">
						<MazeBackground />
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}

export default Menu;
