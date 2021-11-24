import React, { useState, useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { position, transition } from '@chakra-ui/styled-system';

const Cube = ({ position, color }) => {
  // const [ref] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 30, 0],
  //   rotation: [45, 0, 0],
  // }));
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const meshRef = useRef(null);
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );

  return (
    <mesh
      castShadow
      ref={meshRef}
      position={position}
      scale={clicked ? 1.3 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial
        attach='material'
        color={hovered ? 'darkblue' : color}
      />
    </mesh>
  );
};

export default Cube;
