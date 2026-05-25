import { useEffect, useState } from "react";

const CursorGlow = () => {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
    };

  }, []);

  return (
    <div
      className="hidden md:block fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-0 blur-3xl opacity-20 bg-blue-500 transition-transform duration-150"
      style={{
        transform: `translate(${position.x - 180}px, ${position.y - 180}px)`,
      }}
    />
  );
};

export default CursorGlow;