import React from "react";
import Header from "../components/header/Header";
import Works from "../components/works/Works";
import BannerCompanies from "../components/banner-companies/BannerCompanies";
import "../assets/styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Works />
      <BannerCompanies />
    </div>
  );
}

export default App;
