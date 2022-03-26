import { BrowserRouter, Link, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CartManager from "./CartManager/CartManagerItems";
import LoginPage from "./Login/LoginPage";
import SignupPage from "./Signup/SignupPage";

import React from "react";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cartmanager">CartManager</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
        <Route path="/" element={<HomePage />} />
        <Route path="/cartmanager" element={<CartManager />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </BrowserRouter>
    </div>
  );
}

export default Main;
