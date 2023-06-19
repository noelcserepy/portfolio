function ScreenBorder() {
	return (
		<>
			<div className="fixed z-50 bg-white w-4 h-[200vh] left-0 top-0 overflow-hidden" />
			<div className="fixed z-50 bg-white w-4 h-[200vh] right-0 top-0 overflow-hidden" />
			<div className="fixed z-50 bg-white h-4 w-full top-0 overflow-hidden" />
			<div className="fixed z-50 bg-white h-4 w-full bottom-0 overflow-hidden" />
		</>
	);
}

export default ScreenBorder;
