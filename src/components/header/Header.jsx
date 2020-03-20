import React from "react";
import Menu from "./Menu";
import Description from "./Description";
import "../../assets/styles/components/header/Header.scss";

const Header = () => (
  <div className="container-header">
    <Menu />
    <Description />
  </div>
);

export default Header;
