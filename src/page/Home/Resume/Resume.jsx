import { FaDownload } from "react-icons/fa6";

const Resume = () => {
  return (
    <section className="bg-[#212529] pt-12 pb-10" id="Resume">
      <div className="relative flex text-center mb-5">
        <h2 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold w-full  mb-0 text-gray-700 opacity-1 tracking-widest">
          SUMMARY
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center w-full text-white font-bold absolute align-self-center mb-0 mt-3 md:mt-6 lg:mt-12">
          {" "}
          Resume
          <hr className="w-28  border-[2px] mx-auto border-[#6F42C1]" />
        </p>
      </div>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-100">My Education</h1>
            <div
              className="card w-full h-96 md:h-72 bg-[#111418]  space-y-2 rounded-md shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="card-body">
                <div className="badge badge-secondary badge-outline">
                  2017-2021
                </div>
                <h1 className="text-2xl font-semibold text-gray-200">
                  Computer Science & Engineering
                </h1>
                <h2 className="text-xl font-semibold text-gray-300">
                  Institute Of Computer Science & Technology
                </h2>
                <p className="text-lg text-gray-400 font-semibold">
                  I complete my Diploma in CSE from Institute Of Computer Science & Technology.
                </p>
              </div>
            </div>

          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-100">My Experience</h1>
            <div
              className="card w-full h-96 md:h-72 bg-[#111418]  space-y-2 rounded-md shadow-xl"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="card-body">
                <div className="badge badge-secondary badge-outline">
                  2023-Present
                </div>
                <h1 className="text-2xl font-semibold text-gray-200">
                  MERN Stack Developer
                </h1>
                <h2 className="text-xl font-semibold text-gray-300">
                  Programming Hero
                </h2>
                <p className="text-lg text-gray-400 font-semibold">
                  With 6 months of learning and practicing MERN stack web
                  development and completing few projects.My learning has been
                  focused mainly on developing single page web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-100 text-center mt-5">My Skill</h1>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div>
              <p className="text-gray-300 font-semibold">HTML / CSS</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">
                Bootstrap / Tailwind CSS
              </p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">JavaScript</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="65"
                max="100"
              ></progress>
            </div>

            <div>
              <p className="text-gray-300 font-semibold">React JS</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="80"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Firebase</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="60"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">MongoDB</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="60"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">Node Js</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="40"
                max="100"
              ></progress>
            </div>
            <div>
              <p className="text-gray-300 font-semibold">GitHub</p>
              <progress
                className="progress progress-primary w-11/12 bg-[#111418]"
                value="70"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          {" "}
          <button className="btn btn-outline btn-secondary">
            <a href="Morshed-Alam-Resume.pdf" download>
              Download Resume
            </a>
            <FaDownload></FaDownload>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
