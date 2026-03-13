import { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import Macbook from "../components/Macbook_pro"; // Import the new model

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

      {/* 3D Environment */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [-7.4, 7.5, 18], fov: 45 }}>
          {/* Preset environment lighting for realistic metal reflections */}
          <Environment preset="city" />
          <ambientLight intensity={0.5} />

          <Suspense fallback={null}>
            {/* The Macbook model */}
            <Macbook
              position={[0, -4, 0]}
              rotation={[0, -Math.PI / 8, 0]}
              scale={0.5}
            />

            {/* Ground shadow for realism */}
            <ContactShadows
              position={[0, -1.05, 0]}
              opacity={0.6}
              scale={5}
              blur={2.5}
              far={2}
            />
          </Suspense>

          <OrbitControls
            enableZoom={true}
            onChange={(e) => {
              // Kameranın o anki x, y ve z koordinatlarını alıyoruz
              const { x, y, z } = e.target.object.position;
              // Okunabilirliği artırmak için virgülden sonra 2 basamak gösteriyoruz
              console.log(
                `[Camera Position]: [${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}]`,
              );
            }}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Desktop;
