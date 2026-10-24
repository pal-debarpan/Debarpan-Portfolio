import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// pages
import { Home, About, Projects, Contact } from "./pages";

// components
import { Navbar } from "./components";
import sakura from "./assets/sakura.mp3";

// app
const App = () => {
  const audioRef = useRef(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  if (!audioRef.current) {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
  }

  useEffect(() => {
    const audio = audioRef.current;
    let hasStarted = false;

    const startAudio = () => {
      if (hasStarted || !isPlayingMusic) return;

      audio.play().then(() => {
        hasStarted = true;
        window.removeEventListener("click", startAudio);
        window.removeEventListener("touchstart", startAudio);
        window.removeEventListener("keydown", startAudio);
      }).catch(() => {
        // Browsers may require the visitor's first interaction before playing audio.
      });
    };

    if (isPlayingMusic) startAudio();
    else audio.pause();

    window.addEventListener("click", startAudio, { once: true });
    window.addEventListener("touchstart", startAudio, { once: true });
    window.addEventListener("keydown", startAudio, { once: true });

    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("touchstart", startAudio);
      window.removeEventListener("keydown", startAudio);
    };
  }, [isPlayingMusic]);

  useEffect(() => () => audioRef.current?.pause(), []);

  return (
    <HelmetProvider>
      <main className="bg-slate-300/20 h-full">
        {/* routes */}
        <Router>
          {/* navbar */}
          <Navbar />

          {/* other routes */}
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isPlayingMusic={isPlayingMusic}
                  onToggleMusic={() => setIsPlayingMusic((isPlaying) => !isPlaying)}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          {/* TODO: footer */}
        </Router>
      </main>
    </HelmetProvider>
  );
};

export default App;
