import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-16 px-6 md:px-20"
    >

      {/* LEFT CONTENT */}

      <div className="flex-1 text-center lg:text-left">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-blue-500">
            GOKULKUMAR
          </span>
        </motion.h1>

        <div className="mt-6 text-2xl md:text-4xl font-semibold text-gray-300">

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Native Developer",
              2000,
              "AI Powered Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mt-8 text-gray-400 text-lg leading-8"
        >
          Passionate developer focused on building modern,
          responsive web and mobile applications using
          React, React Native, Node.js, Express.js and MongoDB.
        </motion.p>

        <div className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start">

          <a href="#projects">
            <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="border border-blue-500 hover:bg-blue-500 transition px-8 py-3 rounded-2xl font-semibold text-lg">
              Contact Me
            </button>
          </a>

          <a href={resume} download>
            <button className="bg-white text-black hover:bg-gray-300 transition px-8 py-3 rounded-2xl font-semibold text-lg">
              Download Resume
            </button>
          </a>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center"
      >

        <div className="relative">

          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

          <img
            src={profile}
            alt="profile"
            className="relative w-[280px] md:w-[400px] rounded-full border-4 border-blue-500 shadow-2xl"
          />

        </div>

      </motion.div>

    </section>
  )
}

export default Hero;