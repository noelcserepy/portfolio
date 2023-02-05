import { Canvas } from "@react-three/fiber";
import { Float, MeshWobbleMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import AnimBox from "./animBox";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import { MeshStandardMaterial } from "three";
import BoxGroup from "./boxGroup";

export default function WorkAnim({ hidden }) {
	const [hovered, setHovered] = useState(false);

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

	// const { fd, fl, bs } = useControls({
	// 	fd: { value: 2500, min: 1, max: 5000 },
	// 	fl: { value: 500, min: 1, max: 2000 },
	// 	bs: { value: 6, min: 0, max: 20 },
	// });

	return (
		<div className={`fixed top-0 left-0 h-full w-full ${hidden && "hidden"}`}>
			<Canvas
				orthographic
				camera={{ position: [0, 400, 2500], far: 5000, zoom: 1 }}>
				<Perf style={{ top: "100px", right: "100px" }} />
				<ambientLight intensity={0.15} />
				<pointLight intensity={0.75} position={[500, 500, 1000]} />
				<pointLight intensity={2} position={[100, 100, 0]} />

				<BoxGroup />

				{/* <OrbitControls /> */}
				<EffectComposer>
					<Bloom mipmapBlur />
					<DepthOfField focusDistance={50} focalLength={300} bokehScale={4} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
