import { useEffect, useState } from "react";
import AnimBox from "./animBox";
import { motion } from "framer-motion-3d";
import {
	useAnimationControls,
	useMotionValue,
	useSpring,
	useTransform,
} from "framer-motion";
import { TextureLoader } from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { BBAnchor } from "@react-three/drei";
import useMediaQuery from "../../hooks/useMediaQuery";

const boxVariants = {
	stage0: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0,
		rotateY: 0,
	},
	stage1: {
		x: 0,
		y: 0,
		z: 0,
		rotateX: 0,
		rotateY: 0,
	},
	stage2: {
		x: 50,
		y: 50,
		z: 0,
		rotateX: 0.2,
		rotateY: -0.3,
	},
	stage5: {
		x: 50,
		y: 50,
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
	const noelTexture = useLoader(TextureLoader, "/img/noel_portrait.png");
	const boxControls = useAnimationControls();
	const imageControls = useAnimationControls();
	const { viewport } = useThree();
	const scaleFactor = useMotionValue(1);
	const smoothScaleFactor = useSpring(scaleFactor, {
		stiffness: 100,
		damping: 10,
		mass: 0.1,
	});

	const setScaleFactor = objectScale => {
		if (viewport.width > 1920) {
			scaleFactor.set(objectScale * 2.5);
		}
		if (viewport.width > 1280 && viewport.width < 1920) {
			scaleFactor.set(objectScale * 2.5);
		}
		if (viewport.width > 768 && viewport.width < 1280) {
			scaleFactor.set(objectScale * 1.5);
		}
		if (viewport.width < 768) {
			scaleFactor.set(objectScale * 1);
		}
		if (viewport.width < 500) {
			scaleFactor.set(objectScale * 0.7);
		}
	};

	useEffect(() => {
		const switchStage = async () => {
			switch (stage) {
				case 0:
					setScaleFactor(1);
					boxControls.start("stage0");
					return;
				case 1:
					boxControls.start("stage1");
					setScaleFactor(1);
					imageControls.start({
						opacity: 1,
						transition: {
							delay: 0.5,
						},
					});
					return;
				case 2:
					await boxControls.start("stage2");
					setScaleFactor(0.6);
					imageControls.start({
						opacity: 0,
					});
					return;
				case 5:
					boxControls.start("stage5");
					setScaleFactor(0.6);
					return;
				case 6:
					boxControls.start("stage6");
					setScaleFactor(1);
					return;
			}
		};
		switchStage();
	}, [stage, boxControls, imageControls, viewport.width]);

	return (
		<BBAnchor position={[0.5, 0.5, 0.5]}>
			<motion.group
				scale={smoothScaleFactor}
				initial="stage0"
				variants={boxVariants}
				animate={boxControls}>
				{boxes.map((box, i) => (
					<AnimBox
						key={i}
						args={box.args}
						position={box.position}
						stage={stage}
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
		</BBAnchor>
	);
}
