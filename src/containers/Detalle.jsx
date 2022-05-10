import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import Filtros from "../components/Filtros";
import "../statics/css/Detalle.css";

const Detalle = () => {
  const { detalle, addCarrito, getProductos } = useContext(Context);

  const data = detalle[0];

  const [imageSize, setImageSize] = useState(false);

  const screenWidth = window.innerWidth;

  useEffect(() => {
    getProductos();
    window.scrollTo(0, 0);
    if (data.imagen[0].formats.small === undefined || screenWidth < 769) {
      setImageSize(false);
    } else {
      setImageSize(true);
    }
  }, []);

  return (
    <>
      <div className="container detalle">
        <div className="row">
          <div className="col-md-7">
            <div className="detalle-img">
              <img
                src={
                  imageSize
                    ? data.imagen[0].formats.small.url
                    : data.imagen[0].formats.thumbnail.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="detalle-info">
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
        </div>
        <div className="descripcion-wrp">
          <p className="descripcion">{data.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Detalle;
