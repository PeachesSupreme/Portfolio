import React from "react";
import ContactButton from "./ContactButton";
import HomeButton from "./HomeButton";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <HomeButton />
      <Nav />
      <ContactButton />
    </div>
  );
};

export default Header;
