import constants from "../components/constants";
import {
  ADD_TAG,
  REMOVE_TAG,
  SET_PRODUCTS,
  SET_TAG_TO_PARAMS,
  REMOVE_TAG_FROM_PARAMS,
} from "./types";
import axios from "axios";
axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1";

export const addTag = (payload) => {
  return {
    type: ADD_TAG,
    payload,
  };
};

export const removeTag = (payload) => {
  return {
    type: REMOVE_TAG,
    payload,
  };
};

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

export const asyncGetProdutcs = (selectedTags) => {
  return (dispatch) => {
    axios
      .get("/products.json", {
        params: {
          product_tags: selectedTags.join(", "),
        },
      })
      .then((response) => {
        dispatch(setProducts(response.data));
        constants.isLoading = false;
      })
      .catch((error) => console.warn(error));
  };
};
