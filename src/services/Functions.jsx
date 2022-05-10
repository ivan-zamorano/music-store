import React from "react";

export const dotPrice = (precio) => {
  return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export let capitalize = function (string) {
  var splitStr = string.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
};
