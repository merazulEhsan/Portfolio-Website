import React from "react";
import img from "../../images/20230304_193918-1.jpg";
import effect from "../../images/effect-1.svg";
import pdf from "../../images/my-resume.pdf";
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
                A few words about myself
              </span>
              <h1 className="text-2xl md:text-3xl font-bold uppercase mt-5">
                I am <span className="text-[#0788ff]">Merazul Ehsan Sowad</span>
              </h1>
              <p className="py-6 text-justify tracking-wider font-normal">
                I am self-taught passionate Web Developer specialized in{" "}
                <strong className="text-[#08fdd8]">
                  MERN Stack Web Development
                </strong>
                . As a MERN Stack Web Developer i can convert a Figma design to
                a pixel perfect responsive web application & give them life
                using ReactJS. I can develop REST APIs using Node.js, Express.js
                & MongoDB. Also connect them with front-end single page
                applications. I am very comfortable with Next.js framework and
                have sound knowledge in both clint & server side rendering.
              </p>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a href={pdf} rel="noopener noreferrer">
                    Download Resume
                  </a>
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
            <div className="group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current transition ease-linear duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-xl tracking-wide invisible group-hover:visible">
                Coding
              </span>
            </div>

            <div className="group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current transition ease-linear duration-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M57.063 20.218l1.029-1.698s.906-1.502.906-3.519c0-4.886-4.662-4.757-4.662-4.757L44.179 7.479L38.638 2l-7.291 1.985l-2.391-.651l-1.817 1.797l-10.497 2.858s-4.04-.111-4.04 4.123c0 1.748.786 3.05.786 3.05l1.351 2.23l-1.187 1.172l-5.86 1.596s-4.662-.129-4.662 4.757a7.56 7.56 0 0 0 .779 3.281L2 29.987l.949.376c.021.051.029.108.07.149c1.835 1.839 1.684 4.309 1.422 5.643l-1.109 1.111l8.401 4.039L23.271 60.35c1.849 2.906 5.774 1.088 5.774 1.088l29.649-14.256l-1.109-1.111c-.262-1.334-.413-3.804 1.422-5.644c.041-.041.049-.098.07-.148l.949-.377l-5.513-5.45l6.33-3.043l-.961-.963c-.227-1.156-.358-3.297 1.233-4.891c.035-.036.041-.084.06-.129l.825-.327l-4.937-4.881m-5.685-8.835l-1.25 1.978l-3.234-3.198l4.484 1.22M39.176 7.144l4.643 4.963l-16.789 6.067l-3.965-6.156l16.111-4.874M15.744 19.052l11.457 18.911l-21.827-8.658l10.37-10.253m-4.775 2.067l-1.345 1.33l-.538-.825l1.883-.505m-4.247 1.034l1.252 1.927l-2.713 2.682a5.586 5.586 0 0 1-.331-1.845c0-1.826.906-2.521 1.792-2.764M5.154 37.026l.015-.058l25.147 11.007l-24.95-11.894c.023-.135.041-.284.06-.434l19.533 8.18l-19.465-9.116a7.723 7.723 0 0 0-.086-1.245l18.079 7.445L5.165 32.4a6.048 6.048 0 0 0-.47-1.137l24.883 10.625l.566.934c1.167 1.834 3.284 1.495 4.351 1.177c1.475.728 4.119 2.412 3.442 4.893c-.357 1.312-1.142 1.948-2.399 1.948c-1.273 0-2.544-.666-2.557-.675L5.154 37.026M30.2 50.185l-1.966.814l-1.67-2.563l3.636 1.749m-7.614 5.381l-7.729-12.759l7.682 3.693l3.633 5.592c-1.465.626-3.102 2.055-3.586 3.474m34.033-12.184a7.731 7.731 0 0 0-.086 1.245l-19.465 9.116l19.533-8.18c.019.149.036.299.06.434l-24.95 11.895l25.147-11.007a.982.982 0 0 1 .015.058L29.046 60.08c-.013.009-1.282.675-2.557.675c-1.258 0-2.042-.637-2.399-1.948c-.918-3.367 4.302-5.276 4.38-5.305l4.575-1.952c.491.209 3.994 1.584 5.711-1.115l1.083-1.786l17.494-7.47a6.12 6.12 0 0 0-.471 1.137L38.54 50.827l18.079-7.445m.034-4.161l-14.825 6.144l4.114-6.791l6.767-3.253l3.944 3.9m2.393-11.107a6.9 6.9 0 0 0-.075 1.079l-16.868 7.9l16.928-7.089c.017.129.031.26.052.376L37.459 40.688l21.794-9.539a.46.46 0 0 1 .013.05L35.149 42.586c-.011.007-1.112.585-2.216.585c-1.091 0-1.77-.553-2.079-1.689c-.796-2.918 3.728-4.572 3.796-4.597l25.014-10.68a5.268 5.268 0 0 0-.407.986l-15.88 7.376l15.669-6.453"></path>
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-xl tracking-wide invisible group-hover:visible">
                Reading
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current transition ease-linear duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="m274-274-128-70 42-42 100 14 156-156-312-170 56-56 382 98 157-155q17-17 42.5-17t42.5 17q17 17 17 42.5T812-726L656-570l98 382-56 56-170-312-156 156 14 100-42 42-70-128Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-xl tracking-wide invisible group-hover:visible">
                Travel
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current transition ease-linear duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  viewBox="0 -960 960 960"
                  width="32"
                >
                  <path d="M160-120v-80h640v80H160Zm560-520h80v-120h-80v120ZM320-280q-66 0-113-47t-47-113v-400h200v96l-72 58q-2 2-8 16v170q0 8 6 14t14 6h160q8 0 14-6t6-14v-170q0-2-8-16l-72-58v-96h400q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Z" />
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-xl tracking-wide invisible group-hover:visible">
                Coffe
              </span>
            </div>

            <div className=" group">
              <div className="border-2 border-[#0788ff] w-12 h-12 md:w-16 md:h-16 rounded-full flex justify-center items-center mb-2 fill-[#0788ff] hover:bg-[#0788ff] hover:fill-current transition ease-linear duration-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.0909 11.9629L19.3636 8.63087V14.1707C18.8126 13.8538 18.1574 13.67 17.4545 13.67C15.4964 13.67 13.9091 15.096 13.9091 16.855C13.9091 18.614 15.4964 20.04 17.4545 20.04C19.4126 20.04 21 18.614 21 16.855C21 16.855 21 16.8551 21 16.855L21 7.49236C21 6.37238 21 5.4331 20.9123 4.68472C20.8999 4.57895 20.8852 4.4738 20.869 4.37569C20.7845 3.86441 20.6352 3.38745 20.347 2.98917C20.2028 2.79002 20.024 2.61055 19.8012 2.45628C19.7594 2.42736 19.716 2.39932 19.6711 2.3722L19.6621 2.36679C18.8906 1.90553 18.0233 1.93852 17.1298 2.14305C16.2657 2.34086 15.1944 2.74368 13.8808 3.23763L11.5963 4.09656C10.9806 4.32806 10.4589 4.52419 10.0494 4.72734C9.61376 4.94348 9.23849 5.1984 8.95707 5.57828C8.67564 5.95817 8.55876 6.36756 8.50501 6.81203C8.4545 7.22978 8.45452 7.7378 8.45455 8.33743V16.1307C7.90347 15.8138 7.24835 15.63 6.54545 15.63C4.58735 15.63 3 17.056 3 18.815C3 20.574 4.58735 22 6.54545 22C8.50355 22 10.0909 20.574 10.0909 18.815C10.0909 18.815 10.0909 18.8151 10.0909 18.815L10.0909 11.9629Z"></path>{" "}
                </svg>
              </div>
              <span className="font-grotesk font-semibold text-base md:text-xl tracking-wide invisible group-hover:visible ">
                Music
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
