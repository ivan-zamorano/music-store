//TYPES

const GET_PRODUCTOS = "GET_PRODUCTOS";
const ADD_CARRITO = "ADD_CARRITO";
const DEL_CARRITO = "DEL_CARRITO";
const DISPLAY = "DISPLAY";
const GET_DETALLE = "GET_DETALLE";
const SET_LOADING = "SET_LOADING";

const Actions = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTOS:
      return { ...state, productos: payload };
    case DISPLAY:
      return {
        ...state,
        display: payload,
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
    default:
      return;
  }
};

export default Actions;
