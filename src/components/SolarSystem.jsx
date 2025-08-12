import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Stars, useTexture } from "@react-three/drei";

// Camera controller component
function CameraController() {
  const { camera } = useThree();
  const [cameraPosition, setCameraPosition] = useState({ x: 0, y: 30, z: 40 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      const moveSpeed = 2;

      switch (event.key) {
        case "ArrowUp":
          setCameraPosition((prev) => ({ ...prev, y: prev.y + moveSpeed }));
          break;
        case "ArrowDown":
          setCameraPosition((prev) => ({ ...prev, y: prev.y - moveSpeed }));
          break;
        case "ArrowLeft":
          setCameraPosition((prev) => ({
            ...prev,
            x:
              prev.x -
              moveSpeed * Math.cos(Math.atan2(prev.z, prev.x) + Math.PI / 2),
            z:
              prev.z -
              moveSpeed * Math.sin(Math.atan2(prev.z, prev.x) + Math.PI / 2),
          }));
          break;
        case "ArrowRight":
          setCameraPosition((prev) => ({
            ...prev,
            x:
              prev.x +
              moveSpeed * Math.cos(Math.atan2(prev.z, prev.x) + Math.PI / 2),
            z:
              prev.z +
              moveSpeed * Math.sin(Math.atan2(prev.z, prev.x) + Math.PI / 2),
          }));
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useFrame(() => {
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.lookAt(0, 0, 0); // Always look at center (solar system)
  });

  return null;
}

function Sun() {
  const sunTexture = useTexture("/textures/sun.jpg");
  return (
    <mesh castShadow receiveShadow>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial
        map={sunTexture}
        emissive="#ffff33"
        emissiveIntensity={1.5}
        emissiveMap={sunTexture}
        roughness={0.4}
        metalness={0}
      />
    </mesh>
  );
}

function Planet({ textureUrl, size, distance, orbitSpeed, rotationSpeed }) {
  const planetRef = useRef();
  const meshRef = useRef();
  const texture = useTexture(textureUrl);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.position.x = Math.cos(elapsed * orbitSpeed) * distance;
      planetRef.current.position.z = Math.sin(elapsed * orbitSpeed) * distance;
    }
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={planetRef} castShadow receiveShadow>
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial map={texture} roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

export default function SolarSystem() {
  const planets = [
    {
      name: "Mercury",
      textureUrl: "/textures/mercury.jpg",
      size: 0.4,
      distance: 6,
      orbitSpeed: 4.15,
      rotationSpeed: 0.004,
    },
    {
      name: "Venus",
      textureUrl: "/textures/venus.jpg",
      size: 0.95,
      distance: 8,
      orbitSpeed: 1.62,
      rotationSpeed: 0.002,
    },
    {
      name: "Earth",
      textureUrl: "/textures/earth.jpg",
      size: 1,
      distance: 10,
      orbitSpeed: 1,
      rotationSpeed: 0.02,
    },
    {
      name: "Mars",
      textureUrl: "/textures/mars.jpg",
      size: 0.53,
      distance: 12,
      orbitSpeed: 1,
      rotationSpeed: 0.018,
    },
    {
      name: "Jupiter",
      textureUrl: "/textures/jupiter.jpg",
      size: 2.5,
      distance: 16,
      orbitSpeed: 0.18,
      rotationSpeed: 0.04,
    },
    {
      name: "Saturn",
      textureUrl: "/textures/saturn.jpg",
      size: 2.1,
      distance: 20,
      orbitSpeed: 0.3,
      rotationSpeed: 0.068,
    },
    {
      name: "Uranus",
      textureUrl: "/textures/uranus.jpg",
      size: 1.7,
      distance: 24,
      orbitSpeed: 0.12,
      rotationSpeed: 0.05,
    },
    {
      name: "Neptune",
      textureUrl: "/textures/neptune.jpg",
      size: 1.6,
      distance: 28,
      orbitSpeed: 0.06,
      rotationSpeed: 0.052,
    },
  ];

  return (
    <div style={{ width: "100%", height: "calc(100vh )" }}>
      <Canvas shadows camera={{ position: [0, 30, 40], fov: 70 }}>
        <CameraController />
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={3} castShadow />

        <Stars
          radius={400}
          depth={Math.random(20, 80)}
          count={8000}
          factor={10}
          saturation={0}
          fade
        />

        <Sun />

        {planets.map(
          ({ name, textureUrl, size, distance, orbitSpeed, rotationSpeed }) => (
            <Planet
              key={name}
              textureUrl={textureUrl}
              size={size}
              distance={distance}
              orbitSpeed={orbitSpeed}
              rotationSpeed={rotationSpeed}
            />
          )
        )}

        <OrbitControls
          enableZoom={false}
          target={[0, 0, 0]}
          enableKeys={false}
        />
      </Canvas>
    </div>
  );
}
