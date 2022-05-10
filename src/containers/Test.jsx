import React, { useState } from "react";
import "../statics/css/Test.css";
// Test filtros
import filtros from "../services/Filtros.json";
import Dropdown from "../components/Dropdown";

const Test = () => {
  const categoria = Object.entries(filtros.categoria);
  let subCategoria1 = [];
  let subCategoria2 = [];
  let subCategoria3 = [];

  const getKeysCategorias = () => {
    categoria.map((item) => {
      console.log(item[0]);
    });
  };

  const setSubCategoria1 = () => {
    categoria.map((item) => {
      subCategoria1.push(item[1]);
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

  setSubCategoria1();
  getKeysSubCategoria1();
  setSubCategoria2();
  //getKeysSubCategoria2();

  const handleClick = () => {
    console.log(subCategoria1);
  };

  return (
    <div>
      <div className="container test-container">
        <h1>TEST ZONE</h1>
        <button onClick={handleClick}>CLICK ME</button>
        <Dropdown data={subCategoria1} />
      </div>
    </div>
  );
};

export default Test;
