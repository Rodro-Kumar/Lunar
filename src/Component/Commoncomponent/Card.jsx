import React from "react";

const Card = ({ className, children, card__title }) => {
  return (
    <>
      <div className={className}>
        <h1 className="card__title">{card__title}</h1>
        <p className="card__detail">
          Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS
        </p>
        {children}
      </div>
    </>
  );
};

export default Card;
