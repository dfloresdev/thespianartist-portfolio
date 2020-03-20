import React from "react";
import mintic from "../../assets/statics/mintic.png";
import "../../assets/styles/components/banner-companies/BannerCompanies.scss";

const BannerCompanies = () => (
  <div className="banner-companies">
    <div className="banner-companies__container">
      <div className="title">
        <p>Working together with companies and organizations like:</p>
      </div>
      <div className="container container-companies">
        <img src={mintic} alt="Mintic" />

        <img src={mintic} alt="Mintic" />

        <img src={mintic} alt="Mintic" />

        <img src={mintic} alt="Mintic" />

        <img src={mintic} alt="Mintic" />
      </div>
    </div>
  </div>
);

export default BannerCompanies;
