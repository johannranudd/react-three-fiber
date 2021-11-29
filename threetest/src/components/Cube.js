import React, { useState, useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useSpring } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { position, transition } from '@chakra-ui/styled-system';

const Cube = ({ position, color }) => {
  // const [ref] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 30, 0],
  //   rotation: [45, 0, 0],
  // }));

  // spin
  // useFrame(
  //   () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  // );
  // bobing
  const meshRef = useRef();
  const [closing, setClosing] = useState();
  const props = useSpring({
    scale: closing ? [2, 2, 2] : [1, 1, 1],
  });

  return (
    <mesh
      castShadow
      ref={meshRef}
      onClick={() => setClosing(!closing)}
      scale={props.scale}
    >
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  );
};

export default Cube;
