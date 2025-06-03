import { Plane } from '@react-three/drei';
import React from 'react';

const WorldTerrain = () => {
  const gridSize = 100;
  const gridDivisions = 100;

  return (
    <>
      {/* Ground Plane */}
      <Plane
        args={[gridSize, gridSize]} // Size of the plane (100x100 units)
        rotation={[-Math.PI / 2, 0, 0]} // Rotate to be horizontal
        position={[0, 0, 0]} // Position at the origin
        receiveShadow // Plane should receive shadows
      >
        <meshStandardMaterial color="#8BC34A" /> {/* Bright green color for grass */}
      </Plane>

      {/* Grid Helper */}
      <gridHelper
        args={[gridSize, gridDivisions, '#ffffff', '#ffffff']} // Size, divisions, center line color, grid color
        position={[0, 0.01, 0]} // Slightly above the plane to avoid z-fighting
      />
    </>
  );
};

export default WorldTerrain;
