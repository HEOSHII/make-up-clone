import axios from "axios";

export default {
  BASE_URL: `http://makeup-api.herokuapp.com/api/v1/products.json`,
  async getByTag(tags) {
    await axios
      .get(this.BASE_URL, {
        params: {
          product_tags: tags.join(", "),
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
  },
};
