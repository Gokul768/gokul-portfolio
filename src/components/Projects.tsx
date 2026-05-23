import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const projects = [
  {
    image: project1,
    title: "AI Mental Health Companion",
    tech: "React Native • Node.js • MongoDB",
    description:
      "AI-powered mental health support mobile application with chatbot integration.",
    github: "https://github.com/Gokul768/ai-mental-health-companion",
    demo: "https://github.com/Gokul768",
  },

  {
    image: project2,
    title: "Physiotherapy Mobile App",
    tech: "React Native • TypeScript",
    description:
      "Responsive physiotherapy management application for clinics and patients.",
    github: "https://github.com/Gokul768/physio-app",
    demo: "https://github.com/Gokul768",
  },

  {
    image: project3,
    title: "MERN Task Manager",
    tech: "React • Express • MongoDB",
    description:
      "Full-stack task management system with authentication and CRUD operations.",
    github: "https://github.com/Gokul768/task-manager",
    demo: "https://github.com/Gokul768",
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20"
    >

      <h1 className="text-4xl font-bold text-blue-500 mb-12">
        Projects
      </h1>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-3xl overflow-hidden shadow-xl hover:-translate-y-3 hover:shadow-blue-500/20 transition duration-300"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-8">

              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>

              <p className="text-blue-400 mb-4">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                >
                  <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl">
                    GitHub
                  </button>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                >
                  <button className="border border-blue-500 hover:bg-blue-500 transition px-5 py-2 rounded-xl">
                    Demo
                  </button>
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects;