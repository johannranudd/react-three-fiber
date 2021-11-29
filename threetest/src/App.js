import React from 'react';
import { Grid, Box } from '@chakra-ui/layout';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
// import Sphere from './components/Sphere';
import Cube from './components/Cube';
import Plane from './components/Plane';
import { Physics } from '@react-three/cannon';
// import SkyBox from './components/SkyBox';

function App() {
  return (
    <>
      <Box h='100vh' w='100%'>
        <Canvas>
          {/* lights */}
          <pointLight intensity={0.3} position={[10, 0, 0]} />
          <pointLight intensity={0.3} position={[0, 0, 10]} />
          <pointLight intensity={0.3} position={[0, 0, 0]} />
          <directionalLight intensity={1} position={[100, 100, 100]} />
          {/* objects */}
          <OrbitControls />
          <Cube />
          <Plane />
        </Canvas>
      </Box>
    </>
  );
}

export default App;
