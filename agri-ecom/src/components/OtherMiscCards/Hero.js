import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div>
      <main class="main-container">
        <div class="text-in-image">
          <span class="mtext">
            <div class="h1">Agri Store</div>
          </span>
          <span class="head-text">by farmers ,to farmers.</span>

          <div class="logo-text">Summer Sale 2022</div>

          <div class="subtext-image">All in one Market Place for Farmers</div>
          <div class="btn btn-outline">
            <button class="btn btn-success-outline">Shop Now</button>{" "}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Hero;
