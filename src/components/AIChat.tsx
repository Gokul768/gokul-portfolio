import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";

import axios from "axios";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaRobot,
  FaTimes,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import {
  HiSparkles,
} from "react-icons/hi2";

interface Message {
  sender: "bot" | "user";
  text: string;
}

const portfolioContext = `
You are Gokulkumar's Professional AI Career Assistant.

You only answer questions related to Gokul.

You are friendly, professional and modern.

Never answer unrelated questions.

--------------------------------------

Name

Gokulkumar M

Role

MERN Stack Developer

Full Stack Developer

AI Integration Developer

Experience

9+ Months Internship Experience

Education

B.Tech Artificial Intelligence and Data Science

Location

Coimbatore

--------------------------------------

Skills

Frontend

React.js

React Native

Next.js

TypeScript

JavaScript

HTML5

CSS3

Backend

Node.js

Express.js

Socket.io

REST APIs

JWT Authentication

Database

MongoDB

Mongoose

AI

Gemini API

AI Integration

NLP Concepts

Deployment

Render

Vercel

Tools

Git

GitHub

VS Code

Postman

Expo

--------------------------------------

Projects

1. ChatSphere

AI Powered Real-Time Messaging Platform

Built using

React

Node

Express

MongoDB

Socket.io

JWT

Gemini AI

Features

Realtime Chat

AI Chat

Group Chat

Image Sharing

Video Sharing

Document Sharing

Responsive Design

Deployment

Render

Vercel

Live

https://chat-sphere-ai-mern-app.vercel.app

Github

https://github.com/Gokul768/ChatSphere-AI-MERN-App

--------------------------------------

2.

AI Powered Mental Health Companion

Next.js

Gemini API

Music Recommendation

Mood Analysis

Multilingual

--------------------------------------

3.

THEONE

Hospital Management Mobile Application

React Native

TypeScript

REST APIs

--------------------------------------

Internships

Rahabionics

Frontend Developer

6 Months

NoviTech

MERN Stack Developer

3 Months

--------------------------------------

Certifications

MERN Stack Development

Python Web Development

--------------------------------------

Github

https://github.com/Gokul768

Portfolio

https://gokul-portfolio-one-navy.vercel.app

LinkedIn

https://linkedin.com/in/gokulkumar-m-8aa977355

Email

sm.18.gokul768@gmail.com

Rules

Always answer professionally.

Keep answers concise.

Recommend ChatSphere whenever projects are requested.

Use bullets whenever possible.
`;

