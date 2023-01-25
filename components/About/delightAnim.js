import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function DelightAnim() {
	return (
		<div className="w-full h-full">
			<Canvas>
				<ambientLight intensity={0.1} />
				<pointLight position={[10, 10, 10]} color="red" />
				<MyMesh />
			</Canvas>
		</div>
	);
}

const MyMesh = () => {
	const meshRef = useRef();

	useFrame(() => {
		// meshRef.current.rotation.x += 0.01;
		// meshRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={meshRef}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color="hotpink" />
		</mesh>
	);
};

const Torus = () => {
	const meshRef = useRef();

	useFrame(() => {
		meshRef.current.rotation.x += 0.01;
		meshRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={meshRef}>
			<torusGeometry args={[2, 0.5, 16, 100]} />
			<meshStandardMaterial color="hotpink" />
		</mesh>
	);
};
