import React from "react";
import "../statics/css/Dropdown.css";

const Dropdown = (props) => {
  const { subCategoria1 } = props;
  return (
    <>
      <ul>
        {subCategoria1.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default Dropdown;
