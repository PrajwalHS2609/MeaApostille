import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navContainer">
      <Logo />
      <Menu />
    </div>
  );
};

export default NavBar;
