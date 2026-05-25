import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [

  {
    image: project1,

    title: "AI Mental Health Companion",

    tech: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AI Chatbot",
    ],

    description:
      "AI-powered mental health mobile application with chatbot support and personalized user interaction.",

    github:
      "https://github.com/Gokul768/ai-mental-health-companion",

    demo:
      "https://github.com/Gokul768",
  },

  {
    image: project2,

    title: "Physiotherapy Mobile App",

    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
    ],

    description:
      "Cross-platform physiotherapy management app for clinics and patients with responsive UI.",

    github:
      "https://github.com/Gokul768/physio-app",

    demo:
      "https://github.com/Gokul768",
  },

  {
    image: project3,

    title: "MERN Task Manager",

    tech: [
      "React",
      "Express",
      "MongoDB",
      "JWT Auth",
    ],

    description:
      "Full-stack task management platform with authentication and CRUD functionality.",

    github:
      "https://github.com/Gokul768/task-manager",

    demo:
      "https://github.com/Gokul768",
  },

];

const Projects = () => {

  return (

    <section
      id="projects"
      className="px-6 md:px-20 py-24"
    >

      {/* TITLE */}

      <motion.h1

        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="text-4xl md:text-5xl font-bold text-blue-500 mb-16 text-center"
      >

        Projects

      </motion.h1>

      {/* PROJECT GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}

            whileHover={{
              y: -12,
              scale: 1.03,
            }}

            className="group relative bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:border-blue-500 hover:shadow-blue-500/20 transition duration-500"
          >

            {/* BLUE GLOW */}

            <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition duration-500"></div>

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}

                className="w-full h-60 object-cover group-hover:scale-125 transition duration-700"
              />

            </div>

            {/* CONTENT */}

            <div className="relative z-10 p-8">

              {/* TITLE */}

              <h2 className="text-2xl font-bold mb-4 text-white">

                {project.title}

              </h2>

              {/* DESCRIPTION */}

              <p className="text-gray-300 leading-7 mb-6">

                {project.description}

              </p>

              {/* TECH STACK */}

              <div className="flex flex-wrap gap-3 mb-8">

                {project.tech.map((item, i) => (

                  <span
                    key={i}

                    className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-500 hover:text-white transition duration-300"
                  >

                    {item}

                  </span>

                ))}

              </div>

              {/* BUTTONS */}

              <div className="flex gap-4">

                {/* GITHUB */}

                <a
                  href={project.github}

                  target="_blank"
                  rel="noopener noreferrer"

                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-5 py-3 rounded-xl font-semibold shadow-lg"
                >

                  <FaGithub />

                  GitHub

                </a>

                {/* LIVE DEMO */}

                <a
                  href={project.demo}

                  target="_blank"
                  rel="noopener noreferrer"

                  className="flex items-center gap-2 border border-blue-500 hover:bg-blue-500 hover:scale-105 transition duration-300 px-5 py-3 rounded-xl font-semibold"
                >

                  <FaExternalLinkAlt />

                  Live Demo

                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Projects;