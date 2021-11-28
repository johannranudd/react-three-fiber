import { Grid } from '@chakra-ui/layout';
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  softShadows,
  TrackballControls,
} from '@react-three/drei';
import Sphere from './components/Sphere';
import Cube from './components/Cube';
// import Plane from './components/Plane';
import { Physics } from '@react-three/cannon';
import SkyBox from './components/SkyBox';
import React, { useRef } from 'react';

extend({ OrbitControls });

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();

  useFrame(() => controls.current.update());
  return (
    <OrbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
      autoRotateSpeed={0.7}
    />
  );
};

function App() {
  return (
    <>
      <Canvas shadows colorManagement camera={{ position: [0, 0, 0], fov: 30 }}>
        {/* controls */}
        {/* <OrbitControls /> */}
        <CameraControls />
        {/* <TrackballControls /> */}
        {/* lighting and camera */}
        {/* <spotLight castShadow position={[10, 15, 10]} angle={0.3} /> */}
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        {/* objects */}
        {/* <Stars /> */}
        <SkyBox />
        <Physics>
          {/* <Cube position={[-1.5, 2, 0]} color='pink' />
            <Cube position={[0, 0, 0]} color='lightgreen' />
            <Cube position={[1.5, 2, 0]} color='#b00b69' /> */}
          <Sphere />
          {/* <Plane /> */}
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
