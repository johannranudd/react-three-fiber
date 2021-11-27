import React from 'react';
import { useThree } from '@react-three/fiber';

const Sphere = () => {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach='geometry' args={[2, 100, 100]} />
      <meshLambertMaterial
        attach='material'
        color='white'
        roughtness={0.1}
        metalness={1}
      />
    </mesh>
  );
};

export default Sphere;
