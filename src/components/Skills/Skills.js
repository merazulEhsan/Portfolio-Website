import React from "react";
import data from "../../data.json";
import effect2 from "../../images/effect-2.svg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-gradient-to-r from-[#07233b] from-1.67% via-[#041d34] via-58.95% to-[#050c16] to-80.48% pt-20 p-5 lg:p-10 h-auto lg:min-h-screen 2xl:min-h-full 2xl:py-32"
    >
      <div className="container m-auto md:px-6 xl:px-16 md:mt-6 lg:mt-24 font-grotesk">
        <div className="flex md:gap-x-5 lg:gap-x-16 flex-col md:flex-row">
          <div className="md:w-1/2">
            <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase ">
              My Skills
            </span>
            <div className="text-white text-3xl font-bold uppercase mt-8 mb-6 tracking-wider">
              <h1 className="">Let’s Explore Popular </h1>
              <h1 className="text-[#0788ff]">Skills & Experience</h1>
            </div>
            <p className="text-base text-white mt-3 tracking-wider font-normal">
              These are the technologies I've worked with and used them in my
              projects.
            </p>

            <div className="mt-14 animate-shakeX animate-slower animate-ease animate-infinite hidden md:block">
              <img src={effect2} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 justify-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-4 font-medium font-grotesk text-white text-base mt-10 md:mt-0 md:w-1/2">
            {data?.skills?.map((skill, i) => (
              <div
                key={i}
                className="text-center flex flex-col items-center justify-center"
              >
                <div className="border border-slate-600 p-4 w-16 h-16 rounded-full bg-[#1d3347] mb-1">
                  <img src={skill.image} alt={skill.name} />
                </div>
                <span className="font-grotesk font-normal text-sm tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
