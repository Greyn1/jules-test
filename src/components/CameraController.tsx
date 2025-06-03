import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CameraController = () => {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null); // Using 'any' for OrbitControls ref type for now

  // Initial camera position for isometric-like view
  const initialCameraPosition = new THREE.Vector3(50, 50, 50);
  const target = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    // Set initial camera position and look at target
    camera.position.copy(initialCameraPosition);
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    if (controlsRef.current) {
      controlsRef.current.target.copy(target);
      controlsRef.current.update();
    }
  }, [camera]);

  return (
    <>
      <PerspectiveCamera makeDefault fov={50} near={0.1} far={1000} />
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={true}
        // Optional: Add constraints to maintain an overhead view if desired later
        // minDistance={10}
        // maxDistance={150}
        // minPolarAngle={Math.PI / 4} // Approx 45 degrees
        // maxPolarAngle={Math.PI / 2 - 0.1} // Slightly less than 90 degrees to prevent looking straight down
        // target={target} // Set target for controls
      />
    </>
  );
};

export default CameraController;
