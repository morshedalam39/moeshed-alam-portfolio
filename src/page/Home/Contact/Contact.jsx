import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaTelegram,
    FaTwitter,
    FaWhatsapp,
  } from "react-icons/fa6";
  import emailjs from "@emailjs/browser";
  import { useRef } from "react";
  import { toast } from "react-hot-toast";
  import { Link } from "react-router-dom";
  
  const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_96mgzj7",
          "template_859sjom",
          form.current,
          "sfiEigCBAehGXkpWx"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message Send Successfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <section className="bg-[#212529] pt-12 pb-10" id="Contact">
        <div className="relative flex text-center mb-5">
          <h2 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold w-full  mb-0 text-gray-700 opacity-1 tracking-widest">
            CONTACT
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-center w-full text-white font-bold absolute align-self-center mb-0 mt-3 md:mt-6 lg:mt-12">
            {" "}
            Get in Touch
            <hr className="w-28  border-[2px] mx-auto border-[#6F42C1]" />
          </p>
        </div>
        <div className="max-w-[2520px]  xl:px-20 md:px-10 sm:px-2 px-4 mt-16">
          <div className="mt-16 flex flex-col md:flex-row gap-6 lg:gap-72 max-w-5xl  md:p-6 p-2 rounded-lg mx-auto ">
            <div
              className="w-full lg:w-1/2 space-y-4 md:space-y-2"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="text-gray-300 font-semibold mb-4 text-2xl">
                ADDRESS
              </h1>
              <p className="text-gray-300 text-2xl lg:text-lg">
                Feni, Bangladesh
              </p>
              <p className="text-gray-300 text-2xl lg:text-lg">Feni, 3900</p>
              <div className="flex items-center text-gray-300 gap-3">
                <FaPhone className="text-xl"></FaPhone>
                <span className="text-2xl lg:text-lg">
                  <p>+880 1865374239</p>
                  <p>+880 1624494584</p>
                </span>
              </div>
              <span className="flex items-center text-gray-300 gap-3">
                <FaWhatsapp className="text-2xl"></FaWhatsapp>
                <p className="text-2xl lg:text-lg">+880 1865374239</p>
              </span>
              <span className="flex items-center text-gray-300 gap-3">
                <FaTelegram className="text-2xl"></FaTelegram>
                <p className="text-2xl lg:text-lg">+880 1865374239</p>
              </span>
              <div>
                <h1 className="text-gray-300 font-semibold text-xl mt-10 mb-4">
                  FOLLOW ME
                </h1>
                <span className="flex gap-6 text-2xl lg:text-xl text-gray-300">
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
            </div>
            <div
              className="flex flex-col w-full lg:w-1/2 mt-8 lg:mt-0"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="text-gray-300 font-semibold mb-4 ml-1 text-2xl">
                SEND US A NOTE
              </h1>
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    className="input text-white border-[#232a31] w-full max-w-xs bg-[#232a31]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="input text-white border-[#232a31] w-full max-w-xs bg-[#232a31]"
                    required
                  />
                </div>
                <div className="mt-8">
                  <textarea
                    placeholder="Tell Us More About Your Needs..."
                    name="message"
                    className="textarea text-white border-[#232a31] bg-[#232a31] textarea-lg w-full  max-w-xs"
                    required
                  ></textarea>
                </div>
                <div className=" mt-2">
                  <input
                    className="btn btn-outline btn-secondary"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  