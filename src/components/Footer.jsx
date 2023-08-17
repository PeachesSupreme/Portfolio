import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="nav-foot">
        <p>&#169;2023 Ryan Crowley</p>
        <Link to="/" className="nav-link2">
          Home
        </Link>
        <Link to="/about" className="nav-link2">
          About
        </Link>
        <Link to="/work" className="nav-link2">
          Work
        </Link>
        <Link to="/blog" className="nav-link2">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Footer;
