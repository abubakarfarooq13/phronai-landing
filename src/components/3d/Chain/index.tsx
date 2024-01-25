import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Center,
  useTexture,
  useCursor,
} from "@react-three/drei";
import { fragmentShader } from "../glsl/frag";
import { vertexShader } from "../glsl/vert";
import { randFloat } from "three/src/math/MathUtils.js";
import gsap from "gsap";
import { useControls } from "leva";

function ParticlesGrid() {
  const [nbLines, setNbLines] = useState(20 * 18);
  const [nbColumns, setNbColumns] = useState(32 * 18);

  const [{ frequency, progress }, set] = useControls(() => ({
    frequency: {
      min: 0,
      max: 1,
      value: 0.15,
    },
    progress: {
      min: 0,
      max: 1,
      value: 0,
    },
  }));

  const texture = useTexture("/assets/chain/chain.png");

  const { viewport } = useThree();

  const vertices = useMemo(() => {
    const _vertices = [];
    const _initPosition = [];

    const halfColumn = nbColumns / 2;
    const halfLines = nbLines / 2;

    const offsetTransition = 50;

    for (let i = 0; i < nbLines; i++) {
      for (let y = 0; y < nbColumns; y++) {
        const point = [i, y, 0.0]; // coordinates of each points

        // appear from side
        // let initPoint = [
        //   i / 3 -
        //     halfLines +
        //     randFloat(halfLines, halfLines + offsetTransition),
        //   (y -
        //     halfColumn -
        //     randFloat(halfColumn, halfColumn + offsetTransition)) /
        //     3,
        //   randFloat(-50, 50),
        // ];

        // appear from z index
        const initPoint = [i, y, -randFloat(0, 500)];

        _vertices.push(...point); // spread the coordinates for Float32Array
        _initPosition.push(...initPoint);
      }
    }

    const vertices = new Float32Array(_vertices);
    const initPosition = new Float32Array(_initPosition);

    return { vertices, initPosition };
  }, []);

  const shaderRef: any = useRef();

  const meshRef: any = useRef();

  useEffect(() => {
    gsap.fromTo(
      set,
      {
        progress: 0,
      },
      {
        progress: 0.98,
        duration: 2.5,
        ease: "Power4.easeOut",
        onUpdate: () => {
          // This callback is called on every update of the tween
          // You can access the current progress value through set.progress
          // and update it as needed
          // For example, you can log the progress value:
          // @ts-ignore
          set({ progress: set.progress });

          // Or if you want to update some other state/variable:
          // setSomeOtherValue(set.progress);
        },
      }
    );
  }, []);

  console.log(viewport);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="red" position={[0, 0, 5]} />

      <Center>
        <points ref={meshRef}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={vertices.vertices.length / 3}
              array={vertices.vertices}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-initPosition"
              count={vertices.initPosition.length / 3}
              array={vertices.initPosition}
              itemSize={3}
            />
          </bufferGeometry>

          <shaderMaterial
            key={`${frequency} ${progress}`}
            ref={shaderRef}
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={{
              uPointSize: {
                value: 2.5,
              },
              uProgress: {
                value: progress,
              },
              uTexture: {
                value: texture,
              },
              uNbLines: {
                value: nbLines,
              },
              uNbColumns: {
                value: nbColumns,
              },
              uFrequency: {
                value: frequency,
              },
              uTime: {
                value: 0,
              },
            }}
            transparent={true}
            depthTest={false}
            depthWrite={false}
          />
        </points>
      </Center>

      {/* <OrbitControls /> */}
    </>
  );
}

export default function Main() {
  return (
    <Canvas camera={{ position: [0, 0, 500] }}>
      <ParticlesGrid />;
    </Canvas>
  );
}
