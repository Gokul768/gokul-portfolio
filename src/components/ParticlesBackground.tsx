import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"

      init={particlesInit}

      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}

      options={{
        fullScreen: {
          enable: false,
        },

        background: {
          color: {
            value: "#0f172a",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.3,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 3,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;