import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import Context from "../../context/Context";
import { capitalize } from "../../services/Functions";
import filtros from "../../services/Filtros.json";
import { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";
import Subcategoria1 from "./Subcategoria1";
import { Link } from "react-router-dom";

const Categoria = (props) => {
  const [submenu, setSubmenu] = useState(false);
  const data = props.data;
  const subNames = props.subNames[1];
  const { setFiltros, getProductos, setLoading } = useContext(Context);
  const { setMobileMenu, setRedirected } = useContext(FilterContext);

  const parseData = () => {
    if (Array.isArray(subNames) === true) {
      return subNames;
    } else {
      return Object.keys(subNames);
    }
  };

  const handleClick = async () => {
    setMobileMenu(false);
    setLoading(true);
    setRedirected(true);
    await getProductos();
    setFiltros(data[0]);
    //setSubmenu(!submenu);
  };
  return (
    <>
      <li
        className="filtros-categoria"
        onMouseEnter={(e) => {
          setSubmenu(true);
        }}
        onMouseLeave={() => {
          setSubmenu(false);
        }}
        onClick={handleClick}
      >
        <Link to="/">{capitalize(props.name)}</Link>
        {/* {submenu && <Subcategoria1 sub1={parseData()} data={data[1]} />} */}
      </li>
    </>
  );
};

export default Categoria;
