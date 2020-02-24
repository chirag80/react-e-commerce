import { GET_PRODUCTS, ADD_PRODUCT, SET_CURRENT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current:
          state.products !== null
            ? state.products.find(item => item.id === action.payload)
            : null
      };
    default:
      return state;
  }
};
