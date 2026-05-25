import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}

      transition={{
        delay: 2,
        duration: 1,
      }}

      className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[9999] pointer-events-none"
    >

      <motion.div

        initial={{
          scale: 0.8,
          opacity: 0,
        }}

        animate={{
          scale: 1,
          opacity: 1,
        }}

        transition={{
          duration: 1,
        }}

        className="text-center"
      >

        {/* NAME */}

        <h1 className="text-5xl md:text-7xl font-extrabold text-blue-500 tracking-widest">

          GOKULKUMAR

        </h1>

        {/* SUBTEXT */}

        <p className="mt-6 text-gray-400 text-lg tracking-[6px] uppercase">

          Loading Portfolio...

        </p>

        {/* LOADING BAR */}

        <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden mt-10 mx-auto">

          <motion.div

            initial={{ width: 0 }}

            animate={{ width: "100%" }}

            transition={{
              duration: 1.8,
            }}

            className="h-full bg-blue-500 rounded-full"
          />

        </div>

      </motion.div>

    </motion.div>
  );
};

export default Loader;