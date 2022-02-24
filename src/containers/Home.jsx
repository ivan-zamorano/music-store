<<<<<<< HEAD
import React from "react";
import "../statics/css/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const arrowRight = (
    <FontAwesomeIcon icon={faArrowRight} className="home-btn-arrow" />
  );
  return (
    <>
      <div className="home">
        <div className="home-splash">
          <div className="container splash">
            <h1>Music Store</h1>
            <h3>Tu tienda de música online</h3>
            <div className="action-wrapper">
              <Link to="/productos">
                <div className="">
                  <button className="home-action-btn">
                    <div className="btn-txt">
                      <span>Ir a la tienda </span>
                      <span>{arrowRight}</span>
                    </div>
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
=======
import React from 'react'
import "../statics/css/Home.css"
import { Link } from 'react-router-dom'
import Categorias from '../components/Categorias'

const Home = () => {

    return (
        <>
        <div className="home">
            <div className="home-splash">
                <div className="container splash">
                    <h1>Music Store</h1>
                    <h3>Tu tienda de música online</h3>
                    <div className="action-wrapper">
                        <Link to="/productos">
                            <button className="home-action-btn">Comenzar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Categorias></Categorias>
        </>
        
    )
}

export default Home
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
