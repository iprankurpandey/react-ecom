import React from "react";
import "./CartManager.css";

function CartManager() {
  return (
    <div>
      <div class="card horizontal-card">
        <div class="card-image">
          <img
            class="cimage"
            alt="brand_image"
            src="https://i.ibb.co/rf2Sn3Q/raphael-rychetsky-li9-Jf-UHQf-OY-unsplash.jpg"
          />
          <div class="hcard-text">
            <h3> Wheat</h3>
            <h5>Malwa Bundeli Quality</h5>
            <h6>By : Prankur</h6>

            <p>
              {" "}
              the wheat is pure and grown organically at farm , the quality is
              high and cost is cheap. rich with nutrients and high in protein.
            </p>
            <p class="amount">$5000</p>
            <div class="hcard-btn">
              <button class="hcard button-cart">
                <span class="material-icons">remove_shopping_cart</span>
              </button>
              <button class="hcard button-like">
                <span class="material-icons">favorite_border</span>
              </button>

              <button class="hcard increase">
                <span class="material-icons">add</span>
              </button>
              <input class="input-cart" type="text" />
              <button class="hcard decrease">
                <span class="material-icons">remove</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="invoice">
        <div class="invoice-details">
          <h3>Price Details</h3>
          <hr />
          <div class="price-item">
            Price (2) on items : <span class="amount">$5000</span>{" "}
          </div>{" "}
          <br />
          <div class="discount-item">
            Discount on Price: <span class="amount">$1500</span>{" "}
          </div>{" "}
          <br />
          <div class="charges-item">
            Delivery Charges : <span class="amount">$500</span>{" "}
          </div>
          <br />
          <hr />
          <div class="total-amount">
            TOTAL AMOUNT : <span class="amount">$4000</span>{" "}
          </div>
          <br />
          <hr />
          <div class="total-save">
            You save (total) : <span class="amount">$1000</span>
          </div>
        </div>
        <button class="btn btn-primary-icon">
          Shop Now<span class="material-icons">shopping_cart</span>
        </button>
      </div>
    </div>
  );
}

export { CartManager };
