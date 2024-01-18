import React from "react";
import "../Marketing/Marketing.css";
import Card from "../Commoncomponent/Card";
import Button from "../Commoncomponent/Button";
import { FaAngleRight } from "react-icons/fa6";

const Marketing = () => {
  return (
    <>
      <div className="marketing">
        <div className="container">
          <div className="marketing__wraper">
            <div className="marketing__left">
              <h3 className="marketing__title">Digital Marketing Articles</h3>
            </div>
            <div className="marketing__right">
              <Card
                className="marketing__card"
                card__Title="Top 5 SaaS Businesses –
                August 2021"
                card__Detail="Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS"
              >
                <Button btnStyle="marketing__btn">
                  Read More
                  <FaAngleRight className="right__arrow" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
