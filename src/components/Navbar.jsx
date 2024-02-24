import logo from "../assets/icons/logo.png";
import hamburgerMenu from "../assets/icons/hamburger-icon.png";

const Navbar = () => {
  return (
    <div className=" font-Poppins text-secondary ">
      <div className=" bg-primary px-5 py-3 flex justify-between items-center">
        <div className=" flex items-center gap-3">
          <img src={logo} alt="" className=" w-[45px] h-[45px] " />
          <div>
            <h2 className=" text-2xl font-semibold tracking-wide ">Brand</h2>
            <h4 className=" text-[0.50rem] tracking-[8px] ">Consult</h4>
          </div>
        </div>
        <img src={hamburgerMenu} alt="" className=" myLS:hidden " />
        <nav className=' hidden myLS:block'>
          <ul className=' flex text-xs gap-5 '>
           <li className=' py-3 hover:border-b-[2px] hover:border-b-white hover:cursor-pointer '>Home</li>
           <li className=' py-3 hover:border-b-[2px] hover:border-b-white hover:cursor-pointer '>About us</li>
           <li className=' py-3 hover:border-b-[2px] hover:border-b-white hover:cursor-pointer '>Portfolio</li>
           <li className=' py-3 hover:border-b-[2px] hover:border-b-white hover:cursor-pointer '>Our service</li> 
          </ul>
       </nav>
       <button className=" text-xs font-semibold text-primary bg-tertiary px-5 py-3 rounded-[5px] hidden myLS:block">Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
