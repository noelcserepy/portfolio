function ScreenBorder() {
	return (
		<>
			<div className="fixed z-50 bg-white w-4 h-full left-0 overflow-hidden" />
			<div className="fixed z-50 bg-white w-4 h-full right-0 overflow-hidden" />
			<div className="fixed z-50 bg-white h-4 w-full top-0 overflow-hidden" />
			<div className="fixed z-50 bg-white h-4 w-full bottom-0 overflow-hidden" />
		</>
	);
}

export default ScreenBorder;
