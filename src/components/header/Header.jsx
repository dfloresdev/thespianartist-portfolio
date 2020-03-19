import React from "react";
import Menu from "./Menu";
import Description from "./Description";
import "../../assets/styles/components/header/Header.css";

const Header = () => (
  <div className="container-header">
    <Menu />
    <Description />
  </div>
);

export default Header;
