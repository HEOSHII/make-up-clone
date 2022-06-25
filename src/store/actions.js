import constants from "../components/constants";
import {
  SET_PRODUCTS,
  SET_TAG_TO_PARAMS,
  REMOVE_TAG_FROM_PARAMS,
  CHANGE_TYPE,
} from "./types";
import axios from "axios";
axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1";

export const setTagToParams = (payload) => {
  return {
    type: SET_TAG_TO_PARAMS,
    payload,
  };
};

export const removeTagFromParams = (payload) => {
  return {
    type: REMOVE_TAG_FROM_PARAMS,
    payload,
  };
};

export const setProducts = (payload) => {
  return {
    type: SET_PRODUCTS,
    payload,
  };
};

export const changeType = (payload) => {
  return {
    type: CHANGE_TYPE,
    payload,
  };
};

export const asyncGetProdutcs = (params) => {
  return (dispatch) => {
    axios
      .get("/products.json", {
        params: params,
      })
      .then((response) => {
        dispatch(setProducts(response.data));
        constants.isLoading = false;
      })
      .catch((error) => console.warn(error));
  };
};
