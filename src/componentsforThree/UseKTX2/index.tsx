/* eslint-disable @typescript-eslint/no-explicit-any */
import { KTX2Loader } from 'three/addons';
import { useLoader, useThree } from '@react-three/fiber';
export default function useKTX2(url: string[] | string) {
  const gl = useThree((state) => state.gl);
  return useLoader(KTX2Loader, url, (loader) => {
    loader.detectSupport(gl);
    loader.setTranscoderPath(
      'https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/basis/',
    );
  });
}
