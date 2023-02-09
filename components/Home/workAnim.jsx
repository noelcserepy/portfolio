import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";
import { OrthographicCamera } from "@react-three/drei";

export default function WorkAnim({ stage = 0 }) {
	return (
		<Canvas
		// orthographic
		// camera={{
		// 	far: 5000,
		// 	near: 0.1,
		// 	zoom: 1.5,
		// 	position: [3000, 0, 2500],
		// left: 0,
		// right: 5000,
		// top: 5000,
		// bottom: 0,
		// }}
		>
			<OrthographicCamera
				makeDefault
				position={[350, 0, 2000]}
				far={5000}
				zoom={1}
				top={2500}
				bottom={0}
				left={-1000}
				right={2500}
			/>
			{/* <Perf style={{ top: "100px", right: "100px" }} /> */}
			<ambientLight intensity={0.75} />
			<pointLight intensity={0.45} position={[2000, 3000, 1000]} />
			{/* <pointLight intensity={1} position={[100, 100, 0]} /> */}
			<BoxGroup stage={stage} />
		</Canvas>
	);
}
