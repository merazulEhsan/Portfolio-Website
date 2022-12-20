import React from "react";
import { SkillBar } from "react-skillbars";
import TagCloud from "react3dtagcloud";

const Skills = () => {
  // const skills = [
  //   { type: "HTML", level: 100 },
  //   { type: "CSS", level: 90 },
  //   { type: "Javascript", level: 75 },
  //   { type: "Tailwind", level: 80 },
  //   { type: "Boostrap", level: 75 },
  //   { type: "React.js", level: 50 },
  //   { type: "Express.js", level: 50 },
  //   { type: "Node.js", level: 45 },
  //   { type: "MongoDB", level: 70 },
  //   { type: "Python", level: 65 },
  //   { type: "C", level: 80 },
  // ];

  // const colors = {
  //   bar: "#00a1a7",
  //   title: {
  //     text: "#fff",
  //     background: "#04c2c9",
  //   },
  //   level: "#00a1a7",
  // };
  const tagName = [
    "java",
    "javscript",
    "C",
    "C++",
    "Node",
    "React",
    "Express",
    "MongoBD",
    "Python",
    "CSS",
    "HTML",
    "Bootstrap",
    "Tailwind",
    "FireBase",
    "ES6",
    "SQL",
    "JSON",
    "npm",
    "stripe",
  ];

  return (
    <div
      id="skills"
      className="bg-gradient-to-bl from-black via-black to-amber-900 pt-20 p-5 lg:p-10"
    >
      <div className="container m-auto">
        <h1 className="text-center lg:text-5xl font-bold leading-tight text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 pt-7 font-cinzel">
          Skills
        </h1>
        <p>
          <div class="divider text-center font-bold leading-tight lg:w-1/5 mx-auto uppercase">
            What I Know
          </div>
        </p>
        <p className="divider"></p>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-14">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 shadow-lg  rounded-lg">
            <div class=" w-full ">
              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">C</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  80%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">HTML5</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  95%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "95%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">CSS3</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  90%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">JavaScript</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  80%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">React</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  85%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "85%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Tailwind Css</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  85%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div class=" w-full ">
              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Bootstrap</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  75%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Node.js</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  75%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Express.js</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  80%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">MongoBD</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  90%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "90%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Firebase</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  80%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mb-6 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>

              <div class="flex items-center justify-between">
                <span class=" text-sm text-slate-300">Git</span>
                <span class="px-2 py-1 bg-teal-50 rounded-lg text-xs text-orange-500 font-medium min-w-[46px] text-center">
                  80%
                </span>
              </div>

              <div class="w-full bg-slate-100 h-1 mt-2">
                <div
                  class="bg-orange-500 h-1 rounded"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-16 w-2/5 overflow-hidden lg:overflow-visible invisible lg:visible mx-auto">
            <TagCloud tagName={tagName}></TagCloud>
          </div>
        </div>
      </div>

      {/* <div className="grid lg:grid-cols-2 gap-10 bg-gradient-to-l from-gray-900 to-gray-700 p-5 lg:p-10 rounded-lg shadow-lg">
        <SkillBar skills={skills} height={20} colors={colors} />

        <div className="mt-12 w-2/4 overflow-hidden lg:overflow-visible invisible lg:visible mx-auto">
          <TagCloud tagName={tagName}></TagCloud>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
