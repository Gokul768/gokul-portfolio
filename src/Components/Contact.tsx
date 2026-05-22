import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
  id="contact"
  className="px-6 md:px-20 py-20"
>

      <h1 className="text-4xl font-bold text-blue-500 mb-12">
        Contact
      </h1>

      <div className="bg-slate-800 rounded-3xl p-10 shadow-xl">

        <p className="text-gray-300 text-lg mb-10 leading-8">
          I'm open to internships, fresher opportunities,
          freelance projects and collaborations.
        </p>

        <div className="flex flex-wrap gap-6">

          <a
            href="mailto:sm.18.gokul768@gmail.com"
            className="flex items-center gap-3 bg-slate-700 hover:bg-blue-500 transition px-6 py-4 rounded-2xl"
          >
            <FaEnvelope size={22} />
            Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="flex items-center gap-3 bg-slate-700 hover:bg-blue-500 transition px-6 py-4 rounded-2xl"
          >
            <FaGithub size={22} />
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="flex items-center gap-3 bg-slate-700 hover:bg-blue-500 transition px-6 py-4 rounded-2xl"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact