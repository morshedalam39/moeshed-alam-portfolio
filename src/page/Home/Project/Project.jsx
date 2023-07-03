import image1 from "../../../image/foreign-language-center-web-app.png";
import image2 from "../../../image/toy-car-191a1-web-app.png";
import image3 from "../../../image/chef-recipe-2aea7-web-app.png";
import { FaEye } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section className="bg-[#343A40] pt-12 pb-10" id="Portfolio">
      <div className="relative flex text-center mb-5">
        <h2 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold w-full  mb-0 text-gray-700 opacity-1 tracking-widest">
          PROJECT
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center w-full text-white font-bold absolute align-self-center mb-0 mt-3 md:mt-6 lg:mt-12">
          {" "}
          My Work
          <hr className="w-28  border-[2px] mx-auto border-[#6F42C1]" />
        </p>
      </div>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-16">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
          <div
            className="card w-full  shadow-xl bg-[#111418]"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <figure>
              <div className="relative w-full h-60 overflow-hidden">
                <div className="h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-15rem)] hover:duration-[5000ms]">
                  <img
                    src={image1}
                    alt="Your Image"
                    className="object-cover object-top w-full"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-pink-600 font-bold text-2xl mx-auto">
                21-Language
              </h2>
              <p className="text-center text-gray-400 font-semibold">
              21-Language is a Foreign Language Learning Centre MERN Stack Web Application.
              </p>
              <p className="text-center text-gray-400 font-semibold">
                Implemented different dashboards for admin, instructor, and
                user.
              </p>
              <div className="text-center space-x-2 mt-4 space-y-2">
                <Link
                  to="https://github.com/morshedalam39/Foreign-Language-Center-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Client
                  </button>
                </Link>
                <Link
                  to="https://github.com/morshedalam39/Foreign-Language-Center_server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Server
                  </button>
                </Link>
                <Link
                  to="https://foreign-language-center.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary mt-2">
                    Live Site <FaEye></FaEye>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="card w-full shadow-xl bg-[#111418]"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <figure>
              <div className="relative w-full h-60 overflow-hidden">
                <div className="h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-15rem)] hover:duration-[5000ms]">
                  <img
                    src={image2}
                    alt="Your Image"
                    className="object-cover object-top w-full"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-pink-600 font-bold text-2xl mx-auto">
               
PlayCarLand
              </h2>
              <p className="text-center text-gray-400 font-semibold">
                This website is a MERN stack single-page web application
              </p>
              <p className="text-center text-gray-400 font-semibold">
                Users can visit the website and see the toy items. If users like
                the toys they can buy them
              </p>
              <div className="text-center space-x-2 mt-4 space-y-2">
                <Link
                  to="https://github.com/morshedalam39/Toy-car-with-auth-mongoDb-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Client
                  </button>
                </Link>
                <Link
                  to="https://github.com/morshedalam39/Toy-car-with-auth-mongoDb-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Server
                  </button>
                </Link>
                <Link
                  to="https://toy-car-191a1.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary mt-2">
                    Live Site <FaEye></FaEye>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="card w-full bg-[#111418] shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <figure>
              <div className="relative w-full h-60 overflow-hidden">
                <div className="h-max transition-transform duration-[3000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-15rem)] hover:duration-[5000ms]">
                  <img
                    src={image3}
                    alt="Your Image"
                    className="object-cover object-top w-full"
                  />
                </div>
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-pink-600 font-bold text-2xl mx-auto">
              Smitten Kitchen
              </h2>
              <p className="text-center text-gray-400 font-semibold">
                This website is a single-page web application.
              </p>
              <p className="text-center text-gray-400 font-semibold">
                Users can view the many chefs and their details and chef-made
                food.
              </p>
              <div className="text-center space-x-2 mt-4 space-y-2">
                <Link
                  to="https://github.com/morshedalam39/chef-recipes-firebase-auth-client"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Client
                  </button>
                </Link>{" "}
                <Link
                  to="https://github.com/morshedalam39/chef_recipes-server"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary">
                    Server
                  </button>
                </Link>
                <Link
                  to="https://chef-recipe-2aea7.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-outline btn-primary mt-2">
                    Live Site <FaEye></FaEye>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
