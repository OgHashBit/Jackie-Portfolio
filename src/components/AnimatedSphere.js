import React from "react";
import { Sphere, MeshDistortMaterial, OrbitControls, Stars, Plane } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Box2, MeshPhysicalMaterial } from "three";

export default function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 200, 300]} scale={1}>
      <MeshDistortMaterial
        color="#7A0BC0"
        attach="material"
        distort={2}
        speed={3}
        roughness={0.5}
      />
    </Sphere>
    // <Canvas>
    //   <OrbitControls/>
    //   <Stars/>
    //   <ambientLight intensity={0.5}/>
    //   <spotLight position={[10, 15, 10]} angle={0.3} />
    //   <MeshPhysicalMaterial/>
    //   <Box2/>
    //   <Plane/>
    // </Canvas>
  )
}
