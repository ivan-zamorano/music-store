import React, { useContext } from "react";
import Context from "../context/Context";
import "../statics/css/Carrito.css";
import ContentCarrito from "../components/ContentCarrito";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, setLoading, getProductos } = useContext(Context);

  const handleClick = async () => {
    setLoading(true);
    await getProductos();
  };

  const renderCarrito = () => {
    if (carrito.length === 0) {
      return (
        <div className="carrito-vacio">
          <h1>¡Tu carrito está vacío!</h1>
          <p>
            Elegí algun producto de nuestra{" "}
            <Link to={"/"} onClick={handleClick}>
              tienda
            </Link>
          </p>
        </div>
      );
    } else {
      return <ContentCarrito />;
    }
  };

  return (
    <>
      <div className="carrito container">{renderCarrito()}</div>
    </>
  );
};

export default Carrito;
