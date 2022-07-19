import { Children } from "react";

function Subheader({ children }) {
	return (
		<h3 className="font-title text-4xl text-primary mb-4">
			{children}
			<span className="text-orange">.</span>
		</h3>
	);
}

export default Subheader;
