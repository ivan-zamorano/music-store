import React, { useState } from "react";
import { capitalize } from "../../services/Functions";

const ItemSub1 = (props) => {
  const [submenu, setSubmenu] = useState(false);
  const data = props.data;

  let parseData = () => {
    if (Array.isArray(data) === true) {
      console.log(data);
    } else {
      //console.log(Object.entries(data));
      Object.entries(data).map((item) => {
        console.log(item[1]);
      });
    }
  };

  return (
    <li className="submenu-item">
      {props.name[0].toUpperCase() + props.name.substr(1)}
    </li>
  );
};

export default ItemSub1;
