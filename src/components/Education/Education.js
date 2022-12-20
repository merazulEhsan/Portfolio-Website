import React from "react";

const Education = () => {
  return (
    <div className="bg-gradient-to-tl from-black via-black to-orange-900 p-5 lg:p-10 text-gray-100">
      <section className=" rounded-lg pb-10" id="education">
        <h2 className="text-4xl text-center mb-5 pt-20 lg:text-5xl font-bold leading-tight font-cinzel">
          Educa<span className="text-emerald-400">tion</span>
          <span className="divider"></span>
        </h2>

        <section class="max-w-5xl mx-auto py-10">
          <div>
            <div class="flex flex-row">
              <div class="hidden md:flex flex-col items-center">
                <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div class="text-2xl font-black text-gray-500">2019-2022</div>
                  <div class="text-gray-500 text-sm">B.Sc.</div>
                </div>
                <div class="h-full border-l-4 border-transparent">
                  <div class="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div class="flex-auto border rounded  border-gray-300 shadow-md">
                <div class="flex md:flex-row flex-col items-center">
                  <div class="flex-auto">
                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                      <span class="font-black">Step 1</span> - Idea
                    </div>
                    <div class="p-3 text-3xl text-white font">
                      Bachelor's of Science B.Sc. in Software Engineering
                    </div>
                    <div class="px-3 pb-6">
                      <h1>Department of Software Engineering</h1>
                      <h1>Daffodil International University</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-start flex-row">
              <div class="border-t-4 border-r-4 border-transparent">
                <div class="w-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div class="border-t-4 border-transparent flex-auto">
                <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div class="w-16 mt-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-t-4 rounded-tr-full"></div>
            </div>
            <div class="flex flex-row-reverse">
              <div class="hidden md:flex flex-col items-center">
                <div class="w-32 py-5 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                  <div class="text-2xl font-black text-gray-500">2016-2017</div>
                  <div class="text-gray-500 text-sm">HSC</div>
                </div>
                <div class="h-full border-r-4 border-transparent">
                  <div class="border-l-4 ml-4 h-full border-gray-300 border-dashed"></div>
                </div>
              </div>
              <div class="flex-auto border rounded  border-gray-300">
                <div class="flex md:flex-row flex-col items-center">
                  <div class="flex-auto">
                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                      <span class="font-black">Step 2</span> - Collaboration
                    </div>
                    <div class="p-3 text-3xl text-white font">
                      Higher Secondary Certificate (HSC)
                    </div>
                    <div class="px-3 pb-6">
                      <h1>Group-Science</h1>
                      <h1>Major General Mahmudul Hasan Adarsha College</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-start flex-row-reverse">
              <div class="border-t-4 border-l-4 border-transparent">
                <div class="w-16 mr-16 h-16 border-r-4 border-gray-300 border-dashed border-b-4 rounded-br-full"></div>
              </div>
              <div class="border-t-4 border-transparent flex-auto">
                <div class="h-16 border-b-4 border-gray-300 border-dashed"></div>
              </div>
              <div class="w-16 mt-16 ml-16 h-16 border-l-4 border-gray-300 border-dashed border-t-4 rounded-tl-full"></div>
            </div>
            <div class="flex flex-row">
              <div class="hidden md:flex flex-col items-center">
                <div class="w-32 py-5 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div class="text-2xl font-black text-gray-500">2014-2015</div>
                  <div class="text-gray-500 text-sm">SSC</div>
                </div>
              </div>
              <div class="flex-auto border rounded  border-gray-300">
                <div class="flex md:flex-row flex-col items-center">
                  <div class="flex-auto">
                    <div class="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-gray-500">
                      <span class="font-black">Step 3</span> - Planification
                    </div>
                    <div class="p-3 text-3xl text-white font">
                      Secondary School Certificate (SSC)
                    </div>
                    <div class="px-3 pb-6">
                      <h1>Group-Science</h1>
                      <h1>H.M Institute School & College Science</h1>
                    </div>
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
