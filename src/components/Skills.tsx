const skills = [
  "React.js",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Expo",
]

const Skills = () => {
  return (
    <section
  id="skills"
  className="px-6 md:px-20 py-20"
>

      <h1 className="text-4xl font-bold text-blue-500 mb-12">
        Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 hover:bg-blue-500 transition duration-300 p-6 rounded-2xl text-center shadow-lg cursor-pointer"
          >
            <h2 className="font-semibold text-lg">
              {skill}
            </h2>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Skills