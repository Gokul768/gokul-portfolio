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
  className="text-blue-400"
>
  sm.18.gokul768@gmail.com
</a>

         <a
  href="https://github.com/Gokul768"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

          <a
  href="https://www.linkedin.com/in/gokulkumar-m-8aa977355"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

        </div>

      </div>

    </section>
  )
}

export default Contact