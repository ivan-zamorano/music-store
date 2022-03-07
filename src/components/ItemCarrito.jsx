import React, { useContext } from "react";
import "../statics/css/ItemCarrito.css";
import Context from "../context/Context";

const ItemCarrito = (props) => {
  const { marca, modelo, precio, imagen, id } = props;
  const { delCarrito, dotPrice } = useContext(Context);

  const handleDel = () => {
    delCarrito(id);
  };

  return (
    <>
      <div className="carrito-item-wrp">
        <div className="carrito-item">
          <div className="carrito-txt">
            <h3 className="prod-marca">{marca}</h3>
            <h4 className="prod-modelo">{modelo}</h4>
            <h5 className="carrito-item-precio">AR$ {dotPrice(precio)}</h5>
          </div>
          <img
            src={imagen[0].formats.thumbnail.url}
            alt=""
            className="carrito-item-img"
          />
          <button className="carrito-del-btn" onClick={handleDel}>
            Eliminar del carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCarrito;
