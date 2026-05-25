import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

import Lenis from "lenis";

/* LENIS SMOOTH SCROLL */

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

function raf(time: number) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* RENDER APP */

createRoot(
  document.getElementById("root")!
).render(
  <StrictMode>
    <App />
  </StrictMode>
);