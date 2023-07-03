import { useState } from "react";
// import {  NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navOption = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Service" },
    { id: 4, title: "Resume" },
    { id: 5, title: "Portfolio" },
    { id: 6, title: "Contact" },
  ];

  return (
    <header className="bg-[#414346] sticky top-0 z-20 py-4">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="HeroGadget"
            title="HeroGadget"
            className="inline-flex items-center"
          >
            <p className="ml-2 text-3xl italic font-bold tracking-wide text-gray-300 title-text">
              MORSHED<span className="text-orange-400">ALAM</span>
            </p>
          </Link>

          <ul className="items-center text-gray-300 hidden space-x-8 lg:flex text-base font-bold cursor-pointer">
            {/* {navOptions} */}
            {navOption.map((menu) => (
              <li key={menu.id}>
                <Link
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to={menu.title}
                  smooth={true}
                  offset={-15}
                  duration={1000}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="gap-3 text-2xl hidden lg:block">
            <span className="flex gap-4  text-gray-300">
              <Link
                className="hover:text-white"
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
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-300" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute z-10 top-0 left-0 w-full">
                <div className="p-5 bg-[#414346] border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="HeroChef"
                        title="HeroGadget"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-300 italic uppercase title-text">
                          $MORSHED<span className="text-orange-400">ALAM</span>
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-300" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav className="z-30">
                    <ul className="space-y-4 text-gray-300 cursor-pointer">
                      {navOption.map((menu) => (
                        <li key={menu.id}>
                          <Link
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                            to={menu.title}
                            smooth={true}
                            offset={-15}
                            duration={1000}
                          >
                            {menu.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
