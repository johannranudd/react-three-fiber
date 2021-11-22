import { Grid } from '@chakra-ui/layout';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// testing in terminal

function App() {
  return (
    <>
      <Grid w='100%' h='100vh' background='white'>
        <Canvas>
          <OrbitControls />
          <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshStandardMaterial color='hotpink' />
            <directionalLight />
            <ambientLight />
          </mesh>
          <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 2]} />
            <meshStandardMaterial color='blue' />
            <directionalLight />
            <ambientLight />
          </mesh>
        </Canvas>
      </Grid>
    </>
  );
}

export default App;
