import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaAward,
  FaTimes,
} from "react-icons/fa";

import { useState } from "react";

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

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
            className="
              group
              bg-slate-800/70
              border border-slate-700
              backdrop-blur-lg
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-3
              hover:border-blue-500/40
              hover:shadow-blue-500/20
              transition-all
              duration-500
              flex
              flex-col
            "
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden bg-slate-900 flex items-center justify-center p-4">

              <img
                src={cert.image}
                alt={cert.title}
                className="
                  w-full
                  h-auto
                  max-h-[420px]
                  object-contain
                  rounded-2xl
                  group-hover:scale-105
                  transition
                  duration-700
                "
              />

            </div>

            {/* CONTENT */}

            <div className="p-8 flex flex-col flex-1">

              <div className="flex items-center gap-3 mb-4">

                <div className="bg-blue-500/20 text-blue-400 p-3 rounded-xl text-xl">
                  <FaAward />
                </div>

                <h2 className="text-xl font-bold text-white">
                  {cert.title}
                </h2>

              </div>

              <p className="text-blue-400 mb-4 font-medium">
                {cert.organization}
              </p>

              <p className="text-gray-300 leading-7 mb-8 flex-1">
                {cert.description}
              </p>

              {/* BUTTON */}

              <button
                onClick={() => setSelectedImage(cert.image)}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-blue-500
                  hover:bg-blue-600
                  transition
                  px-5
                  py-3
                  rounded-xl
                  font-semibold
                  text-white
                  shadow-lg
                  hover:shadow-blue-500/40
                "
              >

                <FaExternalLinkAlt />

                View Certificate

              </button>

            </div>

          </motion.div>
        ))}

      </div>

      {/* FULL IMAGE MODAL */}

      {selectedImage && (

        <div
          className="
            fixed
            inset-0
            bg-black/90
            z-50
            flex
            items-center
            justify-center
            p-4
          "
        >

          {/* CLOSE BUTTON */}

          <button
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              top-6
              right-6
              text-white
              text-3xl
              hover:text-blue-400
              transition
            "
          >

            <FaTimes />

          </button>

          {/* IMAGE */}

          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Certificate"
            className="
              max-w-full
              max-h-[90vh]
              rounded-2xl
              shadow-2xl
              object-contain
            "
          />

        </div>

      )}

    </section>
  );
};

export default Certifications;