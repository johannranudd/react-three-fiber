import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Sphere = () => {
  const sphereRef = useRef(null);
  useFrame(() => {
    sphereRef.current.rotation.y += 0.003;
  });

  const name = (type) => `./Textures/Rock029_1K_${type}.jpg`;

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      name('Color'),
      // name('Displacement'),
      // name('NormalDX'),
      // name('Roughness'),
      // name('AmbientOcclusion'),
    ]
  );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh ref={sphereRef}>
        <sphereGeometry attach='geometry' args={[1, 100, 100]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={displacementMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
};

export default Sphere;
