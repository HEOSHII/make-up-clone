import constants from "../components/constants";
import { ADD_TAG, REMOVE_TAG, PRODUCTS_BY_TAG, CLEAR_TAG } from "./types";
import axios from "axios";

export const clearTags = () => {
  return {
    type: CLEAR_TAG,
    payload: "",
  };
};

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

export const setProducts = (payload) => {
  return {
    type: PRODUCTS_BY_TAG,
    payload,
  };
};

export const asyncGetProdutcsByTag = (selectedTags) => {
  constants.isLoad = true;
  return (dispatch) => {
    axios
      .get(constants.BASE_URL, {
        params: {
          product_tags: selectedTags.join(", "),
        },
      })
      .then((response) => {
        dispatch(setProducts(response.data));
        constants.isLoad = false;
      })
      .catch((error) => console.warn(error));
  };
};
