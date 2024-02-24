import React, { useState } from "react";
import data from "../../data.json";
import ShowModal from "./ShowModal";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [project, setProject] = useState("");

  function handleModal(projecDetails) {
    setProject(projecDetails);
    setShowModal(!showModal);
  }
  return (
    <>
      <div
        id="project"
        className="bg-gradient-to-r from-[#072d4f] from-30.67% via-[#052543] to-[#050c16] to-60.48%  min-h-screen 2xl:min-h-full 2xl:py-32 pt-20 lg:pt-28 pb-5"
      >
        <div className="container m-auto font-grotesk pl-4 md:pl-10 xl:pl-16">
          <span className="font-grotesk px-2 py-1 rounded tracking-[4px] text-white bg-[#05345e] text-sm uppercase">
            My work
          </span>
          <h1 className="font-bold text-4xl text-white font-grotesk mt-4 mb-10">
            Recent <span className="text-[#0788ff]">Project</span>
          </h1>

          {showModal && (
            <ShowModal setShowModal={setShowModal} project={project} />
          )}
          <div className="carousel carousel-center max-w-full p-2 space-x-4">
            {data?.projects?.map((project) => (
              <div
                key={project.id}
                className="carousel-item rounded-lg w-3/4 md:w-2/5 xl:w-[28%] p-4 bg-[#e7f2ee] "
              >
                <div className="w-full rounded-lg overflow-hidden ">
                  <img
                    src={project?.image}
                    alt=""
                    className="rounded-lg h-60 hover:scale-105  transition duration-500 ease-out"
                  />

                  <div className="flex justify-between mt-2">
                    <div>
                      <h1 className="text-xl font-semibold">{project?.name}</h1>
                      <p className="text-sm text-gray-400">
                        Type: {project.type}
                      </p>
                    </div>

                    <button
                      onClick={() => handleModal(project)}
                      className="btn rounded-full border-none p-0"
                    >
                      <svg
                        className="fill-blue-600 hover:fill-[#062c4e] transition duration-500"
                        viewBox="0 0 16 16"
                        height="2.5em"
                        width="2.5em"
                      >
                        <path d="M8 0a8 8 0 110 16A8 8 0 018 0zM4.5 7.5a.5.5 0 000 1h5.793l-2.147 2.146a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 10-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
