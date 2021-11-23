import React from 'react';

const Sphere = () => {
  return (
    <mesh>
      <sphereBufferGeometry attach='geometry' args={[1, 100, 100]} />
      <meshLambertMaterial attach='material' color='pink' />
    </mesh>
  );
};

export default Sphere;
