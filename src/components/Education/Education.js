import React from "react";

const Education = () => {
  return (
    <div className="bg-gray-800 p-5 lg:p-10 text-gray-100">
      <section className="bg-gray-800 rounded-lg pb-10" id="education">
        <h2 className="text-4xl text-center mb-10 pt-20 lg:text-5xl font-bold leading-tight">
          Educa<span className="text-emerald-400">tion</span>
          <span className="divider "></span> 
        </h2>
        

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="card md:w-84 bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-xl border-t-4  border-amber-500 hover:scale-110 transition duration-700 ease-in-out" data-aos="flip-left">
            <div className="card-body">
              <h2 className="card-title">Bachelor's of Science (B.Sc)</h2>
              <ul>
                <li>Daffodil International University</li>
                <li>Department of Software Engineering</li>
                <li>Session: 2019 - 2022 </li>
              </ul>
            </div>
          </div>

          <div data-aos="flip-up" className="card md:w-84 bg-base-100 shadow-xl border-t-4 border-green-500 hover:scale-110 transition duration-700 ease-in-out">
            <div className="card-body">
              <h2 className="card-title">Higher Secondary Certificate (HSC) </h2>
              <ul>
                <li>Major General Mahmudul Hasan Adarsha College</li>
                <li>Science</li>
                <li>Session: 2016-2017</li>
              </ul>
            </div>
          </div>

          <div className="card md:w-84 bg-base-100 bg-gradient-to-l from-gray-700 via-gray-900 to-black shadow-xl border-t-4 border-purple-500 hover:scale-110 transition duration-700 ease-in-out" data-aos="flip-right">
            <div className="card-body">
              <h2 className="card-title">Secondary School Certificate (SSC) </h2>
              <ul>
                <li>H.M Institute School & College</li>
                <li>Science</li>
                <li>Session: 2014 - 2015 </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
