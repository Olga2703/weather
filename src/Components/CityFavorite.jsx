import React from "react";
import { Card } from "react-bootstrap";
import "../style/cityFavorite.css";
const CityFavorite = () => {
  return (
    <Card className="card">
      <Card.Body className="card__container">
        <Card.Title className="card__title">Москва</Card.Title>
        <div className="card__degrees">-13&#176;</div>
        <div className="icon card__icon"></div>
      </Card.Body>
    </Card>
  );
};

export default CityFavorite;
