import React from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import {
  WebGLCubeRenderTarget,
  RGBFormat,
  LinearMipMapLinearFilter,
  CubeCamera,
} from 'three';

const Sphere = () => {
  const { gl, scene } = useThree();
  const cubeRenderTarget = new WebGLCubeRenderTarget(512, {
    format: RGBFormat,
    generateMipmaps: true,
    minFilter: LinearMipMapLinearFilter,
  });
  const cubeCamera = new CubeCamera(1, 100, cubeRenderTarget);
  cubeCamera.position.set(0, 0, 0);
  scene.add(cubeCamera);

  useFrame(() => cubeCamera.update(gl, scene));

  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
      <sphereGeometry attach='geometry' args={[2, 100, 100]} />
      <meshLambertMaterial
        attach='material'
        envMap={cubeCamera.renderTarget.texture}
        color='white'
        roughtness={0.1}
        metalness={1}
      />
    </mesh>
  );
};

export default Sphere;
