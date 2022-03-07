import React, { useContext, useEffect } from "react";
import Producto from "../components/Producto";
import "../statics/css/Productos.css";
import Filtros from "../components/Filtros";
import Context from "../context/Context";

const Productos = () => {
  const { display, getProductos, seleccion } = useContext(Context);

  useEffect(() => {
    getProductos();
  }, [seleccion]);

  console.log(display);

  return (
    <>
      <div className="productos-section-grid">
        <div className="">
          <Filtros></Filtros>
        </div>
        <div className="grid-productos">
          {display.map((item) => (
            <Producto {...item} key={item.id}></Producto>
          ))}
        </div>
      </div>
    </>
  );
};

export default Productos;
