import React, { useContext, useState } from "react";
// import Context from "../../context/Context";
// import { Link } from "react-router-dom";
import { FilterContext } from "../../context/FilterProvider";
import Categoria from "./Categoria";

const Filtros = () => {
  const { categorias, nombres } = useContext(FilterContext);

  return (
    <>
      <nav className="container-fluid nav-filtros p-1">
        <ul className="filtros-main">
          {categorias.map((item, index) => (
            <Categoria
              name={nombres[index][0]}
              data={item}
              subNames={nombres[index]}
              key={index}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Filtros;
