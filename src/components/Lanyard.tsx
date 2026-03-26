/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, useGLTF, useTexture } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  type RigidBodyProps,
  useRopeJoint,
  useSphericalJoint,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';
import cardGLB from '../assets/lanyard/card.glb?url';
import cardBackTextureAsset from '../../png/ChatGPT Image 2026年3月24日 19_44_48.png';
import cardFrontTextureAsset from '../../png/ChatGPT Image 2026年3月24日 19_44_33.png';
import lanyardTexture from '../../png/github-lanyard.png';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

interface LanyardProps {
  position?: [number, number, number];
  gravity?: [number, number, number];
  fov?: number;
  transparent?: boolean;
  className?: string;
  interactiveOnMobile?: boolean;
}

interface BandProps {
  maxSpeed?: number;
  minSpeed?: number;
  interactive?: boolean;
  isMobile?: boolean;
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
  className,
  interactiveOnMobile = false,
}: LanyardProps) {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`lanyard-wrapper ${className ?? ''}`.trim()}>
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.1 : 1.8]}
        gl={{ alpha: transparent, antialias: !isMobile }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0xf5f4f1), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Suspense fallback={null}>
          <Physics gravity={gravity} timeStep={isMobile ? 1 / 40 : 1 / 60}>
            <Band interactive={!isMobile || interactiveOnMobile} isMobile={isMobile} />
          </Physics>
          <Environment blur={0.8}>
            <Lightformer
              intensity={2}
              color="#ffffff"
              position={[0, -1, 5]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="#ffffff"
              position={[-1, -1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={3}
              color="#ffffff"
              position={[1, 1, 1]}
              rotation={[0, 0, Math.PI / 3]}
              scale={[100, 0.1, 1]}
            />
            <Lightformer
              intensity={10}
              color="#ffffff"
              position={[-10, 0, 14]}
              rotation={[0, Math.PI / 2, Math.PI / 3]}
              scale={[100, 10, 1]}
            />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 0, interactive = true, isMobile = false }: BandProps) {
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = useMemo(() => new THREE.Vector3(), []);
  const ang = useMemo(() => new THREE.Vector3(), []);
  const rot = useMemo(() => new THREE.Vector3(), []);
  const dir = useMemo(() => new THREE.Vector3(), []);
  const segmentProps = useMemo<RigidBodyProps>(
    () => ({
      type: 'dynamic',
      canSleep: true,
      colliders: false,
      angularDamping: 4,
      linearDamping: 4,
    }),
    [],
  );

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const [frontTexture, backTexture, texture] = useTexture([cardFrontTextureAsset, cardBackTextureAsset, lanyardTexture]);
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]),
    [],
  );
  const lineGeometry = useMemo(() => {
    const geometry = new MeshLineGeometry();
    geometry.setPoints([
      new THREE.Vector3(1.2, 3.96, 0),
      new THREE.Vector3(0.8, 4.42, 0),
      new THREE.Vector3(0.4, 4.84, 0),
      new THREE.Vector3(0, 5.16, 0),
    ]);
    return geometry;
  }, []);
  const [dragged, setDragged] = useState<false | THREE.Vector3>(false);
  const [hovered, setHovered] = useState(false);

  const isFiniteVector = (value: { x: number; y: number; z: number } | undefined | null) =>
    Boolean(value) && Number.isFinite(value.x) && Number.isFinite(value.y) && Number.isFinite(value.z);
  const isFiniteQuaternion = (value: { x: number; y: number; z: number; w: number } | undefined | null) =>
    Boolean(value) && Number.isFinite(value.x) && Number.isFinite(value.y) && Number.isFinite(value.z) && Number.isFinite(value.w);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 0.55]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 0.55]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 0.55]);
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.1, 0]]);

  useEffect(() => {
    frontTexture.colorSpace = THREE.SRGBColorSpace;
    backTexture.colorSpace = THREE.SRGBColorSpace;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.needsUpdate = true;
    frontTexture.needsUpdate = true;
    backTexture.needsUpdate = true;
  }, [backTexture, frontTexture, texture]);

  useEffect(() => () => (lineGeometry as unknown as THREE.BufferGeometry).dispose(), [lineGeometry]);

  useEffect(() => {
    if (!interactive) {
      document.body.style.cursor = 'auto';
      return;
    }

    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }

    document.body.style.cursor = 'auto';
  }, [dragged, hovered, interactive]);

  useFrame((state, delta) => {
    if (interactive && dragged && typeof dragged !== 'boolean') {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (!fixed.current || !j1.current || !j2.current || !j3.current || !card.current) {
      return;
    }

    [j1, j2].forEach((ref) => {
      const translation = ref.current.translation();
      if (!isFiniteVector(translation)) {
        return;
      }

      if (!ref.current.lerped) {
        ref.current.lerped = new THREE.Vector3().copy(translation);
      }

      const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(translation)));
      ref.current.lerped.lerp(
        translation,
        delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
      );
    });

    const fixedTranslation = fixed.current.translation();
    if (!isFiniteVector(fixedTranslation)) {
      return;
    }

    if (!isFiniteVector(j2.current.lerped) || !isFiniteVector(j1.current.lerped)) {
      return;
    }

    const cardTranslation = card.current.translation();
    const cardRotation = card.current.rotation();
    if (!isFiniteVector(cardTranslation) || !isFiniteQuaternion(cardRotation)) {
      return;
    }

    const cardAnchor = new THREE.Vector3(0, 1.08, 0)
      .applyQuaternion(new THREE.Quaternion(cardRotation.x, cardRotation.y, cardRotation.z, cardRotation.w))
      .add(cardTranslation);

    curve.curveType = 'chordal';
    curve.points[0].copy(cardAnchor);
    curve.points[1].copy(j2.current.lerped);
    curve.points[2].copy(j1.current.lerped);
    curve.points[3].copy(fixedTranslation);
    lineGeometry.setPoints(curve.getPoints(isMobile ? 14 : 32));

    const angularVelocity = card.current.angvel();
    if (!isFiniteVector(angularVelocity)) {
      return;
    }

    ang.copy(angularVelocity);
    rot.set(cardRotation.x, cardRotation.y, cardRotation.z);
    card.current.setAngvel({ x: ang.x - rot.x * 0.2, y: ang.y - rot.y * 0.25, z: ang.z - rot.z * 0.2 });
  });

  return (
    <>
      <group position={[0, 5.16, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.34, -0.04, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[0.68, -0.08, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.02, -0.12, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.28, -0.18, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={1.5}
            position={[0, -1.02, -0.05]}
            onPointerOver={interactive ? () => setHovered(true) : undefined}
            onPointerOut={interactive ? () => setHovered(false) : undefined}
            onPointerUp={
              interactive
                ? (event: any) => {
                    event.target.releasePointerCapture(event.pointerId);
                    setDragged(false);
                  }
                : undefined
            }
            onPointerDown={
              interactive
                ? (event: any) => {
                    event.target.setPointerCapture(event.pointerId);
                    setDragged(new THREE.Vector3().copy(event.point).sub(vec.copy(card.current.translation())));
                  }
                : undefined
            }
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                color="#ffffff"
                clearcoat={isMobile ? 0.2 : 1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh position={[0, 0, 0.04]} renderOrder={1}>
              <planeGeometry args={[1.46, 2.2]} />
              <meshBasicMaterial map={frontTexture} toneMapped={false} polygonOffset polygonOffsetFactor={-4} />
            </mesh>
            <mesh position={[0, 0, -0.04]} rotation={[0, Math.PI, 0]} renderOrder={1}>
              <planeGeometry args={[1.46, 2.2]} />
              <meshBasicMaterial map={backTexture} toneMapped={false} polygonOffset polygonOffsetFactor={-4} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>

      <mesh>
        <primitive object={lineGeometry} attach="geometry" />
        <meshLineMaterial
          color="#ffffff"
          depthTest={false}
          resolution={isMobile ? [720, 1280] : [1000, 1000]}
          useMap
          map={texture}
          repeat={[-2.2, 1]}
          lineWidth={isMobile ? 0.56 : 0.74}
        />
      </mesh>
    </>
  );
}

useGLTF.preload(cardGLB);
useTexture.preload(cardFrontTextureAsset);
useTexture.preload(cardBackTextureAsset);
useTexture.preload(lanyardTexture);
