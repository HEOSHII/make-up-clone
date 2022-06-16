import axios from "axios";

export default {
  BASE_URL: `http://makeup-api.herokuapp.com/api/v1/products.json`,
  async getAllData(type = "", category = "", tags = [], brand = "") {
    await axios
      .get(this.BASE_URL, {
        params: {
          product_type: type,
          product_category: category,
          product_tags: tags,
          brand: brand,
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
  },
};
