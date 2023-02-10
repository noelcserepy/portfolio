import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";
import { OrthographicCamera } from "@react-three/drei";

export default function WorkAnim({ stage = 0 }) {
	return (
		<Canvas>
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
			{/* <Perf /> */}
			<ambientLight intensity={0.75} />
			<pointLight intensity={0.45} position={[2000, 3000, 1000]} />
			{/* <pointLight intensity={1} position={[100, 100, 0]} /> */}
			<BoxGroup stage={stage} />
		</Canvas>
	);
}
