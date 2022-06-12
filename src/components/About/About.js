import React from "react";
import img from "../../images/IMG20210622150113_00.jpg";

const About = () => {
  return (
    <div id="about" className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 p-5 lg:p-10 text-gray-100">
      <div className="divider text-4xl text-center mb-10 pt-12 lg:text-5xl font-bold leading-tight lg:w-2/5 mx-auto">
        About
      </div>

      <div className="hero bg-base-200 rounded-lg p-5">
        <div className="hero-content flex-col lg:flex-row lg:w-4/5" >
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl w-8/12 lg:w-1/2 border-4 hover:border-sky-200 hover:scale-110 duration-700 ease-in-out border-white"
            alt="" data-aos="zoom-in"
          />
          <div>
            <h1 className="text-3xl font-bold">Merazul Ehsan Sowad</h1>
            <p className="py-6 text-justify">
              Hi! I'm a <strong className="text-[#08fdd8]">MARN Stack Developer</strong> located in Bangladesh. I am specialized in javascript stack i.e. Node.js, React.js, Express.js. Also fimiliar with UI/UX design, MongoDB, Firebase, Next.js, TypeScript etc. I'm Self-Confident & positive, Willing to gain new experience and new challenges, Ability to work independently and in concert with other.
            </p>
            <button onClick={()=>window.location.href='https://drive.google.com/file/d/19JB0pOIDk1QcBaHgqK1HPTFPUsc7T4Ks/view?usp=sharing'} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
