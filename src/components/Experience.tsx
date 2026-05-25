import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

const experiences = [
  {
    icon: <FaMobileAlt />,
    company: "Rehabiionics Startup",
    role: "Frontend Developer Intern",
    duration: "3 Months",
    description:
      "Worked on physiotherapy mobile application using React Native and TypeScript. Developed responsive mobile UI screens and improved user experience.",
    tech: [
      "React Native",
      "TypeScript",
      "Mobile UI",
    ],
  },

  {
    icon: <FaLaptopCode />,
    company: "NoviTech",
    role: "MERN Stack Intern",
    duration: "3 Months",
    description:
      "Worked on MERN stack projects, API integration and frontend-backend connectivity with modern full stack architecture.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
    ],
  },

  {
    icon: <FaCode />,
    company: "ICT Academy – Infosys",
    role: "Python Full Stack Intern",
    duration: "1 Month",
    description:
      "Learned full stack development fundamentals and practical implementation using Python technologies.",
    tech: [
      "Python",
      "Full Stack",
      "APIs",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 md:px-20 py-24"
    >
      {/* TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-20"
      >
        Experience
      </motion.h1>

      {/* TIMELINE */}

      <div className="relative border-l border-blue-500 ml-4">

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className="mb-16 ml-10 relative"
          >

            {/* ICON */}

            <div className="absolute -left-[54px] bg-blue-500 p-4 rounded-full text-white shadow-lg">
              {exp.icon}
            </div>

            {/* CARD */}

            <div className="bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition duration-500">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">

                <div>
                  <h2 className="text-2xl font-bold">
                    {exp.role}
                  </h2>

                  <p className="text-blue-400 mt-1">
                    {exp.company}
                  </p>
                </div>

                <span className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm w-fit">
                  {exp.duration}
                </span>

              </div>

              <p className="text-gray-300 leading-8 mb-6">
                {exp.description}
              </p>

              {/* TECH TAGS */}

              <div className="flex flex-wrap gap-3">

                {exp.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-900 px-4 py-2 rounded-full text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Experience;