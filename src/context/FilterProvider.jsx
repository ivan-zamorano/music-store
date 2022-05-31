import { createContext, useEffect, useState } from "react";
import filtros from "../services/Filtros.json";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  //Estados
  const [mobileMenu, setMobileMenu] = useState(false);
  const [redirected, setRedirected] = useState(false);

  //Data
  const entradas = Object.entries(filtros.categoria);
  const nombres = Object.entries(filtros.nombres);
  const categorias = [];
  const subCategoria1 = [];

  const setCategorias = () => {
    entradas.forEach((item, index) => {
      item.push(index);
      categorias.push(item);
    });
  };

  const setSubCategoria1 = () => {
    entradas.forEach((item, index) => {
      if (Array.isArray(item[1]) === true) {
        subCategoria1.push([item[1], index]);
      } else {
        let itemToArray = Object.entries(item[1]);
        subCategoria1.push([itemToArray, index]);
      }
    });
  };
  setCategorias();
  setSubCategoria1();

  return (
    <FilterContext.Provider
      value={{
        nombres: nombres,
        categorias: categorias,
        sub1: subCategoria1,
        mobileMenu: mobileMenu,
        redirected: redirected,
        setMobileMenu,
        setRedirected,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
