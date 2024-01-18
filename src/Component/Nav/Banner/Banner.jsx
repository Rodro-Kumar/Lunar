import React from "react";
import "../Banner/Banner.css";
import logo1 from "../../../assets/sa.png";
import logo2 from "../../../assets/Fiverr.png";
import BannerImg from "../../../assets/Banner.png";
import BannerWave from "../../../assets/Wave.png";
import Button from "../../Commoncomponent/Button";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="bannerWraper">
            <div className="bannerLeft">
              <h1 className="bannerLeft__title">
                We help you grow your{" "}
                <span className="bannerLeft__Span">conversions.</span>
              </h1>
              <p className="bannerLeft__detail">
                Featured in leading publications around the world
              </p>
              <div className="bannerLeft__Logo">
                <svg
                  className="Market__logo"
                  xmlns="http://www.w3.org/2000/svg"
                  width="210"
                  height="30"
                  viewBox="0 0 210 30"
                  fill="none"
                >
                  <g>
                    <path
                      d="M50.8049 12.5525L50.4552 14.3357H50.3504C49.8958 13.3567 48.6371 11.9581 45.8399 11.9581C41.3294 11.9581 36.714 15.4546 35.7 20.9441C34.8259 25.7692 37.1336 30 42.4832 30C44.4413 30 46.679 29.2308 47.8678 27.5874H47.9727L47.658 29.4056H52.658L55.7699 12.5525H50.8049ZM49.1615 20.9441C48.8469 22.5874 47.2734 25.2797 44.1266 25.2797C41.0497 25.2797 40.4203 22.5874 40.7 21.014C41.0497 19.0909 42.7629 16.6783 45.7 16.6783C48.5671 16.7133 49.5462 18.986 49.1615 20.9441Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M58.6021 12.5525H63.2874L62.9728 14.3357H63.0776C63.6721 13.5315 64.8609 11.9581 67.728 11.9581L66.7839 17.0629C64.4063 17.0979 62.693 17.5874 62.2385 20.1748L60.5252 29.4056H55.4902L58.6021 12.5525Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M71.0837 5.97903H76.1536L73.776 18.6713H73.846L79.6851 12.5525H85.6292L77.9369 19.965L82.3424 29.4056H76.6432L73.3914 21.2937H73.2865L71.818 29.4056H66.748L71.0837 5.97903Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M93.7062 11.9581C88.6013 11.9581 84.0559 16.3637 83.2167 21.049C82.2727 26.049 85.6643 29.9651 90.4895 29.9651C92.2028 29.9651 93.986 29.4406 95.5244 28.4266C97.1328 27.4476 98.6014 26.014 99.7202 24.1259H94.5804C93.7412 25 92.7622 25.6993 91.2237 25.6993C89.2657 25.6993 87.7972 24.5105 87.9021 22.5175H100.524C100.664 22.1329 100.769 21.8182 100.874 21.1888C101.853 16.049 98.8461 11.9581 93.7062 11.9581ZM88.6014 19.1259C88.986 18.1469 90.3846 16.2238 93.0069 16.2238C95.6293 16.2238 96.2587 18.1119 96.2587 19.1259H88.6014Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M29.021 5.97903L20.1399 19.3357H20.0699V5.97903H15.7692L0 29.4056H6.11888L14.965 16.049H15.035V29.4056H19.3706L28.2168 16.049H28.2867V29.4056H33.3566V5.97903H29.021Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M113.672 12.5524H110.49L111.434 7.55244H107.029L106.679 9.47552C106.294 11.6783 104.896 12.3427 103.078 12.5524H103.043L102.273 16.3636H104.756L102.343 29.3706H107.378L109.791 16.3636H113.008L113.672 12.5524Z"
                      fill="#959EAD"
                    />
                    <path
                      d="M191.608 23.042C189.964 26.8531 186.013 30 181.468 30C176.363 30 173.181 25.979 174.09 20.9441C175.034 16.014 179.58 11.993 184.65 11.993C189.09 11.993 192.167 14.965 192.272 19.0909H187.167C186.852 17.9021 186.083 16.7133 183.95 16.7133C181.573 16.6084 179.615 18.5315 179.16 20.979C178.705 23.4615 179.964 25.2797 182.377 25.2797C184.44 25.2797 185.698 24.0909 186.433 23.007L191.608 23.042ZM149.894 0L140.104 5.97902H142.866L133.985 19.3357H133.88V5.97902H129.545L120.698 19.3357H120.594V5.97902H115.559V29.4056H119.964L128.845 16.0489H128.95V29.4056H133.286L148.985 5.97902H151.468L149.894 0ZM159.44 29.4056H154.44L154.754 27.5874H154.65C153.461 29.2308 151.223 30 149.265 30C143.915 30 141.608 25.8042 142.482 20.9441C143.461 15.4545 148.111 11.958 152.622 11.958C155.384 11.958 156.677 13.3217 157.132 14.3357H157.237L157.587 12.5524H162.587L159.44 29.4056ZM150.978 25.3147C154.09 25.3147 155.663 22.6224 156.013 20.979C156.363 18.951 155.419 16.7133 152.552 16.7133C149.65 16.7133 147.936 19.1259 147.552 21.049C147.272 22.6224 147.901 25.3147 150.978 25.3147ZM175.174 12.5524H172.027L172.971 7.55245H168.566L168.216 9.47553C167.831 11.6783 166.433 12.3427 164.615 12.5524H164.545L163.81 16.3636H166.293L163.88 29.3706H168.915L171.328 16.3636H174.545L175.174 12.5524ZM196.363 5.97902H201.398L199.859 14.3357H199.964C201.048 12.7622 202.482 11.958 204.719 11.958C206.328 11.958 208.146 12.5525 208.985 13.8462C210.069 15.4895 209.964 16.958 209.37 19.965L207.657 29.3706H202.622L204.3 20.2098C204.44 19.4056 204.929 16.6783 202.272 16.6783C199.44 16.6783 198.95 19.1958 198.81 20.035L197.097 29.3706H192.062L196.363 5.97902Z"
                      fill="#959ead6e"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_20_592"
                      x1="162.685"
                      y1="0"
                      x2="162.685"
                      y2="30"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#959EAD" />
                      <stop
                        offset="1"
                        stop-color="#00AC4E"
                        stop-opacity="0.55"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <picture className="saas__logo">
                  <img src={logo1} alt={logo1} className="saas" />
                </picture>
                <picture className="fiver__logo">
                  <img src={logo2} alt={logo2} />
                </picture>
              </div>
              <div className="bannerLeft__Btn">
                <Button btnStyle="Contact__Btn" children="Contact us" />
              </div>
            </div>
            <div className="bannerRight">
              <picture className="bannerRight__img">
                <img
                  src={BannerImg}
                  alt={BannerImg}
                  className="bannerRight__bannerimg"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="bannerWave">
          <picture className="bannerWave__img">
            <img src={BannerWave} alt={BannerWave} />
          </picture>
        </div>
      </div>
    </>
  );
};

export default Banner;
