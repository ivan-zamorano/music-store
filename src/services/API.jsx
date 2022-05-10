import axios from "axios";

//URLs
const andreaniLoginUrl = "https://apisqa.andreani.com/login";
const andreaniSucursalesUrl = "https://apisqa.andreani.com/v2/sucursales";

export const getProductos = async () => {
  const res = await axios.get(
    "https://music-store-ssd.herokuapp.com/productos"
  );
  return res;
};

export const andreaniLogin = async () => {
  const response = await axios.get(andreaniSucursalesUrl);
  console.log("andreani login: ", response);
};
