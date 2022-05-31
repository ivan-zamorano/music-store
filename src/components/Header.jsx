import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../statics/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Filtros from "./filtros/Filtros";
import Context from "../context/Context";
import { FilterContext } from "../context/FilterProvider";

const Header = () => {
  const { carrito, getProductos, setLoading } = useContext(Context);
  const { mobileMenu, setMobileMenu } = useContext(FilterContext);
  const [isMobile, setIsMobile] = useState();

  const cart = <FontAwesomeIcon icon={faShoppingCart} />;

  const handleClick = async () => {
    setLoading(true);
    await getProductos();
  };

  useEffect(() => {
    if (window.innerWidth < 991) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <>
      <header>
        <div className="navbar navbar-expand-lg navbar-dark p-3">
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand home-logo"
              onClick={handleClick}
            >
              <h3>Music</h3>
              <h3>Store</h3>
            </Link>
            <div className="filtros-mobile">
              <button
                className="nav-btn"
                id="dropdownMenuButton1"
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Filtros
                clase={
                  isMobile
                    ? mobileMenu
                      ? "nav-filtros-mobile"
                      : "dropdown-hide"
                    : "container-fluid nav-filtros p-1"
                }
              />
            </div>
            <div className="header-cart">
              <Link to="/carrito" className="nav-link" id="nav-carrito">
                <span>{carrito.length}</span>
                <span>{cart}</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="filtros-desktop">
          <Filtros />
        </div>
      </header>
    </>
  );
};

export default Header;
