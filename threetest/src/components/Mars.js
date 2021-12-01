import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Mars = () => {
  const colorMap = useLoader(TextureLoader, './Textures/Rock029_1K_Color.jpg');

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[1, 100, 100]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  );
};

export default Mars;
