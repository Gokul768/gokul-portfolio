import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";

const profiles = [
  {
    icon: <FaGithub />,
    title: "GitHub",
    username: "Gokul768",
    link: "https://github.com/Gokul768",
    color: "hover:border-white",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    username: "gokulkumar-m",
    link: "https://www.linkedin.com/in/gokulkumar-m-8aa977355",
    color: "hover:border-blue-500",
  },

  {
    icon: <FaGlobe />,
    title: "Portfolio",
    username: "portfolio website",
    link: "https://gokul-portfolio-one-navy.vercel.app",
    color: "hover:border-green-500",
  },

  {
    icon: <FaFileAlt />,
    title: "Resume",
    username: "Download Resume",
    link: "/resume.pdf",
    color: "hover:border-yellow-500",
  },
];

const CodingProfiles = () => {
  return (
    <section
      id="profiles"
      className="px-6 md:px-20 py-24"
    >
      {/* TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16"
      >
        Coding Profiles
      </motion.h1>

      {/* GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {profiles.map((profile, index) => (
          <motion.a
            key={index}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}

            className={`bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:-translate-y-3 transition duration-500 ${profile.color}`}
          >

            {/* ICON */}

            <div className="text-5xl text-blue-500 mb-6">
              {profile.icon}
            </div>

            {/* TITLE */}

            <h2 className="text-2xl font-bold mb-3">
              {profile.title}
            </h2>

            {/* USERNAME */}

            <p className="text-gray-400 break-all">
              {profile.username}
            </p>

          </motion.a>
        ))}

      </div>

    </section>
  );
};

export default CodingProfiles;