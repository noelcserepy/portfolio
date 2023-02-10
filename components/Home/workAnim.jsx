import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";
import {
	Bounds,
	Box,
	OrthographicCamera,
	Plane,
	Sphere,
	Stage,
} from "@react-three/drei";

export default function WorkAnim({ stage = 0, isMobile = true }) {
	return (
		<Canvas>
			{/* <OrthographicCamera makeDefault position={[0, 0, 2000]} zoom={1} /> */}
			{/* <Perf /> */}
			{/* <ambientLight intensity={0.75} /> */}
			{/* <pointLight intensity={0.45} position={[2000, 3000, 1000]} /> */}
			<Stage adjustCamera={false} preset={"upfront"}>
				<OrthographicCamera
					makeDefault
					position={[0, 0, 2000]}
					zoom={1}
					far={5000}
				/>
				<BoxGroup stage={stage} isMobile={isMobile} />
				<Bounds fit clip observe margin={1.2}>
					<Plane
						args={[750, 750]}
						position={[100, 100, -500]}
						rotation={[0.2, -0.3, 0]}>
						<meshBasicMaterial transparent opacity={0} />
					</Plane>
				</Bounds>
			</Stage>
		</Canvas>
	);
}
