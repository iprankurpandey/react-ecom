import React from "react";
import "./DescCards.css";

function DescCards() {
  return (
    <div>
      <div className="featured-catagories">
        <div className="h1">Featured Catagories</div>
      </div>
      <div className="catagory-choice">
        <div className="first-catagory box"> Machine</div>
        <div className="second-catagory box">Pesticides</div>
        <div className="third-catagory box">Seeds</div>
        <div className="fourth-catagory box">Fertilizers</div>
      </div>
    </div>
  );
}

export default DescCards;
