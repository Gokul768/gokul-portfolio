import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Contact = () => {

  const form = useRef<HTMLFormElement>(null);

 const sendEmail = async (
  e: React.FormEvent
) => {

  e.preventDefault();

  if (!form.current) return;

  try {

    const result = await emailjs.sendForm(
      "service_xaklk1l",
      "template_4igfle6",
      form.current,
      "nX-qGjow_z9l05RBb"
    );

    console.log(result);

    alert("Message Sent Successfully 🚀");

    form.current.reset();

  } catch (error: any) {

  console.log(error);

  alert("Something went wrong ❌");
}
}; 

  return (
    <section
      id="contact"
      className="px-6 md:px-20 py-24"
    >

      {/* TITLE */}

      <motion.h1

        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}

        transition={{ duration: 0.8 }}

        className="text-4xl md:text-5xl font-bold text-blue-500 text-center mb-16"
      >

        Contact Me

      </motion.h1>

      {/* MAIN GRID */}

      <div className="grid lg:grid-cols-2 gap-14">

        {/* LEFT */}

        <motion.div

          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}

          className="bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl p-10 shadow-xl"
        >

          <h2 className="text-3xl font-bold mb-6">
            Let's Work Together 🚀
          </h2>

          <p className="text-gray-300 leading-8 mb-10">
            Open for internships, freelance projects,
            collaborations and full stack development opportunities.
          </p>

          {/* LINKS */}

          <div className="space-y-6">

            <a
              href="mailto:sm.18.gokul768@gmail.com"
              className="flex items-center gap-4 text-lg hover:text-blue-400 transition"
            >
              <FaEnvelope className="text-blue-500" />

              sm.18.gokul768@gmail.com
            </a>

            <a
              href="https://github.com/Gokul768"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg hover:text-blue-400 transition"
            >
              <FaGithub className="text-blue-500" />

              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/gokulkumar-m-8aa977355"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-lg hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-blue-500" />

              LinkedIn
            </a>

          </div>

        </motion.div>

        {/* RIGHT FORM */}

        <motion.form

          ref={form}

          onSubmit={sendEmail}

          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.8 }}

          className="bg-slate-800/70 border border-slate-700 backdrop-blur-lg rounded-3xl p-10 shadow-xl space-y-6"
        >

          {/* NAME */}

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required

            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition"
          />

          {/* EMAIL */}

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required

            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition"
          />

          {/* MESSAGE */}

          <textarea
            name="message"
            placeholder="Your Message"
            required

            rows={6}

            className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition resize-none"
          />

          {/* BUTTON */}

          <button
            type="submit"

            className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg w-full"
          >

            Send Message

          </button>

        </motion.form>

      </div>

    </section>
  );
};

export default Contact;