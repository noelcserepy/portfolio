import { Float } from "@react-three/drei";
import { useState } from "react";
import AnimBox from "./animBox";

export default function BoxGroup() {
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

	return (
		<Float floatIntensity={2} speed={2} floatingRange={[-0.5, 0.5]}>
			<group
				position={[150, -100, 0]}
				onPointerEnter={() => setHovered(true)}
				onPointerLeave={() => setHovered(false)}>
				{boxes.map((box, i) => (
					<AnimBox
						key={i}
						hovered={hovered}
						args={box.args}
						position={box.position}
						isCenter={box.isCenter}
					/>
				))}
			</group>
		</Float>
	);
}