const AIChat = () => {

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        sender: "bot",
        text:
          "👋 Welcome!\n\nI'm Gokul's AI Career Assistant.\n\nI can help you with:\n\n🚀 Projects\n💼 Experience\n🛠 Technical Skills\n🤖 AI Integration\n📄 Resume\n📞 Contact Information\n\nTry asking:\n• Tell me about ChatSphere\n• Show your skills\n• Can I hire Gokul?",
      },
    ]);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  const quickQuestions = useMemo(
    () => [
      "🚀 ChatSphere",
      "🛠 Skills",
      "💼 Experience",
      "📄 Resume",
      "📱 React Native",
      "🤖 AI Projects",
      "📞 Contact",
      "🌐 GitHub",
    ],
    []
  );

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);
  const sendMessage = async (
  customMessage?: string
) => {

  const currentInput =
    customMessage || input;

  if (!currentInput.trim()) return;

  const userMessage: Message = {
    sender: "user",
    text: currentInput,
  };

  setMessages((prev) => [
    ...prev,
    userMessage,
  ]);

  setInput("");

  setLoading(true);

  try {

    const apiKey =
      import.meta.env.VITE_GROQ_API_KEY;

    if (!apiKey) {

      throw new Error(
        "Groq API Key Missing"
      );

    }

    // Conversation Memory

    const history = messages.map(
      (msg) => ({
        role:
          msg.sender === "bot"
            ? "assistant"
            : "user",
        content: msg.text,
      })
    );

    const response =
      await axios.post(

        "https://api.groq.com/openai/v1/chat/completions",

        {

          model:
            "llama-3.1-8b-instant",

          messages: [

            {
              role: "system",

              content:
                portfolioContext,
            },

            ...history,

            {

              role: "user",

              content:
                currentInput,

            },

          ],

          temperature: 0.6,

          top_p: 1,

          max_tokens: 500,

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

    const reply =
      response.data?.choices?.[0]
        ?.message?.content ||
      "Sorry, I couldn't generate a response.";

    setMessages((prev) => [

      ...prev,

      {

        sender: "bot",

        text: reply,

      },

    ]);

  }

  catch (error: any) {

    console.log(error);

    let errorMessage =
      "❌ Something went wrong.";

    if (
      error?.response?.status === 401
    ) {

      errorMessage =
        "❌ Invalid Groq API Key.";

    }

    else if (
      error?.response?.status === 429
    ) {

      errorMessage =
        "⏳ Too many requests. Please wait a moment.";

    }

    else if (
      error?.response?.status >= 500
    ) {

      errorMessage =
        "⚠️ AI Server is currently unavailable.";

    }

    setMessages((prev) => [

      ...prev,

      {

        sender: "bot",

        text: errorMessage,

      },

    ]);

  }

  finally {

    setLoading(false);

  }

};

const handleQuickQuestion = (question: string) => {
  sendMessage(question);
};

return (
  <>
    {/* Floating AI Button */}

    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => setOpen(!open)}
      className="
      fixed
      bottom-8
      right-8
      z-50
      w-16
      h-16
      rounded-full
      bg-gradient-to-r
      from-blue-600
      via-indigo-600
      to-cyan-500
      shadow-[0_0_40px_rgba(59,130,246,.45)]
      flex
      items-center
      justify-center
      text-white"
    >
      {open ? <FaTimes size={22} /> : <FaRobot size={28} />}
    </motion.button>

    <AnimatePresence>

      {open && (

        <motion.div

          initial={{
            opacity: 0,
            y: 60,
            scale: 0.85,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            y: 60,
            scale: 0.85,
          }}

          transition={{
            duration: 0.3,
          }}

          className="
          fixed
          bottom-24
          right-6
          w-[400px]
          max-w-[95vw]
          h-[650px]
          max-h-[88vh]
          rounded-[28px]
          bg-slate-900/95
          border
          border-slate-700
          backdrop-blur-2xl
          shadow-[0_20px_70px_rgba(59,130,246,.25)]
          flex
          flex-col
          overflow-hidden
          z-50"
        >

          {/* HEADER */}

          <div
            className="
            relative
            shrink-0
            overflow-hidden
            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-cyan-500"
          >

            <div className="absolute inset-0 bg-white/10 backdrop-blur-md" />

            <div className="relative flex items-center justify-between px-6 py-5">

              <div className="flex items-center gap-4">

                <div
                  className="
                  w-14
                  h-14
                  rounded-full
                  bg-white/20
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  text-2xl"
                >
                  🤖
                </div>

                <div>

                  <h2 className="text-lg font-bold text-white">

                    AI Career Assistant

                  </h2>

                  <div className="flex items-center gap-2 mt-1">

                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

                    <span className="text-xs text-white/80">

                      Online • Powered by Groq

                    </span>

                  </div>

                </div>

              </div>

              <button

                onClick={() => setOpen(false)}

                className="
                w-10
                h-10
                rounded-xl
                bg-white/10
                hover:bg-white/20
                transition"

              >

                <FaTimes className="mx-auto text-white" />

              </button>

            </div>

          </div>

          {/* CHAT AREA */}

          <div
            className="
            flex-1
            overflow-y-auto
            overflow-x-hidden
            px-5
            py-5
            space-y-5
            scroll-smooth"
          >

            {/* WELCOME CARD */}

            {messages.length === 1 && (

              <div
                className="
                rounded-3xl
                border
                border-slate-700
                bg-gradient-to-br
                from-slate-800
                to-slate-900
                p-5"
              >

                <div className="flex items-center gap-3">

                  <div className="text-3xl">

                    ✨

                  </div>

                  <div>

                    <h3 className="font-bold text-lg">

                      Welcome!

                    </h3>

                    <p className="text-sm text-slate-400">

                      Explore Gokul's portfolio with AI.

                    </p>

                  </div>

                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">

                  {quickQuestions.map((item) => (

                    <button

                      key={item}

                      onClick={() =>
                        handleQuickQuestion(item)
                      }

                      className="
                      rounded-xl
                      bg-slate-800
                      hover:bg-blue-600
                      border
                      border-slate-700
                      transition
                      text-xs
                      py-3
                      px-3"

                    >

                      {item}

                    </button>

                  ))}

                </div>

              </div>

            )}

            {/* Messages */}

            {messages.map((message, index) => (

              <motion.div

                key={index}

                initial={{
                  opacity: 0,
                  y: 15,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.25,
                }}

                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}

              >

                <div

                  className={`

                  max-w-[85%]

                  rounded-3xl

                  px-5

                  py-4

                  whitespace-pre-line

                  leading-7

                  shadow-lg

                  ${
                    message.sender === "user"

                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"

                      : "bg-slate-800 text-white border border-slate-700"

                  }

                  `}

                >

                  {message.text}

                </div>

              </motion.div>

            ))}

            {/* AI Loading */}

            {loading && (

            <div className="flex">

            <div className="bg-slate-800 border border-slate-700 rounded-3xl px-5 py-4">

            <div className="flex gap-2">

            <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-bounce"/>

            <div
            className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-bounce"
            style={{
            animationDelay:"0.2s",
            }}
            />

            <div
            className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce"
            style={{
            animationDelay:"0.4s",
            }}
            />

            </div>

            </div>

            </div>

            )}

            <div ref={messagesEndRef} />

          </div>

{/* INPUT */}

<div
  className="
  border-t
  border-slate-700
  bg-slate-900
  p-4
  shrink-0"
>

<div className="flex gap-3">

<input

type="text"

value={input}

onChange={(e)=>
setInput(e.target.value)
}

onKeyDown={(e)=>{

if(e.key==="Enter"){

sendMessage();

}

}}

placeholder="Ask me anything..."

className="

flex-1

bg-slate-800

border

border-slate-700

rounded-2xl

px-5

py-4

outline-none

focus:border-blue-500

transition"

/>

<motion.button

whileTap={{
scale:0.9,
}}

whileHover={{
scale:1.05,
}}

disabled={loading}

onClick={()=>
sendMessage()
}

className="

w-14

h-14

rounded-2xl

bg-gradient-to-r

from-blue-600

to-cyan-500

flex

items-center

justify-center

shadow-xl

disabled:opacity-50"

>

<FaPaperPlane/>

</motion.button>

</div>

</div>

</motion.div>

)}

</AnimatePresence>

</>

);

};

export default AIChat;