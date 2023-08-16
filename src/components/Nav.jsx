import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/about" className="nav-link">
        About
      </Link>
      <Link to="/work" className="nav-link">
        Work
      </Link>
      <Link to="/blog" className="nav-link">
        Blog
      </Link>
    </div>
  );
};
export default Nav;
