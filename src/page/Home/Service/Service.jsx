import { FaBusinessTime, FaComputer, FaDesktop, FaLaptopCode, FaPanorama } from "react-icons/fa6";

const Service = () => {
  return (
    <section className="bg-[#343A40] pt-12 pb-10 " id="Service">
      <div className="relative flex text-center mb-5">
        <h2 className="text-6xl md:text-7xl lg:text-9xl uppercase font-bold w-full  mb-0 text-gray-700 opacity-1 tracking-widest">
          SERVICE
        </h2>
        <p className="text-2xl md:text-3xl lg:text-4xl text-center w-full text-white font-bold absolute align-self-center mb-0 mt-3 md:mt-6 lg:mt-12">
          {" "}
          What I Do?
          <hr className="w-28  border-[2px] mx-auto border-[#6F42C1]" />
        </p>
      </div>
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 mt-16">
        <div
          className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[2520px] "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="2000"
        >

<div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center  bg-[#181b1e]
 hover:bg-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
          <FaComputer className="text-5xl text-gray-200"></FaComputer>

            
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
            Web Designing
            </h2>
            <p className="base text-gray-400"> I am expert in web designing. I can add functionality besides designing a webpage. I use HTML, CSS, Bootstrap, Tailwind, Vanilla Js, React JS for it.
               </p>
         
          </div>
        </div>
      </div>
    </div>

 <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center  bg-[#181b1e]
 hover:bg-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
          <FaLaptopCode className="text-5xl text-gray-200"></FaLaptopCode>

            
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              Web Development
            </h2>
            <p className="base text-gray-400"> I am a MERN stack web developer. I use MongoDB for database and Express JS, Node Js for server side work. You can see i have done some MERN project.</p>
         
          </div>
        </div>
      </div>
    </div>
 <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center  bg-[#181b1e]
 hover:bg-[#1e2024] transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
        
          <FaDesktop className="text-5xl text-gray-200"></FaDesktop>
         

            
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
            Web Application
            </h2>
            <p className="base text-gray-400"> 
            I Can Build Powerful web app for efficient and seamless user experiences. Enhancing productivity and satisfaction.</p>
         
          </div>
        </div>
      </div>
    </div>
 


        </div>
      </div>
    </section>
  );
};

export default Service;
