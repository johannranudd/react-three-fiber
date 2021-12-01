import React, { Suspense } from 'react';
import { Box } from '@chakra-ui/layout';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Sphere from './components/Sphere';
// import Mars from './components/Mars';

function App() {
  return (
    <>
      <Box h='100vh' w='100%'>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <OrbitControls />
            {/* objects */}
            <Stars />
            <Sphere />
          </Suspense>
        </Canvas>
      </Box>
    </>
  );
}

export default App;
