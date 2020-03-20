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
        <Card
          image={temporalImage}
          title="Shopping Pickup Concept"
          platform="Android"
          year="2020"
          url="https://marvelapp.com/6b4c8h1/screen/67126327"
        />

        <Card
          image={temporalImage}
          title="New home for students at Platzi"
          platform="Web Responsive"
          year="2019"
          url="https://marvelapp.com/6b4c8h1/screen/67126325"
        />
        <Card
          image={temporalImage}
          title="Electronic Vote Concept"
          platform="Web Responsive"
          year="2019"
          url="https://marvelapp.com/6b4c8h1/screen/67126324"
        />

        <Card
          image={temporalImage}
          title="BarcadeVG Store"
          platform="Web Responsive"
          year="2019"
          url="https://marvelapp.com/6b4c8h1/screen/67126323"
        />
        <Card
          image={temporalImage}
          title="The π Game"
          platform="Web Responsive"
          year="2019"
          url="https://marvelapp.com/6b4c8h1/screen/67126328"
        />
      </div>
    </div>
  </div>
);

export default Works;
