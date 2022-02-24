<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import "../statics/css/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const cart = (
    <FontAwesomeIcon icon={faShoppingCart} className="header-cart" />
  );

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link to="/" className="navbar-brand home-logo">
            <h3>Music</h3>
            <h3>Store</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-end collapse navbar-collapse"
            id="navbarTogglerDemo01"
          >
            <ul className="navbar-nav justify-content-center align-items-center">
              <li className="">
                <Link to="/" className="nav-link ">
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="/productos" className="nav-link ">
                  Productos
                </Link>
              </li>
              <li className="">
                <Link to="/carrito" className="nav-link header-cart">
                  {cart}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
=======
import React from 'react'
import { Link } from 'react-router-dom'
import "../statics/css/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const cart = <FontAwesomeIcon icon={faShoppingCart} className="header-cart"/>

    return (
        <header>
            <div className="header-container">
                <div className="home-logo">
                    <div className="logo-wrapper">
                        <Link to="/">
                            <h3>Music</h3>
                            <h3>Store</h3>
                        </Link>
                    </div>
                </div>
                <ul>
                    <li className="header-btn">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="header-btn">
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li >
                        <Link to="/carrito">
                            {cart}
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
