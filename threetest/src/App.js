import { Grid } from '@chakra-ui/layout';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Sphere from './components/Sphere';
import Cube from './components/Cube';
import Plane from './components/Plane';
import { Physics, useBox } from '@react-three/cannon';
import { useRef } from 'react';

function App() {
  // const reference = useRef(null);

  return (
    <>
      <Grid w='100%' h='100vh'>
        <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
          {/* controls */}
          <OrbitControls />
          {/* lighting and camera */}
          {/* <directionalLight position={[0, 0, 5]} /> */}
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <ambientLight intensity={0.5} />
          {/* objects */}
          <Stars />
          {/* <Sphere /> */}
          <Physics>
            <Cube position={[1, 1, 2]} />
            <Cube position={[0, 2, 1]} />
            <Cube position={[2, 2, 3]} />
            <Plane />
          </Physics>
        </Canvas>
      </Grid>
    </>
  );
}

export default App;
