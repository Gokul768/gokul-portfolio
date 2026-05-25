import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profile from "../assets/profile.png";
import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-16 px-6 md:px-20 pt-28"
    >

      {/* LEFT CONTENT */}

      <div className="flex-1 text-center lg:text-left">

        {/* SMALL TAG */}

        <motion.div

          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-400 text-sm font-semibold mb-6"
        >

          AI Powered Full Stack Developer 🚀

        </motion.div>

        {/* HEADING */}

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

        {/* TYPING */}

        <div className="mt-6 text-2xl md:text-4xl font-semibold text-gray-300">

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "React Native Developer",
              2000,
              "AI Powered Developer",
              2000,
              "Frontend Specialist",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* DESCRIPTION */}

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{ delay: 1, duration: 1 }}

          className="max-w-2xl mt-8 text-gray-400 text-lg leading-8"
        >

          Passionate MERN Stack and React Native Developer
          focused on building modern, responsive and scalable
          web & mobile applications using React.js,
          React Native, Node.js, Express.js and MongoDB.

        </motion.p>

        {/* BUTTONS */}

        <div className="flex flex-wrap gap-5 mt-10 justify-center lg:justify-start">

          <a href="#projects">

            <button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg">

              View Projects

            </button>

          </a>

          <a href="#contact">

            <button className="border border-blue-500 hover:bg-blue-500 hover:scale-105 transition duration-300 px-8 py-3 rounded-2xl font-semibold text-lg">

              Contact Me

            </button>

          </a>

          <a
            href={resume}
            download
          >

            <button className="bg-white text-black hover:bg-gray-300 hover:scale-105 transition duration-300 px-8 py-3 rounded-2xl font-semibold text-lg flex items-center gap-3 shadow-lg">

              <FaDownload />

              Resume

            </button>

          </a>

        </div>

        {/* SOCIAL ICONS */}

        <div className="flex gap-6 mt-10 justify-center lg:justify-start">

          <a
            href="https://github.com/Gokul768"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 hover:scale-125 transition duration-300"
          >

            <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/in/gokulkumar-m-8aa977355"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500 hover:scale-125 transition duration-300"
          >

            <FaLinkedin />

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

          {/* GLOW */}

          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full animate-pulse"></div>

          {/* IMAGE */}

          <img
            src={profile}
            alt="profile"
            className="relative w-[280px] md:w-[400px] rounded-full border-4 border-blue-500 shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;