import { Grid } from '@chakra-ui/layout';
import { Canvas } from '@react-three/fiber';
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
// import { useRef } from 'react';

// softShadows({
//   // frustum: 3.75,
//   // size: 0.0005,
//   // near: 9.5,
//   // samples: 17,
//   // rings: 11,
// });
function App() {
  return (
    <>
      <Canvas
        shadows
        colorManagement
        camera={{ position: [0, 5, 15], fov: 50 }}
      >
        {/* controls */}
        <OrbitControls />
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
