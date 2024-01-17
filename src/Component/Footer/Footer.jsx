import React from "react";
import "../Footer/Footer.css";
import footerLogo from "../../assets/footerLogo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__wraper">
            <div className="footer__left">
              <div className="footer___logo">
                <img src={footerLogo} alt={footerLogo} />
              </div>
              <div className="footer__details">
                <p className="footer__address">
                  REBORN STUDIO AB Org.nr: 559264-1871 Lunar Holding LDA
                  info@lunarstrategy.com +467-20478390
                </p>
              </div>
              <div className="footer__media">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="footer__list">
              <ul className="footer__company">
                <li className="list__heading">Company</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Lunar Blog</a>
                </li>
                <li>
                  <a href="#">Our Specialists</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Privacy & Policy</a>
                </li>
              </ul>
              <ul className="footer__Services">
                <li className="list__heading">Services</li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Free Audit</a>
                </li>
                <li>
                  <a href="#">Google Ads</a>
                </li>
                <li>
                  <a href="#">Cryptocurrency Marketing</a>
                </li>
                <li>
                  <a href="#">SEO </a>
                </li>
                <li>
                  <a href="#">SAAS Marketing</a>
                </li>
                <li>
                  <a href="#">Website & SEO</a>
                </li>
              </ul>
              <div className="podcast">
                <p className="podcast__title">Podcast</p>
                <div className="podcast__bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
