import React from "react";
import { Link } from "react-router-dom";
import routes from "../routes.js";
import "../style/cityPage.css";

const CityPage = () => {
  return (
    <div className="container-fluid city-page__container">
      <nav className="controllers d-flex justify-content-between align-items-center">
        <Link
          to={routes.homePage()}
          className="controllers__button-back btn d-flex align-items-center justify-content-between"
        >
          <div className="icon icon__arrow-back"></div>
          <span className="d-none d-sm-block">Назад</span>
        </Link>
        <button className="btn controllers__button-bookmark">
          <div className="icon controllers__icon_bookmark"></div>
        </button>
      </nav>
      <section className="city-weather d-flex flex-column justify-content-center align-items-center">
        <h1 className="city-weather__title">Москва</h1>
        <h4 className="city-weather__description">Облачно с прояснениями</h4>
        <div className="city-weather__degrees-container d-flex">
          <span className="city-weather__degrees">-13&#176;</span>
          <div className="icon city-weather__icon_thunderstorm"></div>
        </div>
        <div className="city-weather__pressure-container d-flex align-items-center">
          <div className="icon city-weather__icon_barometer"></div>
          <span className="city-weather__pressure">756 мм рт.ст.</span>
        </div>
        <h6 className="city-weather__sunset">Закат в 18:00</h6>
      </section>
    </div>
  );
};

export default CityPage;
