//TYPES

const GET_PRODUCTOS = "GET_PRODUCTOS";
const SET_PRODUCTOS = "SET_PRODUCTOS";
const ADD_CARRITO = "ADD_CARRITO";
const DEL_CARRITO = "DEL_CARRITO";
const GET_DETALLE = "GET_DETALLE";
const SET_LOADING = "SET_LOADING";
const SET_FILTRO = "SET_FILTRO";
const IS_MOBILE = "IS_MOBILE";

const Actions = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case IS_MOBILE:
      return { ...state, mobile: payload };
    case GET_PRODUCTOS:
      return { ...state, productosInit: payload };
    case SET_PRODUCTOS:
      return {
        ...state,
        productos: payload,
      };

    case ADD_CARRITO:
      return {
        ...state,
        carrito: [...state.carrito, payload],
      };
    case DEL_CARRITO:
      return {
        ...state,
        carrito: state.carrito.filter((items) => items[0].id !== payload),
      };
    case GET_DETALLE:
      return {
        ...state,
        detalle: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case SET_FILTRO:
      return {
        ...state,
        productos: state.productos.filter(
          (item) => item.categoria.categoria === payload
        ),
      };
    default:
      return;
  }
};

export default Actions;
