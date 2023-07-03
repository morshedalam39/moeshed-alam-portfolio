import { FaDownload } from "react-icons/fa6";

const About = () => {
  return (
    <section className="bg-[#212529] pt-12 pb-10" id="About">
      <div className="relative flex text-center mb-5">
        <h2 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold w-full  mb-0 text-gray-700 opacity-1 tracking-widest">
          ABOUT ME
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center w-full text-white font-bold absolute align-self-center mb-0 mt-3 md:mt-6 lg:mt-12">
          {" "}
          Know Me More
          <hr className="w-28  border-[2px] mx-auto border-[#6F42C1]" />
        </p>
      </div>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-16">
        <div className="flex flex-col lg:flex-row ">
          <div
            className="space-y-2"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <h2 className="text-gray-100 text-2xl font-bold">
              I'm <span className="text-[#fb5200]">Md. Morshed Alam</span>, a MERN
              Stack Web Developer
            </h2>
            <p className="text-gray-400 text-lg w-full lg:w-4/5 font-medium">
              Hello! I'm Md. Morshed Alam, from Feni, Bangladesh. I am dedicated
              to learning and mastering new technologies, and coding has become
              my true passion.
            </p>
            <p className="text-gray-400 text-lg w-full lg:w-4/5 font-medium">
              To obtain a challenging position in web development where I can
              utilize my technical skills and creativity to create innovative
              and user-friendly websites, contributing to the success of an
              organization while continuously enhancing my knowledge in the
              field
            </p>
          </div>
          <div
            className="text-gray-400 font-bold text-xl divide-y-[1px] space-y-4 mt-6 lg:mt-0"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="2000"
          >
            <h2>Name: Md. Morshed Alam</h2>
            <h2>Email: Morshedalam4239@gmail.com</h2>
            <h2>Age: 22</h2>
            <h2>From: Feni, Bangladesh</h2>
            <button className="btn btn-outline btn-secondary">
              <a href="Morshed-Alam-Resume.pdf" download>
                Download Resume
              </a>
              <FaDownload></FaDownload>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
