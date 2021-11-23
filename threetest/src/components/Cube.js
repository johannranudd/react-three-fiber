import React from 'react';
import { useBox } from '@react-three/cannon';

const Cube = () => {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));
  return (
    <mesh ref={ref} position={[0, 1, 0]}>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshLambertMaterial attach='material' color='pink' />
    </mesh>
  );
};

export default Cube;
