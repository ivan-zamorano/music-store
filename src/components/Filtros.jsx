import React, { useContext, useEffect } from "react";
import Context from "../context/Context";
import Filtro from "./Filtro";
import "../statics/css/Filtros.css";
import { Link } from "react-router-dom";

const Filtros = () => {
  const { filtros, getFiltros, seleccion, delAllFiltros } = useContext(Context);

  useEffect(() => {
    getFiltros();
  }, []);

  return (
    <>
      {/* <div className="filtros-wrp">
        <ul className="filtros navbar-nav">
          {filtros.map((item) => (
            <li>
              <Filtro {...item} key={item.id} />
            </li>
          ))}
          <li
            onClick={() => {
              delAllFiltros();
            }}
            className="filtros-all"
          >
            Todas
          </li>
        </ul>
      </div> */}
      {filtros.map((item) => (
        // <Filtro {...item} key={item.id} />
        <Link to={"/"}>
          <Filtro {...item} key={item.id} />
        </Link>
      ))}
      <Link to={"/"}>
        <li
          onClick={() => {
            delAllFiltros();
          }}
        >
          Todas
        </li>
      </Link>
    </>
  );
};

export default Filtros;
