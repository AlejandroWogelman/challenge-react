import React, { useRef } from "react";
import arrow_down from "../../assets/arrow_down.svg";
import { rotateImg } from "../../helpers/rotateImg";

import "./filter.css";

const liNames = [
  "Todos",
  "Autos",
  "Pickups y Comerciales",
  "SUVs y Crossovers",
];

export const Filter = ({ handleSetFilter }) => {
  const buttons = document.querySelectorAll(".filter-container__btn");
  const filter_ul_Ref = useRef();
  const filter__img = useRef();

  const handleClick = (e) => {
    const election = e.target.textContent;
    activeElection();
    e.target.classList.add("filter-container__btn-active");

    handleSetFilter("filter", election);

    filter_ul_Ref.current.classList.remove("filter-container__options-visible");
  };

  const activeElection = () => {
    buttons.forEach((e) => e.classList.remove("filter-container__btn-active"));
  };
  const clickOnFilterFor = () => {
    const condition = window.innerWidth <= 820;

    if (condition) {
      filter_ul_Ref.current.classList.toggle(
        "filter-container__options-visible"
      );
    }

    rotateImg(filter_ul_Ref, filter__img, "filter-container__options-visible");
  };

  return (
    <div className="filter-container">
      <h3 className="filter-container__title" onClick={clickOnFilterFor}>
        Filtrar por{" "}
        <img
          src={arrow_down}
          ref={filter__img}
          alt="arrow"
          className="filter-container__img"
        />
      </h3>
      <ul ref={filter_ul_Ref} className="filter-container__options">
        {liNames.map((el, i) => {
          return (
            <li key={i}>
              <button
                onClick={handleClick}
                className={
                  i == 0
                    ? "filter-container__btn filter-container__btn-active"
                    : "filter-container__btn"
                }
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
