import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import Filtro from "./Filtro";
//import "../statics/css/Filtros.css";
import { Link } from "react-router-dom";
import filtros from "../services/Filtros.json";
import { capitalize } from "../services/Functions";

const Filtros = () => {
  // const { filtros, getFiltros, setLoading, delAllFiltros } =
  //   useContext(Context);
  const [subCategoria1, setSubCategoria1] = useState(false);

  let caca = document.getElementById("caca");

  const showSub1 = () => {
    setSubCategoria1(!subCategoria1);
  };

  return (
    <>
      {/* <li id="caca" onClick={pepa}>
        
      </li> */}
      {Object.keys(filtros.categoria).map((item) => (
        <li onClick={showSub1}>
          <p>{capitalize(item)}</p>
          {subCategoria1 ? (
            <ul>
              <li>ta</li>
              <li>te</li>
              <li>ti</li>
              <li>to</li>
              <li>tu</li>
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </>
  );
};

export default Filtros;
