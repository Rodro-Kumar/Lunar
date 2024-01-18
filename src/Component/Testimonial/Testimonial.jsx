import React from "react";
import "../Testimonial/Testimonial.css";
import Quote from "../../assets/quote.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <div className="testimonial__heading">
            <h3 className="testimonial__title">Our Testimonials</h3>
          </div>
          <div className="testimonial__wraper">
            <div className="testimonial__left">
              <div className="square"></div>
              <div className="quote">
                <picture>
                  <img src={Quote} alt={Quote} />
                </picture>
              </div>
            </div>
            <div className="testimonial__right">
              <p className="testimonial__Strategy">
                Lunar Strategy helped us with our digital marketing for 4 months
                now and still helps us. Great service and highly recommended.
              </p>
              <h5 className="testimonial__Speach">
                — Kimmo Hakonen - Skrum Master at DaGear AB
              </h5>
              <div className="testimonia__icon">
                <FaArrowLeft className="left__icon" />
                <FaArrowRight className="right__icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
