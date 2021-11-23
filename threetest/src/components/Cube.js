import React from 'react';
import { useBox } from '@react-three/cannon';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';

const Cube = () => {
  // const [ref] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 30, 0],
  //   rotation: [45, 0, 0],
  // }));

  const reference = useRef(null);
  useFrame(
    () => (reference.current.rotation.x = reference.current.rotation.y += 0.01)
  );

  return (
    <mesh ref={reference}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial attach='material' color='pink' />
    </mesh>
  );
};

export default Cube;
