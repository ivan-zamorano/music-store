<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Filtro from "./Filtro";
import "../statics/css/Filtros.css";

const Filtros = () => {
  const { filtros, getFiltros, seleccion, delAllFiltros } = useContext(Context);

  useEffect(() => {
    getFiltros();
  }, []);

  return (
    <>
      <div className="filtros-wrp">
        <h3>Filtros</h3>
        <button
          onClick={() => {
            delAllFiltros();
          }}
        >
          Quitar filtros
        </button>
        <ul className="filtros">
          {filtros.map((item) => (
            <Filtro {...item} key={item.id}></Filtro>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filtros;
=======
import React, {useEffect, useState} from 'react'
import Producto from './Producto'

const Filtros = () => {

    let url = "https://music-store-ssd.herokuapp.com/categorias"
    const [filtros, setFiltros] = useState(0)
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=> {
            setFiltros(data)
        })
    })

    console.log(filtros)

    

    return (
        <>
            <h3>Filtros</h3>
            <ul>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
                <li><input type="checkbox" />Test</li>
            </ul>
        </>
    )
}

export default Filtros
>>>>>>> ad91d0c8a26ac6334a1fac5caff17ec11a96f7a3
