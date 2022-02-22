import React from "react";
import "../statics/css/Filtro.css";
import Context from "../context/Context";
import { useContext } from "react";

const Filtro = (props) => {
  const { categoria, id } = props;
  const { addFiltros } = useContext(Context);

  let capitalize = function (string) {
    var splitStr = string.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  return (
    <div className="filtro">
      <li
        onClick={() => {
          addFiltros(id);
        }}
      >
        {capitalize(categoria)}
      </li>
    </div>
  );
};

export default Filtro;
