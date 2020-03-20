import React from "react";
import "../../assets/styles/components/works/card.scss";

const Card = ({ image, title, platform, year, url }) => (
  <div className="card">
    <div className="card__img">
      <img src={image} alt={title} />
    </div>
    <div className="card__info">
      <div className="card__info-title">
        <p>{title}</p>
      </div>
      <div className="card__info-description">
        <p>
          <strong>Platform: </strong>
          <span>{platform}</span>
        </p>

        <p>
          <strong>Year: </strong>
          <span>{year}</span>
        </p>
      </div>
      <div className="card__info-button">
        <a className="basic-button" href={url} target="_blank">
          See More
        </a>
      </div>
    </div>
  </div>
);

export default Card;
