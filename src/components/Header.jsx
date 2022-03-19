import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../statics/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Filtros from "../components/Filtros";
import Context from "../context/Context";

const Header = () => {
  const { carrito } = useContext(Context);

  const cart = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark p-3">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand home-logo">
              <h3>Music</h3>
              <h3>Store</h3>
            </Link>
            {/* <div className="container-fluid" id="nav-filtros">
              <div className="nav-filtros">
                <ul className="filtros">
                  <Filtros />
                </ul>
              </div>
            </div> */}
            <div className="dropdown-nav">
              <button
                className="nav-btn"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <ul
                className="dropdown-menu nav-btn-filtros"
                aria-labelledby="dropdownMenuButton1"
                id="dropdown-menu"
              >
                <Filtros />
              </ul>
            </div>
            <div>
              <div className="header-cart">
                <Link to="/carrito" className="nav-link" id="nav-carrito">
                  <span>{carrito.length}</span>
                  <span>{cart}</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className="container-fluid nav-filtros p-1">
          <ul className="filtros">
            <Filtros />
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
