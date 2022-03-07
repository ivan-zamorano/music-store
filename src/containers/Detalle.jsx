import React, { useContext } from "react";
import Context from "../context/Context";
import Filtros from "../components/Filtros";
import "../statics/css/Detalle.css";

const Detalle = () => {
  const { detalle, addCarrito } = useContext(Context);

  const data = detalle[0];
  console.log(detalle);
  return (
    <>
      <div className="detalle-wrp">
        <div className="row">
          <div className="col-md-3">
            <Filtros />
          </div>
          <div className="col-md-9 detalle">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={data.imagen[0].formats.small.url}
                  className="detalle-img"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <h2 className="detalle-marca">{data.marca}</h2>
                <h4 className="detalle-modelo">{data.modelo}</h4>
                <div className="detalle-actions">
                  <p className="detalle-precio">AR$ {data.precio}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      addCarrito(data.id);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
            <div className="descripcion-wrp">
              <p className="descripcion">{data.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
