function Subheader({ stopper = ".", children }) {
	return (
		<h3 className="text-s text-7xl">
			{children}
			<span className="text-orange">{stopper}</span>
		</h3>
	);
}

export default Subheader;
