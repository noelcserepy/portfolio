import { useCallback, useEffect } from "react";
import { MeshToonMaterial, Vector3, BoxGeometry, Mesh } from "three";
import { extend } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useAnimationControls } from "framer-motion";
extend({ MeshToonMaterial, BoxGeometry, Mesh });

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

export default function AnimBox({
	args,
	position,
	hovered,
	isCenter,
	stage,
	index,
}) {
	// 250, -120;
	// 50, 50, -50;
	const centerPos = new Vector3(50, 50, -50);
	const posVec = new Vector3(position[0], position[1], position[2]);
	const near = posVec.sub(centerPos).multiplyScalar(1.8);
	const far = new Vector3();
	far.copy(near).multiplyScalar(1.4);

	const boxControls = useAnimationControls();
	const materialControls = useAnimationControls();

	const meshVariants = {
		stage0: {
			x: position[0],
			y: position[1],
			z: position[2],
		},
		stage1: {
			x: position[0],
			y: position[1],
			z: position[2],
		},
		stage2: {
			x: near.x,
			y: near.y,
			z: near.z,
			transition: {
				delay: 0.5,
			},
		},
		far: {
			x: far.x,
			y: far.y,
			z: far.z,
		},
		stage3: {
			x: near.x,
			y: near.y,
			z: near.z,
		},
		stage6: {
			x: position[0],
			y: position[1],
			z: position[2],
		},
	};

	const materialVariants = {
		textureDelay: {
			wireframe: false,
			color: colors.orange,
			transition: {
				delay: 0.5,
			},
		},
		texture: {
			color: colors.orange,
			opacity: 1,
			wireframe: false,
		},
		wire: {
			color: colors.orange,
			opacity: 0.2,
			transitionEnd: {
				wireframe: true,
			},
		},
		none: {
			opacity: 0,
		},
	};

	useEffect(() => {
		switch (stage) {
			case 0:
				boxControls.start("stage0");
				materialControls.start("none");
			case 1:
				boxControls.start("stage1");
				materialControls.start("texture");
				break;
			case 2:
				boxControls.start("stage2");
				materialControls.start("texture");
				break;
			case 3:
				if (position[1] > 0) {
					boxControls.start("far");
					materialControls.start("wire");
				} else {
					boxControls.start("stage3");
					materialControls.start("texture");
				}
				break;
			case 4:
				if (position[1] < 99 || position[1] > 151) {
					boxControls.start("far");
					materialControls.start("wire");
				} else {
					boxControls.start("stage3");
					materialControls.start("texture");
				}
				break;
			case 5:
				if (position[1] < 151) {
					boxControls.start("far");
					materialControls.start("wire");
				} else {
					boxControls.start("stage3");
					materialControls.start("texture");
				}
				break;
			case 6:
				boxControls.start("stage6");
				materialControls.start("texture");
				break;
		}
	}, [stage]);

	return (
		<motion.mesh
			initial="stage1"
			position={position}
			variants={meshVariants}
			animate={boxControls}>
			<boxGeometry args={args} />
			<motion.meshStandardMaterial
				color={colors.orange}
				wireframe={false}
				wireframeLinewidth={10}
				variants={materialVariants}
				animate={materialControls}
				transparent
				opacity={1}
			/>
		</motion.mesh>
		// </AnimatedBox>
	);
}
