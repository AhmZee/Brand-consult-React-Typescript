import { useState } from "react";

import logo from "../assets/icons/logo.png";
import hamburgerMenu from "../assets/icons/hamburger-icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div  className=" relative font-Poppins text-secondary ">
      <div className=" bg-primary px-5 py-3 flex justify-between myLS:mr-[200px] items-center w-[100%] ">
        <div className=" flex items-center gap-3">
          <img src={logo} alt="" className=" w-[45px] h-[45px] " />
          <div>
            <h2 className=" text-2xl font-semibold tracking-wide ">Brand</h2>
            <h4 className=" text-[0.50rem] tracking-[8px] ">Consult</h4>
          </div>
        </div>
        <nav
          className={
            isOpen ? "block fixed left-0 top-0 w-[100%]" : "hidden myLS:block"
          }
        >
          <div className=" flex myLS:w-[100%]  ">
            <div
              className=" bg-primary w-[25%] h-[100vh] opacity-[0.5] myLS:hidden "
              onClick={handleOpenMenu}
            ></div>
            <div className=" bg-primary w-[75%] text-right pr-6 pt-3 myLS:pt-0 myLS:w-[100%] myLS:flex myLS:pr-0 flex-row myLS:justify-between ">
              <div className=" text-3xl myLS:hidden " onClick={handleOpenMenu}>
                x
              </div>
              <ul className=" pr-5 myLS:flex flex-row justify-between myLS:w-[300px] ">
                <li className=" py-3 myLS:text-xs whitespace-nowrap ">Home</li>
                <li className=" py-3 myLS:text-xs whitespace-nowrap">
                  About us
                </li>
                <li className=" py-3 myLS:text-xs whitespace-nowrap">
                  Portfolio
                </li>
                <li className=" py-3 myLS:text-xs whitespace-nowrap mb-5 myLS:mb-0 ">
                  Our service
                </li>
              </ul>
              <button className=" text-xs font-semibold text-primary bg-tertiary px-5 py-3 rounded-[5px] whitespace-nowrap mr-5 myLS:mr-auto ">
                Sign up
              </button>
            </div>
          </div>
        </nav>
        <img
          src={hamburgerMenu}
          alt=""
          className=" myLS:hidden "
          onClick={handleOpenMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
