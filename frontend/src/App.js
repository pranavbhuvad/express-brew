import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "auto" });
      }, 200);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
}

function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.09, anchors: true });
    let rafId;
    const loop = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="App bg-cream font-body text-espresso">
        <a
          href="#main"
          data-testid="skip-link"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-espresso focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
