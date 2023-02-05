import { Box, MeshWobbleMaterial } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import { useEffect } from "react";
import { Vector3 } from "three";

const AnimatedBox = animated(Box);

const colors = {
	white: "#FFFFFF",
	background: "#EAEEF5",
	lowContrastBlue: "#D4DBE8",
	lowContrastOrange: "#ECDED4",
	primary: "#0D1823",
	secondary: "#556883",
	orange: "#BF4D00",
	blue: "#0496FF",
};

export default function AnimBox({ args, position, hovered, isCenter }) {
	const centerPos = new Vector3(50, 50, -50);
	const posVec = new Vector3(position[0], position[1], position[2]);
	const distance = 1.8;
	const dest = posVec.sub(centerPos).multiplyScalar(distance).toArray();

	const [spring, api] = useSpring(
		() => ({
			position: position,
			config: config.wobbly,
		}),
		[]
	);

	useEffect(() => {
		if (hovered) {
			api.start({
				position: dest,
				config: { ...config.wobbly, clamp: false },
			});
		} else {
			api.start({
				position: position,
				config: { ...config.stiff, clamp: false },
			});
		}
	}, [hovered]);

	return (
		<AnimatedBox args={args} position={position} {...spring}>
			{isCenter ? (
				<MeshWobbleMaterial
					toneMapped={false}
					color={colors.orange}
					emissive={colors.orange}
					emissiveIntensity={20}
				/>
			) : (
				<meshStandardMaterial color={colors.orange} />
			)}
		</AnimatedBox>
	);
}
