export default function ShowModal({ setShowModal, project }) {
  return (
    <div className="bg-black bg-opacity-80 h-full w-full z-50 fixed top-0 left-0 mx-auto overflow-auto">
      <div className="container mx-auto my-10 rounded-md border border-[#FEFBFB]/[36%] bg-white p-9 max-md:px-4 lg:my-20 lg:p-6 relative z-50 h-auto">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-5 h-5"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>

        <div className="flex items-center justify-center lg:flex-row flex-col gap-8 lg:py-10 ">
          <div className="lg:w-1/2 border border-gray-200 rounded-md">
            <img className="rounded-md" src={project?.image} alt="" />
          </div>
          <div className=" lg:w-1/2 font-grotesk">
            <h1 className="text-2xl font-semibold mb-4">{project.name}</h1>
            <hr />
            <p className="text-base text-gray-500 my-4 text-justify">
              {project.despription}
            </p>
            <div className="text-base text-gray-900 space-y-1 overflow-auto">
              <p className="grid grid-cols-4">
                <span className="col-span-2 sm:col-span-1">Type:</span>
                <span className="col-span-2 sm:col-span-3 text-gray-500">
                  {project.type}
                </span>
              </p>
              <hr />
              <p className="grid grid-cols-4">
                <span className="col-span-2 sm:col-span-1">Technology:</span>
                <span className="col-span-2 sm:col-span-3 text-gray-500">
                  {project?.technology}
                </span>
              </p>
              <hr />
              <p className="grid grid-cols-4">
                <span className="col-span-2 sm:col-span-1">Git Url:</span>
                <span className="col-span-2 sm:col-span-3 text-gray-500 ">
                  <a
                    href={project.gitlink}
                    target="_blank"
                    className=" text-blue-500 hover:underline"
                    rel="noreferrer"
                  >
                    {project.gitlink}
                  </a>
                </span>
              </p>
              <hr />
              <p className="grid grid-cols-4">
                <span className="col-span-2 sm:col-span-1">Live Url:</span>
                <a
                  href={project.link}
                  target="_blank"
                  className="col-span-2 sm:col-span-3 text-blue-500 hover:underline"
                  rel="noreferrer"
                >
                  {project.link}
                </a>
              </p>
              {project.admin && <hr />}
              <p className="grid grid-cols-4 ">
                <span className="col-span-2 sm:col-span-1">
                  {project.admin && "Admin Panel:"}
                </span>
                <span className="col-span-2 sm:col-span-3 text-gray-500">
                  {project.admin}
                </span>
              </p>
              <hr />
              <p className="grid grid-cols-4 text-red-600">
                <span className="col-span-2 sm:col-span-1">
                  {project.note && "Note"}
                </span>
                <span className="col-span-2 sm:col-span-3">
                  {project?.note}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
