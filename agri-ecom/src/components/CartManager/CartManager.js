import React from "react";
import "./CartManager.css";

function CartManager() {
  return (
    <div>
      <div className="card horizontal-card">
        <div className="card-image">
          <img
            className="cimage"
            alt="brand_image"
            src="https://i.ibb.co/rf2Sn3Q/raphael-rychetsky-li9-Jf-UHQf-OY-unsplash.jpg"
          />
          <div className="hcard-text">
            <h3> Wheat</h3>
            <h5>Malwa Bundeli Quality</h5>
            <h6>By : Prankur</h6>

            <p>
              {" "}
              the wheat is pure and grown organically at farm , the quality is
              high and cost is cheap. rich with nutrients and high in protein.
            </p>
            <p className="amount">$5000</p>
            <div className="hcard-btn">
              <button className="hcard button-cart">
                <span className="material-icons">remove_shopping_cart</span>
              </button>
              <button className="hcard button-like">
                <span className="material-icons">favorite_border</span>
              </button>

              <button className="hcard increase">
                <span className="material-icons">add</span>
              </button>
              <input className="input-cart" type="text" />
              <button className="hcard decrease">
                <span className="material-icons">remove</span>
              </button>
            </div>
          </div>
        </div>
        <div className="card-image">
          <img
            className="cimage"
            alt="brand_image"
            src="https://i.ibb.co/rf2Sn3Q/raphael-rychetsky-li9-Jf-UHQf-OY-unsplash.jpg"
          />
          <div className="hcard-text">
            <h3> Wheat</h3>
            <h5>Malwa Bundeli Quality</h5>
            <h6>By : Prankur</h6>

            <p>
              the wheat is pure and grown organically at farm , the quality is
              high and cost is cheap. rich with nutrients and high in protein.
            </p>
            <p className="amount">$5000</p>
            <div className="hcard-btn">
              <button className="hcard button-cart">
                <span className="material-icons">remove_shopping_cart</span>
              </button>
              <button className="hcard button-like">
                <span className="material-icons">favorite_border</span>
              </button>

              <button className="hcard increase">
                <span className="material-icons">add</span>
              </button>
              <input className="input-cart" type="text" />
              <button className="hcard decrease">
                <span className="material-icons">remove</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="invoice">
        <div className="invoice-details">
          <h3>Price Details</h3>
          <hr />
          <div className="price-item">
            Price (2) on items : <span className="amount">$5000</span>{" "}
          </div>{" "}
          <br />
          <div className="discount-item">
            Discount on Price: <span className="amount">$1500</span>{" "}
          </div>{" "}
          <br />
          <div className="charges-item">
            Delivery Charges : <span className="amount">$500</span>{" "}
          </div>
          <br />
          <hr />
          <div className="total-amount">
            TOTAL AMOUNT : <span className="amount">$4000</span>{" "}
          </div>
          <br />
          <hr />
          <div className="total-save">
            You save (total) : <span className="amount">$1000</span>
          </div>
        </div>
        <button className="btn btn-primary-icon">
          Shop Now<span className="material-icons">shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export { CartManager };
