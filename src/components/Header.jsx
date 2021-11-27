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
                    {/* <li className="header-btn">
                        <Link to="carrito">Carrito</Link>
                    </li> */}
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
