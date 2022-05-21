import Context from "./Context";
import axios from "axios";
import { useReducer } from "react";
import Actions from "./Actions";

const ContextProvider = (props) => {
  const { children } = props;

  const estadoInicial = {
    productosInit: [],
    productos: [],
    carrito: [],
    detalle: [],
    loading: true,
    filtro: "",
  };

  //localStorage.clear();
  if (localStorage.length === 0) {
    localStorage.setItem("detalle", "[]");
    localStorage.setItem("carrito", "[]");
  }

  let storageCarrito = JSON.parse(localStorage.getItem("carrito"));
  const storageDetalle = JSON.parse(localStorage.getItem("detalle"));

  const [state, dispatch] = useReducer(Actions, estadoInicial);

  const getProductos = async () => {
    const res = await axios.get(
      "https://music-store-ssd.herokuapp.com/productos"
    );
    setLoading(false);
    setProductos(res.data);
    dispatch({ type: "GET_PRODUCTOS", payload: res.data });
  };

  const setProductos = (prods) => {
    dispatch({ type: "SET_PRODUCTOS", payload: prods });
  };

  const addCarrito = (item) => {
    //Identificar producto con id identico a item y agregar numero
    //random al final de su id para generar un id único
    const prod = state.productos.filter((ite) => ite.id == item);
    prod[0].id = prod[0].id + Math.floor(Math.random() * 1000) + 100;
    //Pusheamos el producto con el nuevo id a storageCarrito y actualizamos
    //la instancia de storageCarrito en localStorage y el estado "carrito".
    storageCarrito.push(prod[0]);
    localStorage.setItem("carrito", JSON.stringify(storageCarrito));
    dispatch({ type: "ADD_CARRITO", payload: prod });
  };

  const delCarrito = (item) => {
    //Se crea un nuevo carrito sin el producto eliminado y se actualiza
    //en storageCarrito y en el estado carrito.
    const newCarrito = storageCarrito.filter((ite) => ite.id !== item);
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
    dispatch({ type: "DEL_CARRITO", payload: item });
  };

  const getDetalle = (item) => {
    const picked = state.productos.filter((ite) => ite.id === item);
    localStorage.setItem("detalle", JSON.stringify(picked));
    dispatch({ type: "GET_DETALLE", payload: picked });
  };

  const setLoading = (loadingState) => {
    dispatch({ type: "SET_LOADING", payload: loadingState });
  };

  const setFiltros = (filtro) => {
    dispatch({ type: "SET_FILTRO", payload: filtro });
  };

  return (
    <Context.Provider
      value={{
        productos: state.productos,
        carrito: storageCarrito,
        display: state.display,
        detalle: storageDetalle,
        loading: state.loading,
        getProductos,
        addCarrito,
        delCarrito,
        getDetalle,
        setFiltros,
        setLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
