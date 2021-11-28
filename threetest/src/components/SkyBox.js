import React from 'react';
import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

const SkyBox = () => {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  const texture = loader.load([
    './images/6.jpg',
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
  ]);
  scene.background = texture;
  return null;
};

export default SkyBox;
