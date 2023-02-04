import { Canvas } from "@react-three/fiber";
import {
	Box,
	Float,
	OrbitControls,
	OrthographicCamera,
} from "@react-three/drei";
import { useSpring, animated, config, easings } from "@react-spring/three";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import AnimBox from "./animBox";

const AnimatedBox = animated(Box);

const colors = {
	white: "#FFFFFF",
	background: "#EAEEF5",
	lowContrastBlue: "#D4DBE8",
	lowContrastOrange: "#ECDED4",
	primary: "#0D1823",
	secondary: "#556883",
	orange: "#BF4D00",
};

export default function WorkAnim() {
	const [hovered, setHovered] = useState(false);

	const boxes = [
		{ args: [100, 100, 300], position: [0, 0, 0] },
		{ args: [200, 100, 100], position: [50, 100, 100] },
		{ args: [100, 100, 100], position: [100, 100, 0] },
		{ args: [100, 200, 100], position: [0, 150, 0] },
		{ args: [100, 100, 200], position: [100, 0, -50] },
		{ args: [100, 300, 100], position: [200, 100, -100] },
		{ args: [100, 100, 100], position: [100, 0, 100] },
		{ args: [100, 100, 200], position: [200, 0, 50] },
		{ args: [100, 100, 300], position: [100, 200, 0] },
		{ args: [100, 100, 100], position: [0, 200, 100] },
		{ args: [100, 100, 100], position: [200, 200, 0] },
		{ args: [100, 100, 100], position: [200, 100, 0] },
		{ args: [100, 200, 100], position: [200, 150, 100] },
		{ args: [100, 100, 100], position: [0, 200, -100] },
		{ args: [200, 100, 100], position: [50, 100, -100] },
	];

	return (
		<div className="h-96 w-full">
			<Canvas>
				<ambientLight intensity={0.25} />
				<pointLight intensity={0.75} position={[500, 500, 1000]} />

				<Float>
					<group
						onPointerEnter={() => setHovered(true)}
						onPointerLeave={() => setHovered(false)}>
						{boxes.map((box, i) => (
							<AnimBox
								key={i}
								hovered={hovered}
								args={box.args}
								position={box.position}
							/>
						))}
						{/* <AnimatedBox args={[100, 100, 300]} position={[0, 0, 0]}>
							<meshStandardMaterial color={colors.primary} />
						</AnimatedBox>
						<Box args={[200, 100, 100]} position={[50, 100, 100]}>
							<meshStandardMaterial color={colors.secondary} />
						</Box>
						<Box args={[100, 100, 100]} position={[100, 100, 0]}>
							<meshStandardMaterial color={colors.orange} />
						</Box>
						<Box args={[100, 200, 100]} position={[0, 150, 0]}>
							<meshStandardMaterial color={colors.orange} />
						</Box>
						<Box args={[100, 100, 200]} position={[100, 0, -50]}>
							<meshStandardMaterial color={colors.secondary} />
						</Box>
						<Box args={[100, 300, 100]} position={[200, 100, -100]}>
							<meshStandardMaterial color={colors.orange} />
						</Box>
						<Box args={[100, 100, 100]} position={[100, 0, 100]}>
							<meshStandardMaterial color={colors.primary} />
						</Box>
						<Box args={[100, 100, 200]} position={[200, 0, 50]}>
							<meshStandardMaterial color={colors.secondary} />
						</Box>
						<Box args={[100, 100, 300]} position={[100, 200, 0]}>
							<meshStandardMaterial color={colors.primary} />
						</Box>
						<Box args={[100, 100, 100]} position={[0, 200, 100]}>
							<meshStandardMaterial color={colors.orange} />
						</Box>
						<Box args={[100, 100, 100]} position={[200, 200, 0]}>
							<meshStandardMaterial color={colors.secondary} />
						</Box>
						<Box args={[100, 100, 100]} position={[200, 100, 0]}>
							<meshStandardMaterial color={colors.primary} />
						</Box>
						<Box args={[100, 200, 100]} position={[200, 150, 100]}>
							<meshStandardMaterial color={colors.primary} />
						</Box>
						<Box args={[100, 100, 100]} position={[0, 200, -100]}>
							<meshStandardMaterial color={colors.primary} />
						</Box>
						<Box args={[200, 100, 100]} position={[50, 100, -100]}>
							<meshStandardMaterial color={colors.secondary} />
						</Box> */}
					</group>
				</Float>

				<OrbitControls />

				<OrthographicCamera
					makeDefault
					zoom={1}
					top={200}
					bottom={-200}
					left={200}
					right={-200}
					near={1}
					far={10000}
					position={[400, 200, 1200]}
				/>
			</Canvas>
		</div>
	);
}
