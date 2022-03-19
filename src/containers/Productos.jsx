import React, { useContext, useEffect } from "react";
import Producto from "../components/Producto";
import "../statics/css/Productos.css";
import Filtros from "../components/Filtros";
import Context from "../context/Context";

const Productos = () => {
  const { display, getProductos, seleccion, loading } = useContext(Context);

  useEffect(() => {
    getProductos();
    //setLoading();
  }, [seleccion]);

  let load = document.getElementById("loading");
  //console.log(load);
  // if (loading === true) {
  //   load.style.display = "none";
  // }

  let deconstruct = [];
  display.map((item) => {
    deconstruct.push(<Producto {...item} key={item.id}></Producto>);
  });
  const renderItems = () => {};

  return (
    <>
      {/* <div className="loading" id="loading">
        <div className="spinner-border" role="status">
          <p className="visually-hidden">Loading...</p>
        </div>
      </div> */}
      <section id="productos">
        <div className="productos-section">
          <div className="container">
            <div className="grid-productos">
              {display.map((item) => (
                <Producto {...item} key={item.id}></Producto>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;
