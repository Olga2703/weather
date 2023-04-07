import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../routes.js";
import "../style/header.css";

const Header = () => {
  return (
    <Navbar className="header d-none d-sm-flex">
      <Link
        to={routes.homePage()}
        className="header__link d-flex align-items-center"
      >
        <div className="icon header__icon_logo"></div>
        <span className="header__title">WeatherCheck</span>
      </Link>
    </Navbar>
  );
};

export default Header;
