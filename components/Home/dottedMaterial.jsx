import { Box, MeshWobbleMaterial, shaderMaterial } from "@react-three/drei";
import { ToonShaderDotted } from "three/examples/jsm/shaders/ToonShader.js";
import { extend } from "@react-three/fiber";
import { Color, Vector3 } from "three";

const DottedMaterial = shaderMaterial(
	ToonShaderDotted.uniforms,
	ToonShaderDotted.vertexShader,
	ToonShaderDotted.fragmentShader
);

extend({ DottedMaterial });
console.log(DottedMaterial);

// <dottedMaterial
// 	uDirLightPos={new Vector3(600, 600, 2500)}
// 	uDirLightColor={new Color("#EAEEF5")}
// 	uAmbientLightColor={new Color("#EAEEF5")}
// 	uBaseColor={new Color("#BF4D00")}
// 	uLineColor1={new Color("#000000")}
// />
