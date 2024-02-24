import React from "react";
import data from "../../data.json";
import Form from "./Form";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gradient-to-r from-[#07233b] from-1.67% via-[#041d34] via-58.95% to-[#050c16] to-80.48% h-auto  text-gray-100 pt-20 2xl:py-16 "
    >
      <div className="container m-auto font-grotesk px-4 md:pl-10 xl:pl-16 md:mt-10 md:pb-10">
        <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase">
          Feel Free To Contact Me Anytimes
        </span>
        <h1 className="font-bold text-4xl text-white font-grotesk mt-4 mb-4">
          Get In <span className="text-[#0788ff]">Touch</span>
        </h1>

        <div className="flex md:flex-row flex-col-reverse m-auto gap-12 lg:items-center text-white py-4">
          <Form />

          <div className="lg:w-1/2 font-sans text-xs md:text-base">
            <div>
              <h1 className="mb-4 font-semibold text-2xl font-grotesk">
                Contact <span className="text-[#0788ff]">Info</span>
              </h1>
              <p className="text-base font-grotesk text-gray-400">
                Always available, feel free to contact me!
              </p>
              <div>
                {data?.contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="flex items-center mt-5 divide-x divide-gray-500"
                  >
                    <img src={info.svg} alt="" />

                    <div className="ml-4">
                      <h1 className="ml-5 font-semibold text-lg">
                        {info.label}
                      </h1>
                      <p className="text-gray-400 ml-5 text-base">
                        {info.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
