import ScreenBorder from "./ScreenBorder";

function Layout({ children }) {
	return (
		<>
			<ScreenBorder />
			<div className="bg-background w-full h-full min-h-screen -z-10 overflow-hidden">
				{children}
			</div>
		</>
	);
}

export default Layout;
