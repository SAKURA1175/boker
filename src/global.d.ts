/// <reference types="vite/client" />

export {};

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

declare module 'meshline' {
  import type { BufferGeometry, Material } from 'three';

  export class MeshLineGeometry extends BufferGeometry {
    setPoints(points: unknown): void;
  }

  export class MeshLineMaterial extends Material {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}
