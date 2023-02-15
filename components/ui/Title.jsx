export default function Title({ children }) {
	let text, stopper;
	if (typeof children === "string") {
		text = children.slice(0, children.length - 1);
		stopper = children.slice(children.length - 1);
	}
	return (
		<h3 className="font-title text-7xl">
			{text}
			<span className="text-orange">{stopper}</span>{" "}
		</h3>
	);
}
