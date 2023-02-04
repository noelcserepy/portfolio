import { Box } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { useEffect } from "react";

const AnimatedBox = animated(Box);

export default function AnimBox({ args, position, hovered }) {
	const centerPos = [100, 100, 0];
	const [spring, api] = useSpring(
		() => ({
			position: [0, 0, 0],
			config: config.wobbly,
		}),
		[]
	);

	useEffect(() => {
		if (hovered) {
			// const currentPos = { x: 0, y: 0, z: 0 };
			const x = position[0] - centerPos[0] * 1.3;
			const y = position[1] - centerPos[1] * 1.3;
			const z = position[2] - centerPos[2] * 1.3;

			api.start({
				position: [x, y, z],
				config: { ...config.gentle, clamp: false },
			});
		} else {
			api.start({
				position: [0, 0, 0],
				config: { clamp: true },
			});
		}
	}, [hovered]);

	return (
		<AnimatedBox args={args} position={position} {...spring}>
			<meshStandardMaterial color="hotpink" />
		</AnimatedBox>
	);
}
