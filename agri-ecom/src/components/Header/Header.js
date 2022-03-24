import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <nav className="navigation-menu">
        <div className="left-side-panel" title="menu-item">
          <div className="menu">
            {" "}
            <span className="material-icons navmtrl">menu</span>
          </div>
          <img
            src="https://i.ibb.co/BwmMLhj/logo.png"
            alt="logo"
            className="logo-icon-head"
          />
          <span className="home">
            <span className="material-icons navmtrl">home</span>
          </span>
        </div>

        <div className="search-panel" title="search items">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search items"
            className="input-in-input"
          />
          <button className="btn btn-primary-outline">Login</button>
        </div>

        <div className="right-side-panel">
          <div className="favorites-item" title="favorite items">
            <span className="material-icons navmtrl">store</span>
          </div>
          <div className="favorites-item" title="favorite items">
            <span className="material-icons navmtrl">favorite_border</span>
          </div>
          <div className="shopping-cart" title="shopping cart">
            <span className="material-icons navmtrl">shopping_cart</span>
          </div>

          <div className="user-account" title="your account details">
            <span className="material-icons navmtrl">account_circle</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export { Header };
