import React, { useContext, useEffect } from "react";
import Producto from "../components/Producto";
import "../statics/css/Productos.css";
import Context from "../context/Context";
import { FilterContext } from "../context/FilterProvider";

const Productos = () => {
  const { getProductos, productos, loading } = useContext(Context);
  const { redirected } = useContext(FilterContext);

  useEffect(() => {
    if (redirected === false) {
      getProductos();
    }
  }, []);

  return (
    <>
      <section id="productos">
        {loading ? (
          <div className="loading" id="loading">
            <div className="spinner-border" role="status">
              <p className="visually-hidden">Loading...</p>
            </div>
          </div>
        ) : (
          <div className="productos-section">
            <div className="container">
              <div className="grid-productos">
                {productos.map((item) => (
                  <Producto {...item} key={item.id}></Producto>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Productos;
