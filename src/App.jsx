import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Desktop from "./components/Desktop";

function App() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <div className="w-screen h-screen overflow-hidden bg-black">
      {isBooting ? (
        <BootScreen onComplete={() => setIsBooting(false)} />
      ) : (
        <Desktop />
      )}
    </div>
  );
}

export default App;
