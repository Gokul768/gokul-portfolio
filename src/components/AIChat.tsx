import { useState, useRef, useEffect } from "react";

import axios from "axios";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
} from "react-icons/fa";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const AIChat = () => {

  const [open, setOpen] =
    useState(false);

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        sender: "bot",

        text:
          "Hi 👋 I'm Gokul's AI Assistant. Ask me about skills, projects, internships, technologies or contact info 🚀",
      },
    ]);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  // SEND MESSAGE

  const sendMessage = async () => {

    if (!input.trim()) return;

    const currentInput = input;

    // ADD USER MESSAGE

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: currentInput,
      },
    ]);

    setInput("");

    setLoading(true);

    try {

      const apiKey =
        import.meta.env
          .VITE_GROQ_API_KEY;

      // CHECK API KEY

      if (!apiKey) {

        throw new Error(
          "Groq API Key Missing"
        );
      }

      const response =
        await axios.post(

          "https://api.groq.com/openai/v1/chat/completions",

          {
            model:
              "llama-3.1-8b-instant",

            messages: [

              {
                role: "system",

                content: `
You are Gokulkumar's Professional AI Portfolio Assistant.

Rules:
- Answer professionally
- Keep answers short
- Be friendly and modern
- Focus only on Gokul portfolio

About Gokul:
- MERN Stack Developer
- React Native Developer
- AI Powered Full Stack Developer

Skills:
React.js
React Native
TypeScript
JavaScript
Node.js
Express.js
MongoDB
Tailwind CSS
Firebase
REST APIs
Git & GitHub

Projects:
1. AI Mental Health Companion
2. Physiotherapy Mobile App
3. MERN Task Manager

Internships:
- Frontend Developer Intern
- MERN Stack Intern
- Python Full Stack Intern

Education:
B.Tech Artificial Intelligence and Data Science

GitHub:
https://github.com/Gokul768

LinkedIn:
https://linkedin.com/in/gokulkumar-m-8aa977355

Email:
sm.18.gokul768@gmail.com
                `,
              },

              {
                role: "user",

                content:
                  currentInput,
              },

            ],

            temperature: 0.7,

            max_tokens: 300,
          },

          {
            headers: {

              Authorization:
                `Bearer ${apiKey}`,

              "Content-Type":
                "application/json",
            },
          }
        );

      console.log(
        "GROQ RESPONSE:",
        response.data
      );

      const botReply =
        response.data?.choices?.[0]
          ?.message?.content
        || "No response from AI.";

      // ADD BOT MESSAGE

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
        },
      ]);

    } catch (error: any) {

      console.log(
        "FULL GROQ ERROR:",
        error
      );

      console.log(
        "ERROR DATA:",
        error?.response?.data
      );

      let errorMessage =
        "❌ AI Assistant failed.";

      if (
        error?.response?.status === 401
      ) {

        errorMessage =
          "❌ Invalid Groq API Key.";

      } else if (
        error?.response?.status === 429
      ) {

        errorMessage =
          "❌ Too many requests. Please wait.";

      } else if (
        error?.response?.status === 400
      ) {

        errorMessage =
          "❌ Bad request to Groq API.";

      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: errorMessage,
        },
      ]);

    }

    setLoading(false);
  };

  return (

    <>

      {/* FLOAT BUTTON */}

      <motion.button

        whileHover={{
          scale: 1.1,
        }}

        whileTap={{
          scale: 0.9,
        }}

        onClick={() =>
          setOpen(!open)
        }

        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 shadow-2xl flex items-center justify-center"
      >

        {
          open
            ? <FaTimes size={24} />
            : <FaRobot size={28} />
        }

      </motion.button>

      {/* CHAT WINDOW */}

      <AnimatePresence>

        {
          open && (

            <motion.div

              initial={{
                opacity: 0,
                y: 100,
                scale: 0.8,
              }}

              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}

              exit={{
                opacity: 0,
                y: 100,
                scale: 0.8,
              }}

              transition={{
                duration: 0.4,
              }}

              className="fixed bottom-28 right-8 w-[380px] h-[620px] bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-3xl shadow-2xl overflow-hidden z-50 flex flex-col"
            >

              {/* HEADER */}

              <div className="bg-blue-500 px-6 py-5 flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">

                  🤖

                </div>

                <div>

                  <h1 className="font-bold text-lg">

                    AI Portfolio Assistant

                  </h1>

                  <p className="text-sm text-white/80">

                    Powered by Groq AI

                  </p>

                </div>

              </div>

              {/* QUICK BUTTONS */}

              <div className="flex flex-wrap gap-2 p-4 border-b border-slate-700">

                {[
                  "Skills",
                  "Projects",
                  "Internships",
                  "GitHub",
                  "Contact",
                ].map((item, index) => (

                  <button
                    key={index}

                    onClick={() =>
                      setInput(item)
                    }

                    className="bg-slate-800 hover:bg-blue-500 transition px-4 py-2 rounded-full text-xs"
                  >

                    {item}

                  </button>

                ))}

              </div>

              {/* CHAT AREA */}

             <div
  className="
    flex-1
    overflow-y-auto
    overflow-x-hidden
    p-5
    space-y-5
    scroll-smooth

    scrollbar-thin
    scrollbar-thumb-blue-500
    scrollbar-track-slate-800
  "
> 

                {messages.map((msg, index) => (

                  <div
                    key={index}

                    className={`max-w-[85%] px-5 py-4 rounded-3xl whitespace-pre-line text-sm leading-7 shadow-lg ${
                      msg.sender === "bot"
                        ? "bg-slate-800 text-white"
                        : "bg-blue-500 text-white ml-auto"
                    }`}
                  >

                    {msg.text}

                  </div>

                ))}

                {
                  loading && (

                    <div className="bg-slate-800 text-white px-5 py-4 rounded-3xl text-sm w-fit">

                      <div className="flex gap-2 items-center">

                        <span className="animate-bounce">
                          ●
                        </span>

                        <span
                          className="animate-bounce"
                          style={{
                            animationDelay: "0.2s",
                          }}
                        >
                          ●
                        </span>

                        <span
                          className="animate-bounce"
                          style={{
                            animationDelay: "0.4s",
                          }}
                        >
                          ●
                        </span>

                      </div>

                    </div>

                  )
                }

                <div ref={messagesEndRef}></div>

              </div>

              {/* INPUT */}

              <div className="p-4 border-t border-slate-700 flex items-center gap-3">

                <input
                  type="text"

                  value={input}

                  onChange={(e) =>
                    setInput(
                      e.target.value
                    )
                  }

                  onKeyDown={(e) => {

                    if (
                      e.key === "Enter"
                    ) {

                      sendMessage();
                    }
                  }}

                  placeholder="Ask AI something..."

                  className="flex-1 bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-blue-500"
                />

                <button

                  onClick={sendMessage}

                  disabled={loading}

                  className="bg-blue-500 hover:bg-blue-600 transition w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg disabled:opacity-50"
                >

                  <FaPaperPlane />

                </button>

              </div>

            </motion.div>

          )
        }

      </AnimatePresence>

    </>
  );
};

export default AIChat;