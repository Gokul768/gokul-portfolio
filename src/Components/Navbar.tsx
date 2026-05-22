import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import resume from "../assets/resume.pdf";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900 shadow-lg">

      <div className="flex items-center justify-between px-6 md:px-16 py-5">

        {/* LOGO */}

        <a
          href="#home"
          className="text-2xl font-bold text-blue-500"
        >
          GOKUL
        </a>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a href="#about">
            <li className="hover:text-blue-400 transition">
              About
            </li>
          </a>

          <a href="#skills">
            <li className="hover:text-blue-400 transition">
              Skills
            </li>
          </a>

          <a href="#projects">
            <li className="hover:text-blue-400 transition">
              Projects
            </li>
          </a>

          <a href="#contact">
            <li className="hover:text-blue-400 transition">
              Contact
            </li>
          </a>

        </ul>

        {/* RESUME BUTTON */}

        <a
          href={resume}
          download
          className="hidden md:block"
        >
          <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold">
            Resume
          </button>
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {
            menuOpen
              ? <HiX size={32} />
              : <HiMenu size={32} />
          }
        </button>

      </div>

      {/* MOBILE MENU */}

      {
        menuOpen && (
          <div className="md:hidden bg-slate-800 px-6 pb-6">

            <ul className="flex flex-col gap-6 text-gray-300 font-medium">

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
              >
                <li>About</li>
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                <li>Skills</li>
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                <li>Projects</li>
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                <li>Contact</li>
              </a>

              <a
                href={resume}
                download
                onClick={() => setMenuOpen(false)}
              >
                <button className="bg-blue-500 hover:bg-blue-600 transition px-5 py-2 rounded-xl font-semibold w-full">
                  Resume
                </button>
              </a>

            </ul>

          </div>
        )
      }

    </nav>
  )
}

export default Navbar;