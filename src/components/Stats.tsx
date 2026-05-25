import { motion } from "framer-motion";

const stats = [

  {
    number: "10+",
    title: "Projects Completed",
  },

  {
    number: "3+",
    title: "Internships",
  },

  {
    number: "100%",
    title: "Responsive Designs",
  },

  {
    number: "2026",
    title: "Graduation Year",
  },

];

const Stats = () => {

  return (

    <section className="px-6 md:px-20 py-20">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (

          <motion.div

            key={index}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.6, delay: index * 0.2 }}

            className="bg-slate-800/70 border border-slate-700 rounded-3xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-xl"
          >

            <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">

              {item.number}

            </h1>

            <p className="text-gray-300 text-lg">

              {item.title}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Stats;