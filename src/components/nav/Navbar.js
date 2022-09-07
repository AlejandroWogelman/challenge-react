import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import close from "../../assets/close.svg";
import menu from "../../assets/menu.svg";

import "./navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navRef = useRef();
  const imgRef = useRef();
  const menuName = useRef();

  const toggleNav = () => {
    if (!navRef.current.classList.contains("ul_show")) {
      navRef.current.classList.add("ul_show");
      imgRef.current.src = close;
      menuName.current.textContent = "Cerrar";
      return;
    }
    navRef.current.classList.remove("ul_show");
    menuName.current.textContent = "Menu";
    imgRef.current.src = menu;
    return;
  };

  const clickInLogo = () => {
    navigate("/");
  };

  useEffect(() => {
    const links = document.querySelectorAll(".nav__links a");

    if (pathname === "/") {
      links[1].classList.remove("nav__links--active");
      links[0].classList.add("nav__links--active");
    } else {
      links[1].classList.add("nav__links--active");
      links[0].classList.remove("nav__links--active");
    }
  }, [pathname]);

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <span className="nav__logo" onClick={clickInLogo}>
            EGO
          </span>

          <div className="nav__links">
            <Link to={"/"}>Modelos</Link>
            <Link className="nav__links--active" to={"#"}>
              Ficha de Modelos
            </Link>
          </div>
        </div>

        <div className="nav__btn-container">
          <span ref={menuName}>Menú</span>
          <button onClick={toggleNav} className="nav__button">
            <img src={menu} alt="menu-button" ref={imgRef} />
          </button>
        </div>
        <div className="nav__ul-container" ref={navRef}>
          <ul className="nav__ul nav__ul--line">
            <li>
              <Link className="text-none" to={"/"}>
                Modelos
              </Link>
            </li>
            <li>Servicios y Accesorios</li>
            <li>Financiación</li>
            <li>Reviews y Comunidad</li>
          </ul>

          <ul className="nav__ul nav__ul--line">
            <li>Toyota Mobility Service</li>
            <li>Toyota Gazoo Racing</li>
            <li>Toyota Híbridos</li>
          </ul>

          <ul className="nav__ul">
            <li>Concesionarios</li>
            <li>Test Drive</li>
            <li>Contacto</li>
          </ul>
          <ul className="nav__ul nav__ul--dark">
            <li>Actividades</li>
            <li>Servicios al Cliente</li>
            <li>Ventas Especiales</li>
            <li>Innovación</li>
            <li>Prensa</li>
            <li>Acerca de...</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
