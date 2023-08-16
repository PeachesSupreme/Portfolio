import React from "react";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <Link to="/contact">
      <button className="con-button">Contact</button>
    </Link>
  );
};

export default ContactButton;
