import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// Temporary 3D object to test the canvas rendering and interactions
const PlaceholderBox = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  );
};

const Desktop = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-700 bg-gray-100 dark:bg-slate-900 text-slate-800 dark:text-white relative overflow-hidden">
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-950 hover:scale-110 transition-transform duration-300 z-20"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? (
          <svg
            className="w-6 h-6 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-orange-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.32a1 1 0 011.415 0l.708.707a1 1 0 01-1.414 1.415l-.707-.708a1 1 0 010-1.414zm3.78 5.68a1 1 0 010 2h-1a1 1 0 110-2h1zM14.22 15.68a1 1 0 010 1.415l-.708.707a1 1 0 01-1.415-1.414l.708-.707a1 1 0 011.415 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-1.32a1 1 0 01-1.415 0l-.707-.708a1 1 0 011.414-1.415l.707.708a1 1 0 010 1.415zM3 10a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm1.22-5.68a1 1 0 011.415 0l.708-.707a1 1 0 01-1.414-1.415l-.708.707a1 1 0 010 1.415zM10 5a5 5 0 100 10 5 5 0 000-10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* 3D Environment rendering space */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <PlaceholderBox />
          {/* Enables mouse drag interaction */}
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="z-10 absolute bottom-12 flex flex-col items-center pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
          BioOS
        </h1>
        <p className="text-gray-600 dark:text-slate-400 font-mono text-sm md:text-base">
          3D Canvas Initialized. Try dragging to rotate.
        </p>
      </div>
    </div>
  );
};

export default Desktop;
