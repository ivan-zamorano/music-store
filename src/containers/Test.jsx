import React, { useState } from "react";
import "../statics/css/Test.css";
// Test filtros
import filtros from "../services/Filtros.json";

const Test = () => {
  const entradas = Object.entries(filtros.categoria);
  let categorias = [];
  let subCategoria1 = [];
  let subCategoria2 = [];
  let subCategoria3 = [];

  const setCategorias = () => {
    entradas.forEach((item, index) => {
      item.push(index);
      categorias.push(item);
    });
  };

  setCategorias();

  const setSubCategoria1 = () => {
    const subCat = [];
    entradas.forEach((item, index) => {
      //console.log(Array.isArray(item[1]));
      if (Array.isArray(item[1]) === true) {
        subCat.push([item[1], index]);
        console.log(subCat);
        //console.log(getArray);
      }
    });
  };

  const setSubCategoria2 = () => {
    subCategoria1.map((item) => {
      if (Array.isArray(item) === true) {
        subCategoria2.push([]);
      } else {
        let subCat2 = Object.values(item);
        subCategoria2.push(subCat2);
      }
    });
  };

  const getKeysSubCategoria1 = () => {
    let returnArray = [];
    subCategoria1.map((item) => {
      if (Array.isArray(item) === true) {
        item.map((subItem) => {
          //console.log(subItem);
          returnArray.push(subItem);
        });
      } else {
        Object.keys(item).map((subItem) => {
          returnArray.push(subItem);
        });
      }
    });
    subCategoria1 = returnArray;
  };

  const getKeysSubCategoria2 = () => {
    subCategoria2.map((item) => {
      if (Array.isArray(item) === true) {
        item.map((subItem1) => {
          subItem1.map((subItem2) => {
            console.log(subItem2);
          });
        });
      } else {
        // Object.keys(item).map((subItem) => {
        //   console.log(subItem);
        // });
      }
    });
  };

  //setSubCategoria1();
  //getKeysSubCategoria1();
  //setSubCategoria2();
  //getKeysSubCategoria2();

  const handleClick = () => {
    console.log(subCategoria1);
  };

  return (
    <div>
      <div className="container test-container">
        <h1>TEST ZONE</h1>
        <button onClick={handleClick}>CLICK ME</button>
      </div>
    </div>
  );
};

export default Test;
