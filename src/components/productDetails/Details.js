import React from "react";
import { useLocation } from "react-router-dom";
import { normaliceText } from "../../helpers/normaliceText";
import { useFetch } from "../../hooks/useFetch";
import { Highlights } from "../highlights/Highlights";
import { SkeletonDetails } from "../skeletons.js/SkeletonDetails";

import { SliderComp } from "../slider/Slider";

import "./details.css";

export const Details = () => {
  const { state } = useLocation();

  const { data, loading } = useFetch(`/${state}`);

  const { name, description, model_features, model_highlights, photo, title } =
    data || {};

  return (
    <div className="details-container">
      {!loading ? (
        <>
          <section className="details-header">
            <div className="details-header__img-container">
              <img src={photo} alt={name} className="details-header__img" />
            </div>
            <div className="details-header__info">
              <h3 className="details-header__name">{name}</h3>
              <h1 className="details-header__h1">{title}</h1>
              <p className="details-header__p">{normaliceText(description)}</p>
            </div>
          </section>

          <SliderComp data={model_features} />

          <Highlights data={model_highlights} />
        </>
      ) : (
        <SkeletonDetails />
      )}
    </div>
  );
};
