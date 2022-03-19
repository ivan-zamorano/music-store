import React, { useContext } from "react";
import Context from "../context/Context";
import "../statics/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";
import ContentCarrito from "../components/ContentCarrito";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito } = useContext(Context);

  const toRender = () => {
    if (carrito.length === 0) {
      return (
        <div className="carrito-vacio">
          <h1>¡Tu carrito está vacío!</h1>
          <p>
            Elegí algun producto de nuestra <Link to={"/"}>tienda</Link>
          </p>
        </div>
      );
    } else {
      return <ContentCarrito />;
    }
  };

  return (
    <>
      <div className="carrito container">{toRender()}</div>
    </>
  );
};

export default Carrito;
