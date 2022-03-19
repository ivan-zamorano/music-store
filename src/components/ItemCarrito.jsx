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
      <div className="item-carrito">
        <img
          src={imagen[0].formats.thumbnail.url}
          alt=""
          className="item-carrito-img"
        />
        <div className="item-carrito-txt">
          <div className="item-carrito-info">
            <p className="prod-marca">
              {marca}
              <br />
              {modelo}
            </p>
          </div>
          <div className="item-carrito-precio">
            <p>AR$ {dotPrice(precio)}</p>
          </div>
        </div>

        <button className="carrito-del-btn" onClick={handleDel}>
          Eliminar
        </button>
      </div>
    </>
  );
};

export default ItemCarrito;
