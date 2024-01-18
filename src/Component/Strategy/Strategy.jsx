import React from "react";
import "../Strategy/Strategy.css";
import Bg from "../../assets/Background.png";
import illustration from "../../assets/Frame.png";
import Button from "../Commoncomponent/Button";
import { FaAngleRight } from "react-icons/fa6";

const Strategy = () => {
  return (
    <>
      <div className="strategy">
        <div className="strategy__overlay">
          <img src={Bg} alt={Bg} />
        </div>
        <div className="container">
          <div className="strategy__wraper">
            <div className="strategy__left">
              <h4 className="strategy__title">Why Lunar Strategy?</h4>
              <p className="strategy__detail">
                To get customers, it's imperative to be seen by the mass. Every
                successful company is unique and needs contrasting digital
                marketing strategies. Book a meeting with us and we will help
                you find the correct strategy for your company.
              </p>
              <Button btnStyle="strategy__btn">
                Book Free Meeting
                <FaAngleRight className="strategy__right__arow" />
              </Button>
            </div>
            <div className="strategy__right">
              <img
                src={illustration}
                alt={illustration}
                className="strategy__img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Strategy;
