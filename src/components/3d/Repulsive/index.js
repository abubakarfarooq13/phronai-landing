import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Particle = ({ position, velocity, mass }) => {
  const ref = useRef();

  useFrame(() => {
    // Update particle position based on velocity
    ref.current.position.x += velocity.x;
    ref.current.position.y += velocity.y;
    ref.current.position.z += velocity.z;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const RepulsiveParticles = () => {
  const particles = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    position: {
      x: Math.random() * 10 - 5,
      y: Math.random() * 10 - 5,
      z: Math.random() * 10 - 5,
    },
    velocity: {
      x: 0,
      y: 0,
      z: 0,
    },
    mass: 1,
  }));

  const repulsionForce = 0.01;

  useFrame(() => {
    // Update repulsive forces between particles
    particles.forEach((particle) => {
      particles.forEach((otherParticle) => {
        if (particle.id !== otherParticle.id) {
          const dx = otherParticle.position.x - particle.position.x;
          const dy = otherParticle.position.y - particle.position.y;
          const dz = otherParticle.position.z - particle.position.z;

          const distance = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
          const forceMagnitude = repulsionForce / distance ** 2;

          const forceX = (forceMagnitude * dx) / distance;
          const forceY = (forceMagnitude * dy) / distance;
          const forceZ = (forceMagnitude * dz) / distance;

          // Apply repulsive force to the particle
          particle.velocity.x += forceX / particle.mass;
          particle.velocity.y += forceY / particle.mass;
          particle.velocity.z += forceZ / particle.mass;
        }
      });
    });
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          position={particle.position}
          velocity={particle.velocity}
          mass={particle.mass}
        />
      ))}
    </>
  );
};

export default RepulsiveParticles;
