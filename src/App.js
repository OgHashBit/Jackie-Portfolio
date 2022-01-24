import React, {Suspense, useRef} from 'react';
import styled from "styled-components";
import HeroBackground from './components/Background';
import TextSection from './components/TextSection';
import Box from './components/Box';
import {Canvas} from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import AnimatedSphere from './components/AnimatedSphere';
import Lofi from './components/Lofi';
import { Camera } from 'three';

function App() {

  return (
    <div>
      {/* <HeroBackground/> */}
      <div className="canvas-container">
      <Canvas className="canvas">
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <spotLight position={[-2, 5, 2]} intensity={1}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
        <AnimatedSphere/>
        </Suspense>
      </Canvas>
      </div>
      <TextSection/>
      {/* <Canvas className="canvas">
      <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity={1}/>
        <Suspense fallback={null}>
        <Box/>
        </Suspense>
      </Canvas> */}


    </div>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  canvas {
    height: 500px;
    ${'' /* background: red; */}
  }

`;
