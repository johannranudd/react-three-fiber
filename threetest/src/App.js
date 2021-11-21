import './App.scss';
import { Box } from '@chakra-ui/layout';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <>
      <Box w='50%' h='400' background='white'>
        <Canvas>
          <OrbitControls />
          <mesh>
            <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
            <meshStandardMaterial color='hotpink' />
            <directionalLight />
            <ambientLight />
          </mesh>
        </Canvas>
      </Box>
    </>
  );
}

export default App;
