import React, { useContext } from "react";
import { FilterContext } from "../../context/FilterProvider";
import Categoria from "./Categoria";

const Filtros = (props) => {
  const { categorias, nombres } = useContext(FilterContext);

  return (
    <>
      <nav className={props.clase}>
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
