import { useState, useRef, useEffect } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import PortfolioUI from "./PortfolioUI";
import BootScreen from "./BootScreen";

export default function Macbook(props) {
  const { nodes, materials } = useGLTF("/macbook_pro.glb");

  // App State: 'closed' -> 'opening' -> 'booting' -> 'desktop'
  const [appState, setAppState] = useState("closed");
  const lidRef = useRef();

  // --------------------------------------------------------
  // ⚙️ HINGE (PIVOT) SETTINGS
  // If the lid detaches from the keyboard during animation, adjust these values.
  // Z controls forward/backward, Y controls up/down alignment.
  // --------------------------------------------------------
  const pivotZ = -12;
  const pivotY = 0;

  // --------------------------------------------------------
  // ⚙️ CLOSED ANGLE SETTING
  // Find the perfect closing angle between Math.PI / 2 (90 deg) and Math.PI (180 deg).
  // Tweak this multiplier (e.g., 0.75, 0.82) until the lid perfectly touches the keyboard.
  // --------------------------------------------------------
  const closedAngle = Math.PI * 0.62;

  useEffect(() => {
    // Start the opening animation 1.5 seconds after the component mounts
    const timer = setTimeout(() => {
      setAppState("opening");
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useFrame((state, delta) => {
    if (!lidRef.current) return;

    // Target rotation based on current app state
    const targetRotation = appState === "closed" ? closedAngle : 0;

    // Smooth spring (Lerp) animation for the lid rotation
    lidRef.current.rotation.x = THREE.MathUtils.lerp(
      lidRef.current.rotation.x,
      targetRotation,
      delta * 2.5,
    );

    // Transition to the boot screen when the lid is almost fully open
    if (appState === "opening" && Math.abs(lidRef.current.rotation.x) < 0.05) {
      lidRef.current.rotation.x = 0; // Snap to 0 to prevent micro-jitters
      setAppState("booting");
    }
  });

  return (
    <group {...props} dispose={null}>
      {/* ========================================================= */}
      {/* PART 1: STATIC BASE (KEYBOARD, PORTS, SPEAKERS)           */}
      {/* ========================================================= */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.AibnXCKcAbewWhH}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.WeLyzRwUVIhQGgM}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.UhoCLqHkvkDmxOA}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.zhGRTuGrQoJflBD}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.zCLdUynNQOzVMqx}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.lmWQsEjxpsebDlK}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_26.geometry}
          material={materials.MycfwscjQZRVSoj}
        />
        <mesh
          geometry={nodes.Object_28.geometry}
          material={materials.bsmYIMHYRqMuLqz}
        />
        <mesh
          geometry={nodes.Object_30.geometry}
          material={materials.LtEafgAVRolQqRw}
        />
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials.iyDJFXmHelnMTbD}
        />
        <mesh
          geometry={nodes.Object_34.geometry}
          material={materials.eJObPwhgFzvfaoZ}
        />
        <mesh
          geometry={nodes.Object_36.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_38.geometry}
          material={materials.nDsMUuDKliqGFdU}
        />
        <mesh
          geometry={nodes.Object_40.geometry}
          material={materials.LtEafgAVRolQqRw}
        />
        <mesh
          geometry={nodes.Object_42.geometry}
          material={materials.CRQixVLpahJzhJc}
        />
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials.IcpudUyxprDYhfw}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.YYwBgwvcyZVOOAA}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_54.geometry}
          material={materials.SLGkCohDDelqXBu}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials.WDumMKBWVQxmraD}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials.WnHKXHhScfUbJQi}
        />
        <mesh
          geometry={nodes.Object_60.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_62.geometry}
          material={materials.ZNhRrZtaKWQYAab}
        />
        <mesh
          geometry={nodes.Object_64.geometry}
          material={materials.IcpudUyxprDYhfw}
        />
        <mesh
          geometry={nodes.Object_66.geometry}
          material={materials.fNHiBfcxHUJCahl}
        />
        <mesh
          geometry={nodes.Object_68.geometry}
          material={materials.bsEIHfblEXNcUMs}
        />
        <mesh
          geometry={nodes.Object_70.geometry}
          material={materials.CRQixVLpahJzhJc}
        />
        <mesh
          geometry={nodes.Object_72.geometry}
          material={materials.SABLxXNNESCdgUy}
        />
        <mesh
          geometry={nodes.Object_74.geometry}
          material={materials.LpqXZqhaGCeSzdu}
        />
        <mesh
          geometry={nodes.Object_76.geometry}
          material={materials.sIfSZcqgDlKMJPf}
        />
        <mesh
          geometry={nodes.Object_78.geometry}
          material={materials.bsmYIMHYRqMuLqz}
        />
        <mesh
          geometry={nodes.Object_80.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_82.geometry}
          material={materials.gMtYExgrEUqPfln}
        />
        <mesh
          geometry={nodes.Object_84.geometry}
          material={materials.WnHKXHhScfUbJQi}
        />
        <mesh
          geometry={nodes.Object_86.geometry}
          material={materials.nDsMUuDKliqGFdU}
        />
        <mesh
          geometry={nodes.Object_88.geometry}
          material={materials.bsEIHfblEXNcUMs}
        />
        <mesh
          geometry={nodes.Object_90.geometry}
          material={materials.uInNDOueKeBTGQB}
        />
        <mesh
          geometry={nodes.Object_92.geometry}
          material={materials.hmEmmncwVomyUTC}
        />
        <mesh
          geometry={nodes.Object_94.geometry}
          material={materials.WeLyzRwUVIhQGgM}
        />
        <mesh
          geometry={nodes.Object_96.geometry}
          material={materials.KclpPzxoRwZAoer}
        />
        <mesh
          geometry={nodes.Object_99.geometry}
          material={materials.wjAYtisbflXilXi}
        />
        <mesh
          geometry={nodes.Object_101.geometry}
          material={materials.zobIbiekuagXEVU}
        />
        <mesh
          geometry={nodes.Object_105.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_107.geometry}
          material={materials.JvMFZolVCdpPqjj}
        />
        <mesh
          geometry={nodes.Object_109.geometry}
          material={materials.UBYmHfGRfHbOXyc}
        />
        <mesh
          geometry={nodes.Object_111.geometry}
          material={materials.uInNDOueKeBTGQB}
        />
        <mesh
          geometry={nodes.Object_117.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_119.geometry}
          material={materials.jwuTsnFxKtBUxpK}
        />
        <mesh
          geometry={nodes.Object_121.geometry}
          material={materials.nDsMUuDKliqGFdU}
        />
        <mesh
          geometry={nodes.Object_127.geometry}
          material={materials.ZCDwChwkbBfITSW}
        />
      </group>

      {/* ========================================================= */}
      {/* PART 2: ANIMATED SCREEN GROUP & SYMMETRIC PIVOT           */}
      {/* ========================================================= */}

      {/* Step 1: Shift the entire screen group to the hinge pivot point */}
      <group position={[0, pivotY, pivotZ]}>
        {/* Step 2: Apply the rotation animation on this axis. 
            Initialize at closedAngle so it starts fully closed without glitching. */}
        <group ref={lidRef} rotation={[closedAngle, 0, 0]}>
          {/* Step 3: Shift the meshes back to their original local coordinates */}
          <group position={[0, -pivotY, -pivotZ]}>
            {/* The 7 Screen Meshes (preserving their original model orientation) */}
            <group rotation={[Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.Object_103.geometry}
                material={materials.RyKTMHTpkkwQkvB}
              />{" "}
              {/* Lid Base */}
              <mesh
                geometry={nodes.Object_113.geometry}
                material={materials.gOXiFODBFKnUyyU}
              />{" "}
              {/* Lens */}
              <mesh
                geometry={nodes.Object_115.geometry}
                material={materials.eBwkWuOBScacrgP}
              />{" "}
              {/* Camera */}
              <mesh
                geometry={nodes.Object_123.geometry}
                material={materials.sfCQkHOWyrsLmor}
              />{" "}
              {/* Screen Glass */}
              <mesh
                geometry={nodes.Object_125.geometry}
                material={materials.CdgEAaPUlrQWQuD}
              />{" "}
              {/* Logo */}
              <mesh
                geometry={nodes.Object_129.geometry}
                material={materials.XCYkeTCxqFmKTKe}
              />{" "}
              {/* Notch */}
              <mesh
                geometry={nodes.Object_131.geometry}
                material={materials.MycfwscjQZRVSoj}
              />{" "}
              {/* Bezel */}
            </group>

            {/* CUSTOM HTML OVERLAY INTERFACE */}
            <Html
              transform
              occlude
              wrapperClass="htmlScreen"
              distanceFactor={12}
              zIndexRange={[100, 0]}
              position={[0, 11.7, -16.9]}
              rotation={[-0.36, 0, 0]}
              scale={[1.13, 1.16, 1]}
            >
              {appState === "closed" || appState === "opening" ? (
                <div className="w-5xl h-160 bg-black"></div>
              ) : appState === "booting" ? (
                <BootScreen onComplete={() => setAppState("desktop")} />
              ) : (
                <PortfolioUI />
              )}
            </Html>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/macbook_pro.glb");
