import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <div class="signup-form">
        <div class="signup-text-head">Signup Page</div>

        <input
          class="input-in-input"
          type="text"
          name="name"
          value=""
          placeholder="Name"
          required
        />

        <input
          class="input-in-input"
          type="email"
          name="email"
          value=""
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

        <input
          class="input-in-input"
          type="password"
          name="input password"
          placeholder="Retype Password"
          required
          minlength="6"
        />

        <input type="submit" id="input-submit" name="input submit" required />

        <label for="input-submit"> </label>
        <div class="login-info">
          Already registered?{" "}
          <span class="login-link">
            <a href="/pages/login.html" class="btn-link">
              Login
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export { SignUp };
