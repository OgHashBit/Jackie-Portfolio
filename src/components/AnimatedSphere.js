import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 200, 300]} scale={0.5}>
      <MeshDistortMaterial
        color="#7A0BC0"
        attach="material"
        distort={5}
        speed={3}
        roughness={0.5}
      />
    </Sphere>
  )
}
