<<<<<<< HEAD
import React, { useContext } from "react";
import "../statics/css/Producto.css";
import Context from "../context/Context";
import { Link } from "react-router-dom";

const Producto = (props) => {
  const { marca, modelo, precio, imagen, id } = props;
  const { addCarrito, getDetalle } = useContext(Context);

  const dotPrice = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <>
      <div className="card-producto">
        <h2 className="prod-marca">{marca}</h2>
        <h4 className="prod-modelo">{modelo}</h4>

        <div className="prod-img-wrapper">
          <Link
            to="/detalle"
            onClick={() => {
              getDetalle(id);
            }}
          >
            <img src={imagen[0].formats.thumbnail.url} alt="" />
          </Link>
        </div>
        <h4 className="prod-precio">${dotPrice(precio)}</h4>
        <button
          className="btn btn-dark"
          onClick={() => {
            addCarrito(id);
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default Producto;
=======
import React from 'react'
import "../statics/css/Producto.css"

const Producto = (props) => {
    const {marca, modelo,precio,imagen,id} = props
    const handleClick = () => {
        let compra = localStorage.getItem('compras')
        if (compra === null){
            compra = id
        }else{
            compra = compra+','+id
        }
        localStorage.setItem('compras', compra)
    }
    return (
        <>
        <div className="card-producto">
            <h3 className="prod-marca">{marca}</h3>
            <h4 className="prod-modelo">{modelo}</h4>
            
            <div className="prod-img-wrapper">
                <img src={imagen[0].formats.thumbnail.url} alt="" />
            </div>
            <h5 className="prod-precio">${precio}</h5>
            <button onClick={handleClick}>Agregar al carrito</button>
        </div>
        </>
    )
}

export default Producto
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
