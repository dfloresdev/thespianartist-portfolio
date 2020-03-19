import React from "react";
import avatar from "../../assets/statics/avenger.png";
import "../../assets/styles/components/header/Description.css";

const Description = () => (
  <div className="container" style={{ padding: 0 }}>
    <div className="description">
      <div className="description__avatar">
        <img src={avatar} alt="Avatar uriel" />
      </div>
      <div className="description__text">
        <p className="subtitle">Hi! I am Uriel, Product Designer and</p>
        <p className="title">
          I love to create digital
          <br />
          products
        </p>
      </div>
    </div>
  </div>
);

export default Description;
