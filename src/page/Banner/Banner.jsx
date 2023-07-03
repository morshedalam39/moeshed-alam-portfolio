import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Banner = () => {

  return (
    <section className="bg-[#343A40] lg:pt-10 pb-8" id="Home">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-4 order-2 lg:order-1">
            <h1 className="text-2xl font-bold italic text-gray-300 mt-8 lg:mt-0">
              Welcome
            </h1>
            <h1>
              <span className="text-red-400 font-bold text-2xl lg:text-4xl">
                <span className="text-gray-300">
                  I am Md. Morshed Alam
                  <br />
                </span>{" "}
                <Typewriter
                  words={[
                    "FRONT-END DEVELOPER",
                    "MERR STACK DEVELOPER",
                    "WEB DEVELOPER",
                  ]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-gray-300 font-semibold w-full lg:w-4/5">
              I have excellent cooperation skills, a strong set of technical
              skills, a problem-solving attitude, a passion of learning, a sharp
              eye for detail, and a strong devotion to my work.
            </p>
            <div className="mb-10">
              <h1 className="text-gray-300 font-semibold text-xl mb-2">
                Find With Me
              </h1>
              <span className="flex gap-6 text-2xl md:text-xl text-gray-300">
                <Link className="hover:text-white"
                  to="https://web.facebook.com/morshed.alam.rana.4239"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook></FaFacebook>
                </Link>
                <Link
                className="hover:text-white"
                  to="https://www.linkedin.com/in/md-morshed-alam-351704278/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin></FaLinkedin>
                </Link>
                <Link
                className="hover:text-white"
                  to="https://github.com/morshedalam39"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub></FaGithub>
                </Link>
              </span>
            </div>

            <button className="btn btn-outline btn-secondary">
              <a href="Morshed-Alam-Resume.pdf" download>
                Download Resume
              </a>
              <FaDownload></FaDownload>
            </button>
          </div>
          <div
            className="py-10 flex-1 order-1 lg:order-2"
            data-aos="zoom-in-up"
          >
            <div className="box"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
