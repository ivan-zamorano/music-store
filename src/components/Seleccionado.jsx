<<<<<<< HEAD
import React from "react";

const Seleccionado = (props) => {
  const { marca, modelo, precio, imagen } = props;
  // const handleClick = () => {
  //     let compra = localStorage.getItem('compras')
  //     if (compra === null){
  //         compra = id
  //     }else{
  //         compra = compra+','+id
  //     }
  //     localStorage.setItem('compras', compra)
  // }
  return (
    <>
      <h3>{marca}</h3>
      <h4>{modelo}</h4>
      <h5>{precio}</h5>
      <img
        src={
          "https://music-store-ssd.herokuapp.com" +
          imagen[0].formats.thumbnail.url
        }
        alt=""
      />
    </>
  );
};

export default Seleccionado;
=======
import React from 'react'

const Seleccionado = (props) => {
    const {marca, modelo,precio,imagen,id} = props
    // const handleClick = () => {
    //     let compra = localStorage.getItem('compras')
    //     if (compra === null){
    //         compra = id
    //     }else{
    //         compra = compra+','+id
    //     }
    //     localStorage.setItem('compras', compra)
    // }
    return (
        <>
        <h3>{marca}</h3>
        <h4>{modelo}</h4>
        <h5>{precio}</h5>
        <img src={"https://music-store-ssd.herokuapp.com"+imagen[0].formats.thumbnail.url} alt="" />
        </>
    )
}

export default Seleccionado
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
