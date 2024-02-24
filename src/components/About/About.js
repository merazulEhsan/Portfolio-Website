import React from "react";
import img from "../../images/20230304_193918-1.jpg";
import effect from "../../images/effect-1.svg";
const About = () => {
  return (
    <div
      id="about"
      className="bg-gradient-to-r from-[#07233b] from-1.67% via-[#041d34] via-58.95% to-[#050c16] to-80.48% min-h-screen 2xl:min-h-full 2xl:py-32 text-gray-100 font-grotesk"
    >
      <div className="container mx-auto lg:px-16 md:px-8 xl:pt-20 ">
        <div className="hero rounded-lg pt-16 relative">
          {/* Effect */}
          <div className="absolute -left-24 -bottom-20 p-5 hidden lg:block">
            <img className="animate-spin-slow" src={effect} alt="" />
          </div>
          <div className="absolute right-10 top-0 hidden lg:block">
            <img className="animate-spin-slow  h-40 w-40" src={effect} alt="" />
          </div>

          {/* Card Contener */}
          <div className="hero-content xl:gap-x-20 flex-col md:flex-row">
            <img
              src={img}
              className="max-w-xs rounded-2xl shadow-2xl w-full border-4 hover:border-sky-200 hover:scale-110 duration-700 ease-in-out border-white m-auto"
              alt=""
              data-aos="zoom-in"
              data-aos-duration="2000"
            />
            <div className="pt-5 lg:mt-0">
              <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase ">
                About ME
              </span>
              <h1 className="text-2xl md:text-3xl font-bold uppercase mt-5">
                I am <span className="text-[#0788ff]">Merazul Ehsan Sowad</span>
              </h1>
              <p className="py-6 text-justify tracking-wider font-normal">
                I'm a
                <strong className="text-[#08fdd8]">
                  {" "}
                  MERN Stack Developer{" "}
                </strong>
                located in Bangladesh. I am specialized in javascript stack i.e.
                Node.js, React.js, Express.js. Also fimiliar with UI/UX design,
                MongoDB, Firebase, Next.js, TypeScript, Redux etc. I'm
                Self-Confident & positive, Willing to gain new experience and
                new challenges, Ability to work independently and in concert
                with other.
              </p>
              <button
                onClick={() =>
                  (window.location.href =
                    "https://drive.google.com/file/d/13nAX2XqIqKDlWmTCUNKeFrMCvwEzpsnc/view?usp=share_link")
                }
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Download Resume
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 lg:mt-20 px-4">
          <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase">
            My interests
          </span>

          <div className="mt-10 grid justify-between grid-flow-col">
            {/* <div className="group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-lg md:text-2xl tracking-wide invisible group-hover:visible transition-all">
                Coding
              </span>
            </div> */}

            <div className="group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-2xl tracking-wide invisible group-hover:visible">
                Coding
              </span>
            </div>

            <div className="group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-2xl tracking-wide invisible group-hover:visible">
                Travel
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-2xl tracking-wide invisible group-hover:visible">
                Travel
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM320-280q-66 0-113-47t-47-113v-400h200v96l-72 58q-2 2-8 16v170q0 8 6 14t14 6h160q8 0 14-6t6-14v-170q0-2-8-16l-72-58v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-2xl tracking-wide invisible group-hover:visible">
                Coffe
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-20 md:h-20 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 -960 960 960"
                  width="40"
                >
                  <path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-2xl tracking-wide invisible group-hover:visible">
                Travel
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
