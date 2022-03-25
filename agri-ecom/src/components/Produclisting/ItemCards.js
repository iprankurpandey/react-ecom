import React from "react";
import "./ItemCards.css";
function ItemCards() {
  return (
    <div>
      <div className="vcard card-with-shadow">
        <img className="vcard-image-inside" src="/" alt="scorpio" />
        <div className="card-content">
          <div className="head-with-icon">
            <h3>Scorpio</h3>
            <span className="material-icons mright" title="verfied">
              check_circle
            </span>
          </div>
          <div className="text">The Car</div>
          <span className="text-light">By : Astro</span>
          <div className="about-text">
            Lorem ipsum dolor sit amet consectetu sit amet conse sectetur
            adipisicing elit. it amet ips hiccsdsrat qorruptidolor tetur
            adcorrupti.
          </div>
          <div className="btn-icons-vcard">
            <button className="btn-add-to-vcart btn-class-vcard">
              cart<span className="material-icons">shopping_cart</span>
            </button>
            <button className="btn-add-to-vwishlist btn-class-vcard">
              <span className="material-icons">favorite_border</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ItemCards };
