import React, { useEffect, useState } from "react";

const NavMenu = () => {
  const [nav, setNav] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `Sowad-Portfolio ${title}`;
  }, [title]);

  const changeBg = () => {
    if (window.scrollY >= 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBg);

  const home = document.getElementById("home");
  const about = document.getElementById("about");
  const project = document.getElementById("project");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");
  const contact = document.getElementById("contact");

  // "navbar w-full fixed shadow-lg z-50 border-b-2 border-teal-400 bg-base-100 text-white"

  return (
    <div
      className={
        nav
          ? "navbar w-full fixed z-20  bg-[#040c16] text-white transition-all duration-1000 ease-in-out drop-shadow-xl"
          : "navbar w-full fixed z-20 bg-transparent text-white"
      }
    >
      <div className="container mx-auto xl:px-32 md:px-6  items-center max-w-[1536px]">
        <div className="navbar-start ">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-sm text-center dropdown-content mt-2 p-4 shadow-2xl bg-[#040c16] w-screen border-t border-gray-500 -ml-2 md:-ml-8 space-y-5"
            >
              <li onClick={() => home.scrollIntoView({ behavior: "smooth" })}>
                Home
              </li>

              <li onClick={() => about.scrollIntoView({ behavior: "smooth" })}>
                About
              </li>

              <li
                onClick={() => project.scrollIntoView({ behavior: "smooth" })}
              >
                Projects
              </li>
              <li onClick={() => skills.scrollIntoView({ behavior: "smooth" })}>
                Skills
              </li>
              <li
                onClick={() => education.scrollIntoView({ behavior: "smooth" })}
              >
                Education
              </li>
              <li
                onClick={() => contact.scrollIntoView({ behavior: "smooth" })}
              >
                Contact
              </li>
            </ul>
          </div>
          <span
            onClick={() => home.scrollIntoView({ behavior: "smooth" })}
            className="text-xl md:text-2xl font-bold font-grotesk tracking-wider cursor-pointer"
          >
            <span className="bg-blue-600 py-.1 px-1 rounded">S</span>OWAD.
          </span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal tracking-wider p-0 font-grotesk uppercase text-sm scroll-smooth">
            <li
              onClick={() => {
                setTitle("");
                home.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                Home
              </span>
            </li>
            <li
              onClick={() => {
                setTitle("| About");
                about.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                About
              </span>
            </li>
            <li
              onClick={() => {
                setTitle("| Projects");
                project.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                Projects
              </span>
            </li>

            <li
              onClick={() => {
                setTitle("| Skills");
                skills.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                Skills
              </span>
            </li>
            <li
              onClick={() => {
                setTitle("| Education");
                education.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                Education
              </span>
            </li>
            <li
              onClick={() => {
                setTitle("| Contact");
                contact.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative after:transition-all after:ease-linear after:duration-500 after:bg-white after:content-[''] after:w-0 hover:after:w-full focus:after:w-full after:h-[1.5px] after:rounded-full after:absolute after:left-0 after:bottom-2">
                Contact
              </span>
            </li>
          </ul>
        </div>
        <div className="navbar-end  lg:pr-5 flex justify-end items-center">
          <a
            href="https://github.com/merazulEhsan"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white pr-3 transition ease-linear duration-500"
            rel="noreferrer"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/merazul-ehsan-sowad-922a201a6/"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white pr-3 transition ease-linear duration-500"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/sowad21"
            target="_blank"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition ease-linear duration-500"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
