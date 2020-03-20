import React from "react";
import signature from "../../assets/statics/Uriel-signed.png";
import "../../assets/styles/components/header/Menu.scss";

const Menu = () => (
  <div className="container">
    <nav className="menu">
      <div className="menu__signature">
        <img src={signature} alt="Signature Uriel Ramirez" />
      </div>
      <div className="menu__options">
        <a href="/">
          <p>Work</p>
        </a>
        <a href="/">
          <p>About</p>
        </a>
        <a href="/">
          <p>More</p>
        </a>
      </div>
      <div className="menu__button">
        <a className="basic-button" href="/">
          Let's Talk
        </a>
      </div>
    </nav>
  </div>
);

export default Menu;
