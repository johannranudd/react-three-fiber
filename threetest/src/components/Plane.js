import React from 'react';
import { usePlane } from '@react-three/cannon';

const Plane = () => {
  // const [ref] = usePlane(() => ({
  //   rotation: [Math.PI * -0.5, 0, 0],
  // }));
  return (
    <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      {/* <shadowMaterial attach='material' opacity={0.1} /> */}
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  );
};

export default Plane;
