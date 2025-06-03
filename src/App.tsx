import { Canvas } from '@react-three/fiber';
import './App.css'; // Keep if it contains any specific App styling, otherwise can be minimal
import CameraController from './components/CameraController';
import LightingSystem from './components/LightingSystem';
import PerformanceMonitor from './components/PerformanceMonitor';
import WorldTerrain from './components/WorldTerrain';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#87CEEB' }}> {/* Sky blue background */}
      <Canvas
        shadows // Enable shadows globally for the canvas
        camera={{ fov: 50, near: 0.1, far: 1000 }} // Default camera settings, might be overridden by CameraController
      >
        <CameraController />
        <LightingSystem />
        <WorldTerrain />
        {/*
          Placeholder components for future phases (optional to add now)
          <BuildingDistrict />
          <NaturalFeatures />
          <Infrastructure />
          <EffectsManager />
        */}
      </Canvas>
      <PerformanceMonitor /> {/* Stats will be overlaid on top of the canvas */}
    </div>
  );
}

export default App;
