import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Sphere = () => {
  const sphereRef = useRef(null);
  useFrame(() => {
    sphereRef.current.rotation.y += 0.003;
  });
  return (
    <mesh ref={sphereRef} position={[0, 0, 0]} castShadow>
      <sphereGeometry attach='geometry' args={[2, 1, 1]} />
      <meshLambertMaterial attach='material' color='white' />
    </mesh>
  );
};

export default Sphere;
