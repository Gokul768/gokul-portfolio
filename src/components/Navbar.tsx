import { useState, useEffect } from "react";

import {
  HiMenu,
  HiX,
} from "react-icons/hi";

import resume from "../assets/resume.pdf";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("home");

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "certifications",
        "contact",
      ];

      sections.forEach((section) => {

        const element =
          document.getElementById(section);

        if (element) {

          const top =
            element.offsetTop - 120;

          const height =
            element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY <
              top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  const navItems = [
    "about",
    "skills",
    "projects",
    "experience",
    "certifications",
    "contact",
  ];

  return (

    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/70 border-b border-slate-800 shadow-lg">

      <div className="flex items-center justify-between px-6 md:px-16 py-5">

        {/* LOGO */}

        <a
          href="#home"
          className="text-3xl font-bold text-blue-500 tracking-wide"
        >

          GOKUL

        </a>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">

          {navItems.map((item) => (

            <a
              key={item}
              href={`#${item}`}
            >

              <li
                className={`capitalize hover:text-blue-400 transition duration-300 ${
                  active === item
                    ? "text-blue-500"
                    : ""
                }`}
              >

                {item}

              </li>

            </a>

          ))}

        </ul>

        {/* RESUME BUTTON */}

        <a
          href={resume}
          download
          className="hidden md:block"
        >

          <button className="bg-blue-500 hover:bg-blue-600 hover:scale-105 transition duration-300 px-5 py-2 rounded-xl font-semibold shadow-lg">

            Resume

          </button>

        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
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

          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 px-6 pb-6">

            <ul className="flex flex-col gap-6 text-gray-300 font-medium pt-6">

              {navItems.map((item) => (

                <a
                  key={item}
                  href={`#${item}`}

                  onClick={() =>
                    setMenuOpen(false)
                  }
                >

                  <li
                    className={`capitalize hover:text-blue-400 transition duration-300 ${
                      active === item
                        ? "text-blue-500"
                        : ""
                    }`}
                  >

                    {item}

                  </li>

                </a>

              ))}

              {/* RESUME */}

              <a
                href={resume}
                download

                onClick={() =>
                  setMenuOpen(false)
                }
              >

                <button className="bg-blue-500 hover:bg-blue-600 transition duration-300 px-5 py-3 rounded-xl font-semibold w-full shadow-lg">

                  Download Resume

                </button>

              </a>

            </ul>

          </div>

        )
      }

    </nav>
  );
};

export default Navbar;