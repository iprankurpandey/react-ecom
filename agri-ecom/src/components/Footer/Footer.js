import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-items">
        <div className="h4">
          {" "}
          Made with ❤️ <code></code>by Prankur Pandey{" "}
        </div>

        <div className="social-media-links">
          <div className="github">
            <i className="fa fa-github"></i>
          </div>
          <div className="twitter">
            <i className="fa fa-twitter"></i>
          </div>
          <div className="Linkedin">
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="H5">© 2021 Agri UI </div>
      </footer>
    </div>
  );
}

export { Footer };
