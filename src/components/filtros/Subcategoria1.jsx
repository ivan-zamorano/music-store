import React, { useState, useLayoutEffect } from "react";
import "../../statics/css/Subcategoria1.css";
import ItemSub1 from "./ItemSub1";

const Subcategoria1 = (props) => {
  const { sub1, data } = props;

  let dataCheck = () => {
    if (Array.isArray(data) === false) {
      return data;
    }
  };

  return (
    <>
      <ul className="dropdown-filters">
        {sub1.map((item, index) => (
          <ItemSub1
            name={item}
            data={() => {
              dataCheck();
            }}
            key={index}
          />
        ))}
      </ul>
    </>
  );
};

export default Subcategoria1;
