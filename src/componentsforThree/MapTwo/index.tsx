/* eslint-disable @typescript-eslint/no-explicit-any */
import useKTX2 from '@/componentsforThree/UseKTX2';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { CompressedTexture } from 'three';
import { useGLTF } from '@react-three/drei';

type Props = {
  pos?: Array<number>;
};

type GLTFResult = GLTF & {
  nodes: any;
  materials: any;
};

const MapTwo = ({ pos = [0.071, -0.41, -1.642] }: Props) => {
  const { nodes } = useGLTF('/part2/part2.glb') as GLTFResult;
  const [diffuseMaterial, roughnessMaterial, normalMaterial] = useKTX2([
    '/part2/Part2_diffuse.ktx2',
    '/part2/Part2_roughness.ktx2',
    '/part2/Part2_normal.ktx2',
  ]) as CompressedTexture[];
  return (
    <group
      dispose={null}
      position={[pos[0], pos[1], pos[2]]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.0001}
    >
      <mesh
        geometry={nodes.object.geometry}
        rotation={[0, 0, 0]}
        scale={0.00173}
      >
        <meshStandardMaterial
          map={diffuseMaterial}
          roughnessMap={roughnessMaterial}
          normalMap={normalMaterial}
          roughness={1}
        />
      </mesh>
    </group>
  );
};

export default MapTwo;
