/* eslint-disable @typescript-eslint/no-explicit-any */
import useKTX2 from '@/componentsforThree/UseKTX2';
import { CompressedTexture } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useGLTF } from '@react-three/drei';

type Props = {
  pos?: Array<number>;
};

type GLTFResult = GLTF & {
  nodes: any;
};

const Model = ({ pos = [0.071, -0.41, -1.642] }: Props) => {
  const { nodes } = useGLTF('/part1/part1.glb') as GLTFResult;
  const [diffuseMaterial, normalMaterial] = useKTX2([
    '/part1/Part1_Diffuse.ktx2',
    '/part1/Part1_Normal.ktx2',
  ]) as CompressedTexture[];
  return (
    <group
      dispose={null}
      position={[pos[0], pos[1], pos[2]]}
      rotation={[0, Math.PI / 2, 0]}
    >
      <mesh
        geometry={nodes.Object001.geometry}
        rotation={[0, 0, 0]}
        scale={0.00173}
      >
        <meshStandardMaterial
          map={diffuseMaterial}
          normalMap={normalMaterial}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
};

export default Model;
