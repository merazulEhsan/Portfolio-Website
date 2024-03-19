import React from "react";
import eduIcon from "../../images/edu.svg";
const Education = () => {
  return (
    <div className="bg-gradient-to-r from-[#072d4f] from-30.67% via-[#052543] to-[#050c16] to-60.48%  text-gray-100 min-h-screen 2xl:min-h-full  ">
      <section className=" rounded-lg pb-10" id="education">
        <section className=" text-gray-100 font-grotesk pt-20">
          <div className="container px-4 md:px-12 md:py-12 mx-auto">
            <div className="grid gap-4 mx-4 md:grid-cols-12 ">
              <div className="md:col-span-4  ">
                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-blue-600">
                  <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase">
                    Qualification
                  </span>
                  <h3 className="text-3xl font-semibold mt-4">
                    Academic <span className="text-[#0788ff]">Timeline</span>
                  </h3>

                  <img className="mt-10" src={eduIcon} alt="education" />
                </div>
              </div>
              <div className="relative md:pl-20 md:col-span-8 space-y-6 ">
                <div className="col-span-12 space-y-12 relative md:px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                    <h3 className="text-xl font-semibold tracki">
                      Bachelor of Science in Software Engineering
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      2019 Jan - 2022 Dec
                    </time>
                    <p className="mt-3">
                      Daffodil International University <br />
                      Dhanmondi 27, Dhaka
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                    <h3 className="text-xl font-semibold tracki">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      2016-2017
                    </time>
                    <p className="mt-3">
                      H.M Institute School & College <br />
                      Tangail
                    </p>
                  </div>
                  <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-500">
                    <h3 className="text-xl font-semibold tracki">
                      SSC Secondary School Certificate (SSC)
                    </h3>
                    <time className="text-xs tracki uppercase text-gray-400">
                      2014-2015
                    </time>
                    <p className="mt-3">
                      H.M Institute School & College <br />
                      Tangail
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Education;
