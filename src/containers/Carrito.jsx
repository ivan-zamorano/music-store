import React, { useContext } from "react";
import Context from "../context/Context";
import "../statics/css/Carrito.css";
import ContentCarrito from "../components/ContentCarrito";
import CarritoVacio from "../components/CarritoVacio";

const Carrito = () => {
  const { carrito, dotPrice } = useContext(Context);

  let total = 0;

  const getTotal = carrito.map((item) => {
    total = total + parseInt(item.precio);
  });

  const toRender = () => {
    if (carrito.length === 0) {
      return <CarritoVacio />;
    } else {
      return <ContentCarrito />;
    }
  };

  return (
    <>
      <div className="carrito container-fluid">
        <div className="row ">
          <div className="col-md-6">{toRender()}</div>
          <div className="col-md-6">
            <div className="carrito-precio">
              Total a pagar: <br />
              <strong>AR$ {dotPrice(total)}</strong>
            </div>
          </div>
        </div>
      </div>
      {/* {compra.length > 0 &&
        compra.map((item, i) => (
          <Seleccionado key={item.id + i} {...item}></Seleccionado>
        ))}

      <form
        id="comprarCarrito"
        name="formularioCompra"
        method="post"
        action="https://music-store-zdw.000webhostapp.com/MercadoPago/"
      >
        <input name="idProducto" value="MusicStore" type="hidden" />
        <input name="producto" value="Productos" type="hidden" />
        <input name="precio" value="450" type="hidden" />
        <input name="imagen" value="" type="hidden" />
        <input name="uid" value="toto" type="hidden" id="uidx" />
        <label htmlFor="nombrex">Nombre</label> <br />
        <input name="nombre" type="text" id="nombrex" /> <br />
        <label htmlFor="emailx"></label> <br />
        <input name="mail" type="text" id="emailx" /> <br />
        <button type="submit">Comprar con MercadoPago</button>
      </form> */}
    </>
  );
};

export default Carrito;
