import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiteContext } from "../../context/SiteContext";
import CartWidget from "./CartWidget";
import SearchImput from "./SearchImput";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const { isInStore, isInHome } = useContext(SiteContext);
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <Link to="/" className="navbar-brand">
        Pet's Shop
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <Link to="/" className="nav-item nav-link">
            Home
          </Link>

          <Link to="/store" className="nav-item nav-link store">
            Tienda
          </Link>
          <li className="nav-item dropdown">
            <Link
              to="/store"
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorías
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to="/alimentos" className="dropdown-item">
                Alimentos
              </Link>
              <Link to="/accesorios" className="dropdown-item">
                Accesorios
              </Link>
              <Link to="/juguetes" className="dropdown-item">
                Juguetes
              </Link>
              <Link to="/camas" className="dropdown-item">
                Camas y casas
              </Link>
              <Link to="/salud" className="dropdown-item">
                Salud
              </Link>
            </div>
          </li>
        </ul>
        <div className="widgets d-flex align-items-center">
          {isInStore ? <SearchImput /> : ""}
          <div>
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
