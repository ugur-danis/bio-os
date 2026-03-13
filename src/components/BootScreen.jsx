import { useState, useEffect } from "react";

const bootSequence = [
  { text: "Booting BioOS kernel...", type: "system" },
  { text: "Starting System Initialization...", type: "system" },
  { text: "Mounted Local File Systems.", type: "ok" },
  { text: "Started Network Connection.", type: "ok" },
  { text: "Initialized Full Stack Modules.", type: "ok" },
  { text: "Started 3D Canvas Context.", type: "ok" },
  { text: "Reached target Graphical Interface.", type: "ok" },
  { text: "Welcome to BioOS v1.0.0", type: "system" },
  { text: "root@bio-os:~# startx", type: "command" },
];

const BootScreen = ({ onComplete }) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prevCount) => {
        if (prevCount < bootSequence.length) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleCount >= bootSequence.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, onComplete]);

  return (
    <div className="w-[1024px] h-[640px] bg-black text-gray-300 font-mono text-xl p-10 flex flex-col justify-start items-start overflow-hidden rounded-md select-none cursor-default shadow-[0_0_10px_rgba(0,0,0,0.8)]">
      {bootSequence.slice(0, visibleCount).map((line, index) => (
        <div key={index} className="mb-2 flex">
          {line.type === "ok" && (
            <span className="mr-3">
              [<span className="text-green-500 font-bold"> OK </span>]
            </span>
          )}
          {line.type === "command" ? (
            <span>
              <span className="text-green-400 font-bold">root@bio-os:~#</span>{" "}
              <span className="text-white">{line.text.split(" ")[1]}</span>
            </span>
          ) : (
            <span
              className={
                line.type === "system" ? "text-gray-400" : "text-gray-200"
              }
            >
              {line.text}
            </span>
          )}
        </div>
      ))}

      {/* Yanıp sönen terminal imleci */}
      {visibleCount < bootSequence.length && (
        <div className="mt-1 ml-1 animate-pulse bg-gray-300 w-3 h-5"></div>
      )}
    </div>
  );
};

export default BootScreen;
