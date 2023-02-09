import { Canvas, extend, useFrame } from "@react-three/fiber";

import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";
import { OrbitControls } from "@react-three/drei";
import { LayoutOrthographicCamera, MotionCanvas } from "framer-motion-3d";
import { PointLight, AmbientLight } from "three";
import { useControls } from "leva";
import { useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
extend({ PointLight, AmbientLight });
const camVariants = {
	stage0: {
		x: 120,
		y: 0,
		z: 2500,
		zoom: 1,
	},
	stage1: {
		x: 120,
		y: 0,
		z: 2500,
		zoom: 1,
	},
	stage2: {
		x: 600,
		y: 600,
		z: 2500,
		zoom: 1,
	},
};
export default function CubeScene({ stage }) {
	const controls = useAnimationControls();
	const boxRef = useRef(null);
	const camRef = useRef(null);

	const { camX, camY, camZ, camZoom } = useControls({
		camX: { value: 600, min: 0, max: 1000 },
		camY: { value: 600, min: 0, max: 1000 },
		camZ: { value: 2500, min: 0, max: 10000 },
		camZoom: { value: 1, min: 0, max: 10 },
	});

	useEffect(() => {
		console.log("stage: ", stage);
		switch (stage) {
			case 0:
				controls.start("stage0");
			case 1:
				controls.start("stage1");
			case 2:
				controls.start("stage2");
		}
	}, [stage]);

	return (
		<>
			<LayoutOrthographicCamera
				ref={camRef}
				// initial="stage0"
				// variants={camVariants}
				// animate={controls}
				position={[camX, camY, camZ]}
				far={5000}
				lookAt={boxRef.current?.position}
			/>
			{/* <Perf style={{ top: "100px", right: "100px" }} /> */}
			<ambientLight intensity={0.15} />
			<pointLight intensity={0.45} position={[2000, 3000, 1000]} />
			<pointLight intensity={1} position={[100, 100, 0]} />

			<BoxGroup ref={boxRef} stage={stage} />

			{/* <OrbitControls /> */}
		</>
	);
}
