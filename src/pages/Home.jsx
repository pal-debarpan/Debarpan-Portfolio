import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

// components
import { Loader, HomeInfo, IslandGuide } from "../components";

// models
import { Island, Sky, Bird, Plane } from "../models";

// assets
import { soundoff, soundon } from "../assets/icons";

// constants
import { SITE_NAME } from "../constants";

const ISLAND_STAGE_ROTATIONS = {
  1: 4.7,
  2: 2.5,
  3: 1.05,
  4: 5.65,
};

// home
const Home = ({ isPlayingMusic, onToggleMusic }) => {
  const location = useLocation();
  const returnStage = location.state?.returnStage;

  // states
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(returnStage || 1);
  const [hasSeenGuide, setHasSeenGuide] = useState(
    location.state?.guideDismissed === true
  );
  // Dynamic screen dimensions state to handle window resizing / orientation change
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Function to adjust island parameters based on screen size
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    const rotation = [0.1, ISLAND_STAGE_ROTATIONS[returnStage] || ISLAND_STAGE_ROTATIONS[1], 0];

    // Responsive scaling based on device viewport
    if (screenSize.width < 440) {
      // Small mobile phones (320px - 430px)
      screenScale = [0.65, 0.65, 0.65];
      screenPosition = [0, -4.5, -43];
    } else if (screenSize.width < 768) {
      // Tablets / larger phones
      screenScale = [0.8, 0.8, 0.8];
      screenPosition = [0, -5.5, -43];
    } else {
      // Desktop
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  // Function to adjust plane parameters based on screen size
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (screenSize.width < 440) {
      screenScale = [1.1, 1.1, 1.1];
      screenPosition = [0, -1.2, 0];
    } else if (screenSize.width < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      {/* update site title */}
      <Helmet>
        <title>{SITE_NAME} | Portfolio</title>
      </Helmet>

      {/* home section */}
      <section className="w-full h-screen relative overflow-hidden">
        {!hasSeenGuide && (
          <div>
            <IslandGuide onDismiss={() => setHasSeenGuide(true)} />
          </div>
        )}

        {/* current stage info banner */}
        <div className="absolute top-20 sm:top-28 left-0 right-0 z-20 flex items-center justify-center px-4 pointer-events-none">
          <div className="pointer-events-auto max-w-lg w-full flex justify-center">
            {currentStage && <HomeInfo currentStage={currentStage} />}
          </div>
        </div>
        {/* Three.js Canvas Component */}
        <Canvas
          className={`w-full h-screen bg-transparent ${
            hasSeenGuide ? (isRotating ? "cursor-grabbing" : "cursor-grab") : "cursor-default"
          }`}
          camera={{ near: 0.1, far: 1000 }}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          {/* The interactive island renders as soon as its own model loads. */}
          <Suspense fallback={<Loader />}>
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
              isInteractive={hasSeenGuide}
            />
          </Suspense>

          {/* Decorative models load independently and never delay the island. */}
          <Suspense fallback={null}>
            <Bird />
            <Sky isRotating={isRotating} />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

        {/* Sound On/Off toggle button */}
        <aside
          className="absolute bottom-2 left-2"
          title={isPlayingMusic ? "Sound On" : "Sound Off"}
        >
          <img
            src={isPlayingMusic ? soundon : soundoff}
            alt={isPlayingMusic ? "Sound On" : "Sound Off"}
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={onToggleMusic}
          />
        </aside>
      </section>
    </>
  );
};

export default Home;
