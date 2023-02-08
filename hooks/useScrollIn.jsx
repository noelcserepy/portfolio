import { useRef } from "react";

export default function useScrollIn() {
	const ref = useRef(null);

	function scrollIn() {
		const windowHeight = window.innerHeight;
		const elementHeight = ref.current.offsetHeight;

		const centerScrollDist =
			ref.current.offsetTop + (windowHeight - elementHeight) / 2;

		window.scrollTo({
			top: centerScrollDist,
			behavior: "smooth",
		});
	}

	return { ref, scrollIn };
}
