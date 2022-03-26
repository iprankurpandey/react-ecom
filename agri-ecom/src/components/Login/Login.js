import React from "react";
import "./Login.css";

function Login() {
  return (
    <div>
      <div className="login-form-container">
        <div class="login-form">
          <div class="login-text-head">Login Page</div>

          <input
            class="input-in-input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            class="input-in-input"
            type="password"
            name="input password"
            placeholder="Password"
            required
            minlength="6"
          />

          <input type="submit" id="input-submit" name="input submit" required />

          <label for="input-submit"> </label>
          <div class="login-info">
            Not registered?{" "}
            <span class="login-link">
              <a href="/pages/signup.html" class="btn-link">
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Login };
