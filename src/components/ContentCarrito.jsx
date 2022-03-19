import React, { useContext } from "react";
import ItemCarrito from "../components/ItemCarrito";
import Context from "../context/Context";

const ContentCarrito = () => {
  const { carrito, dotPrice } = useContext(Context);

  let total = 0;

  const getTotal = carrito.map((item) => {
    total = total + parseInt(item.precio);
  });
  return (
    <>
      <div>
        {carrito.map((item, i) => (
          <ItemCarrito {...item} key={i} />
        ))}
      </div>
      <div className="comprar">
        <div className="carrito-precio">
          Total a pagar: <br />
          <strong>AR$ {dotPrice(total)}</strong>
        </div>
        <form
          id="comprarCarrito"
          name="formularioCompra"
          method="post"
          action="https://music-store-zdw.000webhostapp.com/MercadoPago/"
        >
          <input name="idProducto" value="MusicStore" type="hidden" />
          <input name="producto" value="Productos" type="hidden" />
          <input name="precio" value="1" type="hidden" />
          <input name="imagen" value="" type="hidden" />
          <input name="uid" value="toto" type="hidden" id="uidx" />
          {/* <label htmlFor="nombrex">Nombre</label> <br />
            <input name="nombre" type="text" id="nombrex" /> <br />
            <label htmlFor="emailx">Mail</label> <br />
            <input name="mail" type="text" id="emailx" /> <br /> */}
          <button className="btn-comprar" type="submit">
            Comprar con MercadoPago
          </button>
        </form>
      </div>
    </>
  );
};

export default ContentCarrito;
