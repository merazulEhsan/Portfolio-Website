import React from "react";
import img3 from "../../images/Collage Maker-05-Dec-2022-09.40-PM.jpg";
import img4 from "../../images/Collage Maker-05-Dec-2022-09.35-PM.jpg";
import img2 from "../../images/Collage Maker-06-Dec-2022-03.53-PM.jpg";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-gradient-to-tr from-black via-black to-purple-900 lg:h-screen p-3 md:p-6 lg:p-10"
    >
      <div className="text-4xl text-center pt-10 lg:pt-10 lg:text-5xl font-bold leading-tight lg:w-2/5 mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-transparent bg-clip-text font-cinzel">
        Recent Projects
      </div>
      <p className="divider"></p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center mt-20 container m-auto">
        <div className="relative group ">
          <div className="overflow-hidden cursor-pointer rounded-md shadow-lg">
            <img
              className="hover:scale-110 duration-500 ease-in-out"
              src={img4}
              alt=""
            />
          </div>
          <div className="absolute w-full p-2 group-hover:duration-500 group-hover:transition-all ease-in-out group-hover:bottom-0 h-16 backdrop-blur-sm bg-gradient-to-tr from-cyan-500 via-cyan-100 to-white bg-opacity-70 invisible group-hover:visible">
            <div className="grid grid-cols-2 justify-between gap-5">
              <p className="xl:text-lg text-sm  text-black font-serif font-semibold">
                Cashless Restaurent
              </p>
              <div className="grid grid-cols-3 justify-items-center">
                <a
                  href="https://cashless-restaurant.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Live"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/CashLess-Restaurant"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Clint Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/Cashless-Restaurant-Server"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Server Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group ">
          <div className="overflow-hidden cursor-pointer rounded-md shadow-lg">
            <img
              className="hover:scale-110 duration-500 ease-in-out"
              src={img3}
              alt=""
            />
          </div>
          <div className="absolute w-full p-2 group-hover:duration-500 group-hover:transition-all ease-in-out group-hover:bottom-0 h-16 backdrop-blur-sm bg-gradient-to-tr from-cyan-500 via-cyan-100 to-white bg-opacity-70 invisible group-hover:visible">
            <div className="grid grid-cols-2 justify-between gap-5">
              <p className="text-lg text-black font-serif font-semibold">
                ToolSite
              </p>
              <div className="grid grid-cols-3 justify-items-center">
                <a
                  href="https://toolsite-82cbd.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Live"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/ToolSite-Client-Side"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Clint Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/ToolSite-Server-Site"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Server Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative group ">
          <div className="overflow-hidden cursor-pointer rounded-md shadow-lg">
            <img
              className="hover:scale-110 duration-500 ease-in-out"
              src={img2}
              alt=""
            />
          </div>
          <div className="absolute w-full p-2 group-hover:duration-500 group-hover:transition-all ease-in-out group-hover:bottom-0 h-16 backdrop-blur-sm bg-gradient-to-tr from-cyan-500 via-cyan-100 to-white bg-opacity-70 invisible group-hover:visible">
            <div className="grid grid-cols-2 justify-between gap-5">
              <p className="text-lg text-black font-serif font-semibold">
                Fresh Mart
              </p>
              <div className="grid grid-cols-3 justify-items-center">
                <a
                  href="https://fresh-mart-958e0.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Live"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-5 h-5 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.902 4.098a3.75 3.75 0 00-5.304 0l-4.5 4.5a3.75 3.75 0 001.035 6.037.75.75 0 01-.646 1.353 5.25 5.25 0 01-1.449-8.45l4.5-4.5a5.25 5.25 0 117.424 7.424l-1.757 1.757a.75.75 0 11-1.06-1.06l1.757-1.757a3.75 3.75 0 000-5.304zm-7.389 4.267a.75.75 0 011-.353 5.25 5.25 0 011.449 8.45l-4.5 4.5a5.25 5.25 0 11-7.424-7.424l1.757-1.757a.75.75 0 111.06 1.06l-1.757 1.757a3.75 3.75 0 105.304 5.304l4.5-4.5a3.75 3.75 0 00-1.035-6.037.75.75 0 01-.354-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/Fresh-Mart-Client-Side"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Clint Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </a>
                <a
                  href="https://github.com/merazul2755/Fresh-Mart-Server-Side"
                  target="_blank"
                  rel="noreferrer"
                  data-tip="Server Site Code"
                  className="tooltip text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1.5 py-1.5 text-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
