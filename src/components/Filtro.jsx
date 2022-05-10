import React from "react";
import Context from "../context/Context";
import { useContext } from "react";
import { capitalize } from "../services/Functions";
import filtros from "../services/Filtros.json";

const Filtro = (props) => {
  const { id, categoria } = props;
  const { addFiltros, setLoading } = useContext(Context);

  const handleClick = () => {
    //addFiltros(id);
    //setLoading(true);
    console.log(categoria);
  };

  return <li onClick={handleClick}>{capitalize(categoria)}</li>;
};

export default Filtro;
