import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../routes.js";
import "../style/homePage.css";
import CityFavorite from "./CityFavorite";
const HomePage = () => {
  return (
    <div className="container-fluid">
      <Form className="search-form d-flex justify-content-center">
        <Form.Group className="mb-3 search-form__input">
          <Form.Control type="search" placeholder="Укажите город" />
        </Form.Group>
      </Form>
      <section className="tip d-flex justify-content-center flex-column align-items-center">
        <div className="tip__container  d-flex justify-content-center">
          <div className="icon tip__icon_arrow"></div>
          <div className="tip__city-container">
            <span className="tip__city-container_text">
              Начните вводить город, например,{" "}
            </span>
            <Link to={routes.cityPage()} className="tip__city-container_link">
              Ижевск
            </Link>
          </div>
        </div>
        <div className="tip__bookmark-container d-flex justify-content-center flex-column align-items-center">
          <span className="tip__bookmark-container_text">
            Используйте значок «закладки», чтобы закрепить город на главной
          </span>
          <div className="icon tip__icon_bookmark"></div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
