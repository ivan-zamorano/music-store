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
