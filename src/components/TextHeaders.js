import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lofi from "./Lofi";

export default function TextHeader() {
  return (
    <div>
        <h1 className="logo">Jackie Nguyen</h1>
        <h5><i>Software Engineer - New York, New York</i></h5>
        <h3>Engineering creative. Building a bridge between technology and user interaction.</h3>
        {/* <Canvas className="canvas">
      <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[-2, 5, 2]} intensity={1}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
        <Lofi scale={[1, 1, 1]}/>
        </Suspense>
      </Canvas> */}
        </div>
  )
}
