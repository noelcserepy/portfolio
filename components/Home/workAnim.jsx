import { Canvas } from "@react-three/fiber";
import {
	Bloom,
	DepthOfField,
	EffectComposer,
	Outline,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import BoxGroup from "./boxGroup";

export default function WorkAnim({}) {
	// const { fd, fl, bs } = useControls({
	// 	fd: { value: 50, min: 1, max: 5000, step: 10 },
	// 	fl: { value: 500, min: 1, max: 2000, step: 50 },
	// 	bs: { value: 13, min: 0, max: 20, step: 1 },
	// });

	return (
		<div className={`fixed top-0 left-0 h-full w-full`}>
			<Canvas
				orthographic
				camera={{
					position: [600, 600, 2500],
					far: 5000,
					zoom: 1,
				}}>
				<Perf style={{ top: "100px", right: "100px" }} />
				<ambientLight intensity={0.15} />
				<pointLight intensity={0.75} position={[500, 500, 1000]} />
				<pointLight intensity={2} position={[100, 100, 0]} />

				<BoxGroup />

				{/* <OrbitControls /> */}
				<EffectComposer>
					<Outline
						edgeStrength={100}
						visibleEdgeColor={"black"}
						hiddenEdgeColor={"black"}
						blur={0}
						opacity={1}
						blendFunction={BlendFunction.SCREEN}
					/>
					<Bloom mipmapBlur />
					<DepthOfField focusDistance={50} focalLength={500} bokehScale={13} />
				</EffectComposer>
			</Canvas>
		</div>
	);
}
