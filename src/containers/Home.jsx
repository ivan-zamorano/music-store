import React from 'react'
import "../statics/css/Home.css"
import { Link } from 'react-router-dom'
import guitarra from "../statics/img/guitarra.jpg"
import bajo from "../statics/img/bajo.jpg"
import bateria from "../statics/img/bateria.jpg"
import ampli from "../statics/img/ampli.jpg"
import pedal from "../statics/img/pedal.jpg"

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
            <div className="container">
                <div className="home-categorias">
                    <div className="card-categorias">
                        <img src={guitarra} alt="" />
                        <h4>Guitarras</h4>
                    </div>
                    <div className="card-categorias">
                        <img src={bajo} alt="" />
                        <h4>Bajos</h4>
                    </div>
                    <div className="card-categorias">
                        <img src={bateria} alt="" />
                        <h4>Percusión</h4>
                    </div>
                    <div className="card-categorias">
                        <img src={ampli} alt="" />
                        <h4>Amplificadores</h4>
                    </div>
                    <div className="card-categorias">
                        <img src={pedal} alt="" />
                        <h4>Pedales de efectos</h4>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home
