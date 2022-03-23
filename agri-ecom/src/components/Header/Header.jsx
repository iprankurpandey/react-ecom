import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav class="navigation-menu">
        <div class="left-side-panel" title="menu-item">
          <div class="menu">
            {" "}
            <span class="material-icons navmtrl">menu</span>
          </div>
          <img
            src="https://i.ibb.co/BwmMLhj/logo.png"
            alt="logo"
            class="logo-icon-head"
          />
          <span class="home">
            <span class="material-icons navmtrl">home</span>
          </span>
        </div>

        <div class="search-panel" title="search items">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search items"
            class="input-in-input"
          />
          <button class="btn btn-primary-outline">Login</button>
        </div>

        <div class="right-side-panel">
          <div class="shopping-cart" title="shopping cart">
            {" "}
            <span class="material-icons navmtrl">shopping_cart</span>
          </div>
          <div class="favorites-item" title="favorite items">
            <span class="material-icons navmtrl">favorite_border</span>
          </div>
          <div class="user-account" title="your account details">
            <span class="material-icons navmtrl">account_circle</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
