import React from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import { position } from '@chakra-ui/styled-system';

const Cube = ({ position }) => {
  // const [ref] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 30, 0],
  //   rotation: [45, 0, 0],
  // }));

  const meshRef = useRef(null);
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  return (
    <mesh ref={meshRef} position={position}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial attach='material' color='pink' />
    </mesh>
  );
};

export default Cube;
