import { Canvas } from "@react-three/fiber";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
	Outline,
} from "@react-three/postprocessing";
import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";

export default function WorkAnim({ stage = 0 }) {
	return (
		<div className={`fixed top-0 left-0 z-0 h-full w-full`}>
			<Canvas
				orthographic
				camera={{
					position: [600, 600, 2500],
					far: 5000,
					zoom: 1,
				}}>
				{/* <Perf style={{ top: "100px", right: "100px" }} /> */}
				<ambientLight intensity={0.15} />
				<pointLight intensity={0.45} position={[2000, 3000, 1000]} />
				<pointLight intensity={1} position={[100, 100, 0]} />

				<BoxGroup stage={stage} />

				{/* <OrbitControls /> */}
				{/* <EffectComposer>
					<Outline edgeStrength={10} visibleEdgeColor={"black"} />
					<Bloom mipmapBlur />
					<DepthOfField focusDistance={50} focalLength={500} bokehScale={13} />
				</EffectComposer> */}
			</Canvas>
		</div>
	);
}
