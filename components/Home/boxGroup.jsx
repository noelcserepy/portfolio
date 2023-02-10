import { useEffect, useState } from "react";
import AnimBox from "./animBox";
import { motion } from "framer-motion-3d";
import { useAnimationControls } from "framer-motion";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";

const boxVariants = {
	stage0: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0.035,
		rotateY: 0,
	},
	stage1: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0.035,
		rotateY: -0.038,
	},
	stage2: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0.2,
		rotateY: -0.3,
	},
	stage6: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0.2,
		rotateY: -0.3,
	},
};

const boxes = [
	{ args: [100, 100, 100], position: [100, 100, 0], isCenter: true }, // center cube
	{ args: [100, 100, 300], position: [0, 0, 0], isCenter: false },
	{ args: [200, 100, 100], position: [50, 100, 100], isCenter: false },
	{ args: [100, 200, 100], position: [0, 150, 0], isCenter: false },
	{ args: [100, 100, 200], position: [100, 0, -50], isCenter: false },
	{ args: [100, 300, 100], position: [200, 100, -100], isCenter: false },
	{ args: [100, 100, 100], position: [100, 0, 100], isCenter: false },
	{ args: [100, 100, 200], position: [200, 0, 50], isCenter: false },
	{ args: [100, 100, 300], position: [100, 200, 0], isCenter: false },
	{ args: [100, 100, 100], position: [0, 200, 100], isCenter: false },
	{ args: [100, 100, 100], position: [200, 200, 0], isCenter: false },
	{ args: [100, 100, 100], position: [200, 100, 0], isCenter: false },
	{ args: [100, 200, 100], position: [200, 150, 100], isCenter: false },
	{ args: [100, 100, 100], position: [0, 200, -100], isCenter: false },
	{ args: [200, 100, 100], position: [50, 100, -100], isCenter: false },
];

export default function BoxGroup({ stage }) {
	const [hovered, setHovered] = useState(false);
	const boxControls = useAnimationControls();
	const imageControls = useAnimationControls();

	const noelTexture = useLoader(TextureLoader, "/img/noel_portrait.png");

	useEffect(() => {
		console.log("stage: ", stage);
		switch (stage) {
			case 0:
				boxControls.start("stage0");
				return;
			case 1:
				boxControls.start("stage1");
				imageControls.start({
					opacity: 1,
					transition: {
						delay: 0.5,
					},
				});
				return;
			case 2:
				boxControls.start("stage2");
				imageControls.start({
					opacity: 0,
				});
				return;
			case 6:
				boxControls.start("stage6");
				return;
		}
	}, [stage, boxControls, imageControls]);

	return (
		<motion.group
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
			initial="stage0"
			variants={boxVariants}
			animate={boxControls}>
			{boxes.map((box, i) => (
				<AnimBox
					key={i}
					index={i}
					stage={stage}
					hovered={hovered}
					args={box.args}
					position={box.position}
					isCenter={box.isCenter}
				/>
			))}
			<mesh position={[100, 100, 151]}>
				<planeGeometry args={[300, 300]} />
				<motion.meshBasicMaterial
					map={noelTexture}
					transparent
					opacity={1}
					animate={imageControls}
					toneMapped={false}
				/>
			</mesh>
		</motion.group>
	);
}
