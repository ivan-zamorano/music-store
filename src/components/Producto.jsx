import React, { useContext } from "react";
import "../statics/css/Producto.css";
import Context from "../context/Context";
import { Link } from "react-router-dom";

const Producto = (props) => {
  const { marca, modelo, precio, imagen, id } = props;
  const { addCarrito, getDetalle, dotPrice } = useContext(Context);

  // const dotPrice = (precio) => {
  //   return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // };

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
