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
        <p className="prod-modelo">{modelo}</p>

        <div className="prod-wrp">
          <Link
            to="/detalle"
            onClick={() => {
              getDetalle(id);
            }}
          >
            <div className="prod-img-wrp">
              <img
                src={imagen[0].formats.thumbnail.url}
                alt=""
                className="prod-img"
              />
            </div>
          </Link>
        </div>
        <h4 className="prod-precio">${dotPrice(precio)}</h4>
        <button
          className="btn"
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
