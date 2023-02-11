import { Canvas } from "@react-three/fiber";
import BoxGroup from "./boxGroup";
import { OrthographicCamera } from "@react-three/drei";

export default function WorkAnim({ stage = 0, isMobile = true }) {
	return (
		<Canvas>
			<OrthographicCamera
				makeDefault
				position={[100, 100, 2000]}
				zoom={1}
				near={0.1}
				far={5000}
			/>

			<ambientLight intensity={0.15} />
			<pointLight intensity={0.45} position={[2000, 3000, 1000]} />
			<BoxGroup stage={stage} isMobile={isMobile} />
		</Canvas>
	);
}
