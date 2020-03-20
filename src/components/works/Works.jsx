import React from "react";
import Card from "./card";
import temporalImage from "../../assets/statics/project.png";
import "../../assets/styles/components/works/Works.scss";

const Works = () => (
  <div className="container">
    <div className="works">
      <div className="works__division">
        <div className="works__division--line"></div>
        <div className="works__division--title">
          <p>Selected Work</p>
        </div>
        <div className="works__division--line"></div>
      </div>
      <div className="works__cards">
        <Card
          image={temporalImage}
          title="Offline Payments in Colombia"
          platform="Web Responsive"
          year="2018"
          url="https://marvelapp.com/6b4c8h1/screen/67126326"
        />
      </div>
    </div>
  </div>
);

export default Works;
