import axios from "axios";
const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
const PRODUCTS_ERROR = "PRODUCTS_ERROR";
const PRODUCTS_LOADING = "PRODUCTS_LOADING";


//action creator

export const getProduct = (id) => {
  return function (dispatch) {
    dispatch({ type: PRODUCTS_LOADING, payload: true });
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        dispatch({ type: PRODUCTS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCTS_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: PRODUCTS_LOADING, payload: false });
      });
  };
};

const initialState = {
  products: {},
  loading: false,
  error: null,
};
const productDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productDetailReducer;