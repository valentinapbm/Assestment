import axios from "axios";
const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
const PRODUCT_ERROR = "PRODUCT_ERROR";
const PRODUCT_LOADING = "PRODUCT_LOADING";

//action creator
export const getProducts = () => {
  return function (dispatch) {
    dispatch({ type: PRODUCT_LOADING, payload: true });
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: PRODUCT_ERROR, payload: err });
      })
      .finally(() => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
      });
  };
};


const initialState = {
  products: [],
  loading: false,
  error: null,
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;