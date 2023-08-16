import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/" className="home-link">
      <img className="home-logo" src="images/ryan.png" alt="home page" />
    </Link>
  );
};

export default HomeButton;
