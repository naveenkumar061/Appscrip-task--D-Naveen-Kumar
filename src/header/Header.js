import { TbCategory2 } from "react-icons/tb";
import logo from "../assets/images/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiHandbagThin } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.css";
import { HiBars3 } from "react-icons/hi2";

function Header() {
  return (
    <div className="header">
      <div className="header-top">
        <div className="htfirst">
          <TbCategory2 /> Lorem ipsum dolor
        </div>
        <div className="htsecond">
          <TbCategory2 /> Lorem ipsum dolor
        </div>
        <div className="htthird">
          <TbCategory2 /> Lorem ipsum dolor
        </div>
      </div>
      <div className="header-middle">
        <div className="hmtop">
          <div className="hmtleft">
            <HiBars3 className="hmtlicon" />
            <img src={logo} alt="logo" />
          </div>
          <h2>Logo</h2>
          <div className="hmtright">
            <IoSearchOutline className="hmtrsame" />
            <IoIosHeartEmpty className="hmtrsame" />
            <PiHandbagThin className="hmtrsame" />
            <RxPerson className="hmtrperson" />
            <div className="hmtrlast">
              ENG
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
        <div className="hmbottom">
          <p className="hmbhome">Home</p>
          <p className="hmbshop">Shop</p>
          <p className="hmbsame">Skills</p>
          <p className="hmbsame">Stories</p>
          <p className="hmbsame">About</p>
          <p className="hmbsame">Contact Us</p>
        </div>
      </div>
      <div className="header-bottom">
        <h1>Discover Our Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          accumsan eros. Ut non justo mollis nunc rutrum maximus. Duis.
        </p>
      </div>
    </div>
  );
}

export default Header;
