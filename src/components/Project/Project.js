import React from "react";
import img1 from "../../images/Capture.PNG";
import img2 from "../../images/Capture2.PNG";
import img3 from "../../images/Capture3.PNG";

const Project = () => {
  return (
    <div
      id="project"
      className="bg-gradient-to-r from-gray-700 via-gray-900 to-black lg:h-screen p-10"
    >
      <div className="text-4xl text-center pt-10 lg:pt-10 lg:text-5xl font-bold leading-tight lg:w-2/5 mx-auto bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-transparent bg-clip-text">
        My Projects
      </div>
      <p className="divider"></p>

      <div className="grid lg:grid-cols-3 gap-10 mt-16">
        <div
          data-aos="zoom-in"
          className="max-w-sm bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <img className="rounded-t-lg" src={img1} alt="" />

          <div className="p-5 flex items-center justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fresh Mart
            </h5>
            <button className="inline-flex items-center  text-sm font-thin text-center text-white btn btn-xs rounded-lg ">
              Explore more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <img className="rounded-t-lg" src={img2} alt="" />

          <div className="p-5 flex items-center justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ToolSite.com
            </h5>
            <button className="inline-flex items-center  text-sm font-thin text-center text-white btn btn-xs rounded-lg ">
              Explore more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          data-aos="zoom-out-up"
          className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700"
        >
          <img className="rounded-t-lg  h-2/3" src={img3} alt="" />

          <div className="p-5 flex items-center justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Wilde Lodge
            </h5>
            <button className="inline-flex items-center  text-sm font-thin text-center text-white btn btn-xs rounded-lg ">
              Explore more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
