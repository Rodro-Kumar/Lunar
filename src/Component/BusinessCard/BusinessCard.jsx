import React from "react";
import "../BusinessCard/BusinessCard.css";
import Card from "../Commoncomponent/Card";
import Button from "../Commoncomponent/Button";

export const BusinessCard = () => {
  return (
    <div className="BusinessCard">
      <div className="container">
        <div className="BusinessCard__wraper">
          <Card
            className="card"
            card__title="Top 5 SaaS Businesses – August 2021"
            card__detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn" btnContent="Read more" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
