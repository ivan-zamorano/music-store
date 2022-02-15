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
