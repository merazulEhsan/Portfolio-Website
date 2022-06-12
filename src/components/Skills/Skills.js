import React from "react";
import { SkillBar } from "react-skillbars";
import TagCloud from "react3dtagcloud";

const Skills = () => {
  const skills = [
    { type: "HTML", level: 100 },
    { type: "CSS", level: 90 },
    { type: "Javascript", level: 75 },
    { type: "Tailwind", level: 80 },
    { type: "Boostrap", level: 75 },
    { type: "React.js", level: 50 },
    { type: "Express.js", level: 50 },
    { type: "Node.js", level: 45 },
    { type: "MongoDB", level: 70 },
    { type: "Python", level: 65 },
    { type: "C", level: 80 },
  ];

  const colors = {
    bar: "#00a1a7",
    title: {
      text: "#fff",
      background: "#04c2c9",
    },
    level: "#00a1a7",
  };
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
  ];

  return (
    <div id="skills" className="bg-gray-800 pt-20 p-5 lg:p-10">
      <h1 className="text-center lg:text-5xl font-bold leading-tight text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 pt-7">
        Skills
      </h1>
      <p><div class="divider text-center font-bold leading-tight lg:w-1/5 mx-auto uppercase">What I Know</div></p>
      <p className="divider"></p>
      <div className="grid lg:grid-cols-2 gap-10 bg-gradient-to-l from-gray-900 to-gray-700 p-5 lg:p-10 rounded-lg shadow-lg">
        <SkillBar skills={skills} height={20} colors={colors} />

        <div className="mt-12 w-2/4 overflow-hidden lg:overflow-visible invisible lg:visible mx-auto">
          <TagCloud tagName={tagName} ></TagCloud>
        </div>
      </div>
    </div>
  );
};

export default Skills;
