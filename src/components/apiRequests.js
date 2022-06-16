import axios from "axios";

export default {
  BASE_URL: `http://makeup-api.herokuapp.com/api/v1/products.json`,
  async getAllData() {
    await axios
      .get(this.BASE_URL)
      .then((response) => console.log(response))
      .catch((error) => console.warn(error));
  },
};
