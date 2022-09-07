import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/formatPrice";
import "./card.css";

export const Card = ({ name, id, photo, price, segment, thumbnail, year }) => {
  return (
    <article className="card-container">
      <h2 className="card-container__title">{name}</h2>
      <div className="card-container__info">
        <p>
          {year} | {formatPrice(price)}
        </p>
      </div>
      <picture>
        <img
          src={thumbnail}
          loading="lazy"
          alt={name}
          className="card-container__img"
        />
      </picture>
      <div className="card-container__button">
        <Link to={`/${name}`} state={id} className="card-container__link">
          Ver Modelo
        </Link>
      </div>
    </article>
  );
};
