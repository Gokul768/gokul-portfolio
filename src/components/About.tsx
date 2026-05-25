import { motion } from "framer-motion";
import {
  FaReact,
  FaMobileAlt,
  FaServer,
  FaBrain,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-24"
    >
      {/* TITLE */}

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-500 mb-14 text-center"
      >
        About Me
      </motion.h1>

      {/* MAIN CONTAINER */}

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-slate-800/70 backdrop-blur-lg border border-slate-700 rounded-3xl p-8 md:p-14 shadow-2xl"
      >

        {/* TOP CONTENT */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Passionate{" "}
              <span className="text-blue-500">
                MERN Stack
              </span>{" "}
              & React Native Developer
            </h2>

            <p className="text-gray-300 text-lg leading-9">
              I'm a passionate developer focused on building
              responsive web and mobile applications using
              modern technologies.

              I specialize in React.js, React Native,
              Node.js, Express.js and MongoDB.

              I have internship experience in frontend and
              full stack development where I worked on
              real-world projects, API integrations and
              responsive UI systems.

              Currently, I'm exploring AI-powered full stack
              development by integrating AI technologies into
              MERN applications.
            </p>

          </div>

          {/* RIGHT CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* CARD 1 */}

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <FaReact className="text-4xl text-blue-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Frontend
              </h3>

              <p className="text-gray-400 leading-7">
                React.js, TypeScript, Tailwind CSS,
                responsive UI development.
              </p>
            </div>

            {/* CARD 2 */}

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <FaMobileAlt className="text-4xl text-blue-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Mobile Apps
              </h3>

              <p className="text-gray-400 leading-7">
                React Native apps with smooth UI
                and cross-platform performance.
              </p>
            </div>

            {/* CARD 3 */}

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <FaServer className="text-4xl text-blue-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Backend
              </h3>

              <p className="text-gray-400 leading-7">
                Node.js, Express.js, MongoDB,
                REST API integration and authentication.
              </p>
            </div>

            {/* CARD 4 */}

            <div className="bg-slate-900 p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300">
              <FaBrain className="text-4xl text-blue-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                AI Focus
              </h3>

              <p className="text-gray-400 leading-7">
                Building AI-powered applications
                using modern AI tools and APIs.
              </p>
            </div>

          </div>

        </div>

        {/* BOTTOM STATS */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              10+
            </h1>

            <p className="text-gray-400 mt-2">
              Projects
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              1+
            </h1>

            <p className="text-gray-400 mt-2">
              Internship
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              15+
            </h1>

            <p className="text-gray-400 mt-2">
              Technologies
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">
            <h1 className="text-4xl font-bold text-blue-500">
              100%
            </h1>

            <p className="text-gray-400 mt-2">
              Passion
            </p>
          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default About;