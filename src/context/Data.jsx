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
    detalle: [],
    loading: false,
  };

  //sessionStorage.clear();
  if (sessionStorage.length === 0) {
    sessionStorage.setItem("detalle", "[]");
    sessionStorage.setItem("carrito", "[]");
  }

  let storageCarrito = JSON.parse(sessionStorage.getItem("carrito"));
  const storageDetalle = JSON.parse(sessionStorage.getItem("detalle"));

  const [state, dispatch] = useReducer(Actions, estadoInicial);

  const getProductos = async () => {
    const res = await axios.get(
      "https://music-store-ssd.herokuapp.com/productos"
    );
    setLoading(true);
    dispatch({ type: "GET_PRODUCTOS", payload: res.data });
    toRender(res.data);
  };

  const toRender = (data) => {
    dispatch({ type: "DISPLAY", payload: data });
  };

  const addCarrito = (item) => {
    const prod = state.productos.filter((ite) => ite.id === item);
    console.log(item, typeof state.productos[0].id);
    storageCarrito.push(prod[0]);
    sessionStorage.setItem("carrito", JSON.stringify(storageCarrito));
    console.log(storageCarrito);
    dispatch({ type: "ADD_CARRITO", payload: prod });
  };

  const delCarrito = (item) => {
    const newCarrito = storageCarrito.filter((ite) => ite.id !== item);
    sessionStorage.setItem("carrito", JSON.stringify(newCarrito));
    console.log(newCarrito);
    dispatch({ type: "DEL_CARRITO", payload: item });
  };

  const getFiltros = async () => {
    const res = await axios.get(
      "https://music-store-ssd.herokuapp.com/categorias"
    );
    dispatch({ type: "GET_FILTROS", payload: res.data });
  };

  const addFiltros = (item) => {
    dispatch({ type: "ADD_FILTROS", payload: item });
  };

  const delAllFiltros = () => {
    dispatch({ type: "DEL_ALL_FILTROS", payload: state.seleccion });
  };

  const getDetalle = (item) => {
    const picked = state.productos.filter((ite) => ite.id === item);
    sessionStorage.setItem("detalle", JSON.stringify(picked));
    dispatch({ type: "GET_DETALLE", payload: picked });
  };

  const dotPrice = (precio) => {
    return precio.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const setLoading = (load) => {
    console.log(load);
    dispatch({ type: "SET_LOADING", payload: load });
  };

  return (
    <Context.Provider
      value={{
        productos: state.productos,
        carrito: storageCarrito,
        filtros: state.filtros,
        seleccion: state.seleccion,
        display: state.display,
        detalle: storageDetalle,
        loading: state.loading,
        getProductos,
        addCarrito,
        delCarrito,
        getFiltros,
        addFiltros,
        delAllFiltros,
        toRender,
        getDetalle,
        dotPrice,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Data;
