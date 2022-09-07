import React, { useRef } from "react";
import arrow_down from "../../assets/arrow_down.svg";
import { backInListSelected } from "../../helpers/backInListSelected";
import { rotateImg } from "../../helpers/rotateImg";

import "./select.css";

export const Select = ({ handleSetFilter }) => {
  const select_ul = useRef();
  const select_arrow = useRef();

  const handleSelect = (name) => {
    //Funcion para agregar y quitar background en la opcion seleccionada
    backInListSelected(name);
    select_ul.current.classList.remove("select-container_ul-visible");
    handleSetFilter("order", name);
  };

  const clickOrderBy = (e) => {
    select_ul.current.classList.toggle("select-container__ul--visible");
    rotateImg(select_ul, select_arrow, "select-container__ul--visible");
  };

  return (
    <div className="select-container">
      <h3 onClick={clickOrderBy} className="select-container__title">
        Ordenar por{" "}
        <img ref={select_arrow} src={arrow_down} alt="arrow" width="10px" />
      </h3>
      <ul
        ref={select_ul}
        className="select-container__ul"
        onChange={handleSelect}
      >
        <li
          className="select-container__active"
          title="nothing"
          onClick={() => handleSelect("nothing")}
        >
          Nada
        </li>
        <li title="minor" onClick={() => handleSelect("minor")}>
          De <strong>menor</strong> a <strong>mayor</strong> precio
        </li>
        <li title="high" onClick={() => handleSelect("high")}>
          De <strong>mayor</strong> a <strong>menor</strong> precio
        </li>
        <li title="new" onClick={() => handleSelect("new")}>
          Más <strong>nuevos</strong> primero
        </li>
        <li title="old" onClick={() => handleSelect("old")}>
          Más <strong>viejos</strong> primero
        </li>
      </ul>
    </div>
  );
};
