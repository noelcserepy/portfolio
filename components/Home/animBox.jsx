import { MeshWobbleMaterial } from "@react-three/drei";
import { Vector3 } from "three";
import { motion } from "framer-motion-3d";
import { useCallback, useEffect } from "react";

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

export default function AnimBox({ args, position, hovered, isCenter, stage }) {
	const centerPos = new Vector3(50, 50, -50);
	const posVec = new Vector3(position[0], position[1], position[2]);
	const distance = 1.8;
	const dest = posVec.sub(centerPos).multiplyScalar(distance);

	const meshVariants = {
		hidden: {
			x: dest.x,
			y: dest.y + 1000,
			z: dest.z,
		},
		hover: {
			x: dest.x,
			y: dest.y,
			z: dest.z,
		},
		idle: {
			x: dest.x,
			y: dest.y,
			z: dest.z,
		},
	};

	const getVariant = useCallback(() => {
		console.log("stage: ", stage);
		switch (stage) {
			case 0:
				return "hidden";
			case 1:
				if (position[1] < 100) return "idle";
				return "hidden";
			case 2:
				if (position[1] <= 100) return "idle";
				return "hidden";
			case 3:
				return "idle";
		}
	}, [stage]);

	return (
		<motion.mesh
			position={position}
			variants={meshVariants}
			initial="hidden"
			animate={() => getVariant()}>
			<boxGeometry args={args} />
			{isCenter ? (
				<MeshWobbleMaterial
					toneMapped={false}
					color={colors.orange}
					emissive={colors.orange}
					emissiveIntensity={20}
				/>
			) : (
				<meshToonMaterial
					color={colors.orange}
					wireframe={false}
					wireframeLinewidth={10}
					attach={"material"}
				/>
			)}
		</motion.mesh>
		// </AnimatedBox>
	);
}
