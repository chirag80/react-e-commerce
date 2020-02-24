import React, { useReducer } from "react";
import axios from "axios";
import ProductContext from "./productContext";
import productReducer from "./productReducer";
import { GET_PRODUCTS, ADD_PRODUCT, SET_CURRENT } from "../types";
import url from "../../utils/URL";
const ProductState = props => {
  const initialState = {
    products: null,
    filterd: null,
    featured: null,
    sorted: null,
    current: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(`${url}/products`);
    console.log("product data", res.data);
    try {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    } catch (err) {}
  };

  const setCurrent = id => {
    dispatch({
      type: SET_CURRENT,
      payload: id
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        getProducts,
        setCurrent,
        featured: state.featured,
        sorted: state.sorted
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
