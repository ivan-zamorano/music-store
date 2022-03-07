import React, { useContext } from "react";
import ItemCarrito from "../components/ItemCarrito";
import Context from "../context/Context";

const ContentCarrito = () => {
  const { carrito } = useContext(Context);
  return (
    <>
      <div className="">
        {carrito.map((item, i) => (
          <ItemCarrito {...item} key={i} />
        ))}
      </div>
    </>
  );
};

export default ContentCarrito;
