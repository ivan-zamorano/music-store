import Context from "./Context";
import axios from "axios";
import { useReducer } from "react";
import Actions from "./Actions";

const Data = (props) => {
  const { children } = props;

  const estadoInicial = {
    productos: [],
    carrito: [],
    filtros: [],
    seleccion: [],
    display: [],
  };

  const [state, dispatch] = useReducer(Actions, estadoInicial);

  const getProductos = async () => {
    const res = await axios.get(
      "https://music-store-ssd.herokuapp.com/productos"
    );
    dispatch({ type: "GET_PRODUCTOS", payload: res.data });
    toRender(res.data);
  };

  const toRender = (data) => {
    dispatch({ type: "DISPLAY", payload: data });
  };

  const addCarrito = (item) => {
    dispatch({ type: "ADD_CARRITO", payload: item });
  };

  const delCarrito = (item) => {
    dispatch({ type: "DEL_CARRITO", payload: item });
  };

  const getFiltros = async () => {
    const res = await axios.get(
      "https://music-store-ssd.herokuapp.com/categorias"
    );
    console.log("FILTROS: ", res.data);
    dispatch({ type: "GET_FILTROS", payload: res.data });
  };

  const addFiltros = (item) => {
    dispatch({ type: "ADD_FILTROS", payload: item });
  };

  const delAllFiltros = () => {
    dispatch({ type: "DEL_ALL_FILTROS", payload: state.seleccion });
  };

  //Al atributo value le vamos a pasar un objeto con la data
  //que queremos entregar desde Context.Provider
  return (
    <Context.Provider
      value={{
        productos: state.productos,
        carrito: state.carrito,
        filtros: state.filtros,
        seleccion: state.seleccion,
        display: state.display,
        getProductos,
        addCarrito,
        delCarrito,
        getFiltros,
        addFiltros,
        delAllFiltros,
        toRender,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Data;
