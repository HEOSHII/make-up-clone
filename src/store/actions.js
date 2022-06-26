import constants from "../components/constants";
import {
  SET_PRODUCTS,
  SET_TAG_TO_PARAMS,
  REMOVE_TAG_FROM_PARAMS,
  CHANGE_TYPE,
} from "./types";
import axios from "axios";
axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1";

const createAction = (type) => {
  return (payload) => {
    return { type, payload };
  };
};
export const setTagToParams = createAction(SET_TAG_TO_PARAMS);
export const removeTagFromParams = createAction(REMOVE_TAG_FROM_PARAMS);
export const setProducts = createAction(SET_PRODUCTS);
export const changeType = createAction(CHANGE_TYPE);

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
      .catch((error) => console.warn(error.message));
  };
};
