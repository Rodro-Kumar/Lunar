import React from "react";
import "../BusinessCard/BusinessCard.css";
import Card from "../Commoncomponent/Card";
import Button from "../Commoncomponent/Button";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { GoArrowRight } from "react-icons/go";

export const BusinessCard = () => {
  return (
    <div className="BusinessCard">
      <div className="container">
        <div className="BusinessCard__wraper">
          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <Card
            className="card"
            card__Title="Top 5 SaaS Businesses – August 2021"
            card__Detail="Are you currently using one of the top SaaS businesses, according to
          the team at Lunar Strategy? Check out this list of our top SaaS"
          >
            <Button btnStyle="btn">
              Read more
              <MdOutlineKeyboardArrowRight className="Right__arrow" />
            </Button>
          </Card>

          <div className="page">
            <div className="page__item">
              <a href="#" className="page__Previous">
                Previous
              </a>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <a href="#" className="page__next">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
