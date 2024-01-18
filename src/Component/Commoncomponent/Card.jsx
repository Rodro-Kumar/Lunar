import React from "react";

const Card = ({ className, children, card__Title, card__Detail }) => {
  return (
    <>
      <div className={className}>
        <h1 className="card__title">
          {card__Title ? card__Title : "Top 5 SaaS Businesses – August 2021"}
        </h1>
        <p className="card__detail">
          {card__Detail
            ? card__Detail
            : `Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS`}
        </p>
        {children}
      </div>
    </>
  );
};

export default Card;
