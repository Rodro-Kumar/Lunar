import React from "react";
import "../Nav/Nav.css";
import "../Common css/Common.css";
import logo from "../../assets/logo.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Nav = () => {
  return (
    <>
      <div className="Nav">
        <div className="container">
          <div className="NavWrapper">
            <div className="NavWrapper__logo">
              <picture>
                <img src={logo} alt={logo} className="logo__img" />
              </picture>
            </div>
            <div className="MenuList__ContactBtn__Wraper">
              <div className="MenulistWraper">
                <ul className="Menulist">
                  <li className="MenuList__item">
                    {" "}
                    <a href="#">Services</a>
                  </li>
                  <li className="MenuList__item">
                    <a href="#">Industries</a>
                  </li>
                  <li className="MenuList__item">
                    {" "}
                    <a href="#">About Us</a>
                  </li>
                  <li className="MenuList__item">
                    <a href="#">Team Lunar</a>
                  </li>
                  <li className="MenuList__item ">
                    {" "}
                    <a href="#">Blog</a>
                    <MdOutlineKeyboardArrowDown className="downArrow" />
                  </li>
                </ul>
              </div>
              <div className="NavWrapper__contact">
                <button className="NavWrapper__contact__Btn">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
