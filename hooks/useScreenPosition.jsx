import { useEffect, useState } from "react";

export default function useScreenPosition(ref) {
	const [screenPosition, setScreenPosition] = useState(null);
	console.log(ref);
	useEffect(() => {
		const boundingRect = ref.current.getBoundingClientRect();
		console.log(boundingRect);
		const { top, left, bottom, right } = boundingRect;

		const height = bottom - top;
		const width = right - left;
		const centerY = top + height / 2;
		const centerX = left + width / 2;

		setScreenPosition({ top, left, bottom, right, centerX, centerY });
	}, []);

	return screenPosition;
}
