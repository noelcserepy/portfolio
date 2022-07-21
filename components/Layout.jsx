import ScreenBorder from "./ScreenBorder";

function Layout({ children }) {
	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden pb-14">
				{children}
			</div>
		</>
	);
}

export default Layout;
