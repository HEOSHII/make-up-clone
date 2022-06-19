import axios from "axios";
import constants from "./constants";
import { setProducts } from "../store/actions";

export default {
  async getByTag(tags) {
    await axios
      .get(constants.BASE_URL, {
        params: {
          product_tags: tags.join(", "),
        },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.warn(error));
  },
};
