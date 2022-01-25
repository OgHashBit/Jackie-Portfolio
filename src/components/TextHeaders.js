import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lofi from "./Lofi";

export default function TextHeader() {
  return (
    <div className="header">
    <div className="leftHalf">
      <h1>Jackie Nguyen</h1>
      <h5><i>Software Engineer - New York, New York</i></h5>
      <h3>Engineering creative. Building a bridge between technology and user interaction.</h3>
      </div>
      <Canvas className="rightHalf">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Lofi />
        </Suspense>
      </Canvas>

    </div>
  )
}
