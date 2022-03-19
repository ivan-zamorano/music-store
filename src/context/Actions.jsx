//TYPES

const GET_PRODUCTOS = "GET_PRODUCTOS";
const ADD_CARRITO = "ADD_CARRITO";
const DEL_CARRITO = "DEL_CARRITO";
const GET_FILTROS = "GET_FILTROS";
const ADD_FILTROS = "ADD_FILTROS";
const DEL_ALL_FILTROS = "DEL_ALL_FILTROS";
const DISPLAY = "DISPLAY";
const GET_DETALLE = "GET_DETALLE";
const SET_LOADING = "SET_LOADING";

const Actions = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTOS:
      return { ...state, productos: payload };
    case DISPLAY:
      if (state.seleccion.length > 0) {
        return {
          ...state,
          display: state.productos.filter(
            (item) => item.categoria.categoria === state.seleccion[0].categoria
          ),
        };
      } else if (state.seleccion.length === 0) {
        return {
          ...state,
          display: payload,
        };
      }
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
    case GET_FILTROS:
      return { ...state, filtros: payload };

    case ADD_FILTROS:
      return {
        ...state,
        seleccion: state.filtros.filter((item) => item.id === payload),
      };
    case DEL_ALL_FILTROS:
      return {
        ...state,
        seleccion: [],
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
