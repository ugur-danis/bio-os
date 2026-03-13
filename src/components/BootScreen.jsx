import { useState, useEffect } from "react";

const BootScreen = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);

  const bootSequence = [
    "Initializing BioOS kernel...",
    "Mounting file systems... OK",
    "Loading frontend modules... [React, Three.js, Tailwind]",
    "Establishing secure connections...",
    "Compiling assets...",
    "Welcome to the BioOS Environment.",
    "Starting desktop session...",
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setVisibleLines((prev) => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1200);
      }
    }, 400);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black text-green-500 font-mono text-sm sm:text-base p-6 z-50 flex flex-col justify-start items-start overflow-hidden">
      {visibleLines.map((line, index) => (
        <div key={index} className="mb-1">
          <span className="mr-2">&gt;</span>
          {line}
        </div>
      ))}
      {visibleLines.length < bootSequence.length && (
        <div className="mt-1 animate-pulse">_</div>
      )}
    </div>
  );
};

export default BootScreen;
