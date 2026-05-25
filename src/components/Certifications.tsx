import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaAward,
} from "react-icons/fa";

import infosys from "../assets/infosys.png";
import mernstack from "../assets/mernstack.png";
import pythonfullstack from "../assets/python_full_stack.png";

const certifications = [
  {
    image: mernstack,
    title: "MERN Stack Certification",
    organization: "NoviTech",
    description:
      "Completed MERN Stack training covering React.js, Node.js, Express.js and MongoDB.",
  },

  {
    image: pythonfullstack,
    title: "Python Full Stack Certification",
    organization: "Infosys / ICT Academy & LiveTech",
    description:
      "Completed Python full stack development training with frontend and backend fundamentals.",
  },

  {
    image: infosys,
    title: "Infosys Internship Certification",
    organization: "Infosys",
    description:
      "Successfully completed internship training and gained practical full stack development experience.",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="px-6 md:px-20 py-24"
    >
      {/* TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16"
      >
        Certifications
      </motion.h1>

      {/* GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            className="group bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-blue-500/20 transition duration-500"
          >

            {/* IMAGE */}

            <div className="overflow-hidden">

              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-700"
              />

            </div>

            {/* CONTENT */}

            <div className="p-8">

              <div className="flex items-center gap-3 mb-4">

                <div className="bg-blue-500/20 text-blue-400 p-3 rounded-xl text-xl">
                  <FaAward />
                </div>

                <h2 className="text-xl font-bold">
                  {cert.title}
                </h2>

              </div>

              <p className="text-blue-400 mb-4">
                {cert.organization}
              </p>

              <p className="text-gray-300 leading-7 mb-8">
                {cert.description}
              </p>

              {/* BUTTON */}

              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 transition px-5 py-3 rounded-xl font-semibold">

                <FaExternalLinkAlt />

                View Certificate

              </button>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default Certifications;