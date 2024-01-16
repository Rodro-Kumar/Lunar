import React from "react";
import "../Consultation/Consultation.css";
import Button from "../Commoncomponent/Button";

const Consultation = () => {
  return (
    <div className="Consultation">
      <div className="container">
        <div className="Consultation__wraper">
          <h1 className="Consultation__title">
            Book A Free Digital Marketing Consultation
          </h1>
          <div className="Consultation__inputPart">
            <input
              type="text"
              placeholder="Your Email"
              className="Consultation__email"
            />
            <Button btnStyle="book__btn " children="Book my free meeting" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
