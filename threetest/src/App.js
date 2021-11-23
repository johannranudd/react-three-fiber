import { Grid } from '@chakra-ui/layout';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Sphere from './components/Sphere';
import Cube from './components/Cube';
import Plane from './components/Plane';
import { Physics, useBox } from '@react-three/cannon';

function App() {
  return (
    <>
      <Grid w='100%' h='100vh'>
        <Canvas>
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
            <Cube />
            <Plane />
          </Physics>
        </Canvas>
      </Grid>
    </>
  );
}

export default App;
