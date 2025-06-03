import React from 'react';

const LightingSystem = () => {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[50, 80, 50]} // Positioned to cast shadows from an angle
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048} // Optional: for sharper shadows
        shadow-mapSize-height={2048} // Optional: for sharper shadows
      />
    </>
  );
};

export default LightingSystem;
