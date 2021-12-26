import "./Header.scss";
import React, { useState } from "react";
import menu from "../../images/menu.png";
import { Buscador } from "./Buscador";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
import { Carrito } from "./Carrito";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export const HeaderMobile = () => {
  const [modalNav, setModalNav] = useState(false);
  function modalMenu() {
    const navBar = document.querySelector(".row-navbar");
    navBar.style.left = "0%";
    setModalNav(true);
    document.body.style.overflow = "hidden";
    navBar.addEventListener("click", (e) => {
      if (e.target.className == "row-navbar" || e.target.tagName == "A") {
        navBar.style.left = "-100%";
        document.body.style.overflow = "scroll";
      }
    });
  }
  return (
    <header className="cabecera_mobile">
      <NavBar />
      <div className="row-header">
        <div onClick={modalMenu} className="hamburger">
          <img src={menu} alt="menu" />
        </div>
        <Link className="h1" to="/">
          <span>B</span>IMARK
        </Link>
        {/* <Usuario /> */}
        <Carrito />
      </div>
      <Buscador />
    </header>
  );
};
export const Header_Desktop = () => {
  return (
    <header className="cabecera_desktop">
      <div className="row-navbar">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/ofertas">Ofertas</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row-header">
        <Link className="h1" to="/">
          <span>B</span>IMARK
        </Link>
        <Buscador />
        <Carrito />
      </div>
    </header>
  );
};

export const Header = () => {
  const media_desktop = useMediaQuery(950, 2000);

  return <>{media_desktop ? <Header_Desktop /> : <HeaderMobile />}</>;
};
