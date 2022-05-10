import React, { useContext, useEffect } from "react";
import Producto from "../components/Producto";
import "../statics/css/Productos.css";
import Context from "../context/Context";

const Productos = () => {
  const { getProductos, productos, loading } = useContext(Context);

  useEffect(() => {
    getProductos();
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
