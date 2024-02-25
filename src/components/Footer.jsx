import fbLogo from "../assets/icons/g10.png";
import xLogo from "../assets/icons/Group.png";
import linkinLogo from "../assets/icons/Path 2520.png";
import instaLogo from "../assets/icons/Vector 0.png";

const Footer = () => {
  return (
    <footer className=" bg-primary ">
      <div className=" px-5 py-3 justify-between items-center myLS:flex ">
        <h3 className=" text-xs text-secondary text-center mb-2 ">
          All Copyrights are reserved by Usman Ahmed
        </h3>
        <div className=" flex justify-center gap-2 myLS:flex myLS:">
          <img src={fbLogo} alt="" />
          <img src={linkinLogo} alt="" />
          <img src={xLogo} alt="" />
          <img src={instaLogo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
