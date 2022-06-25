// import axios from "axios";
// import constants from "../components/constants";
// import setProducts from "../store/actions";
// axios.defaults.baseURL = "http://makeup-api.herokuapp.com/api/v1";

// export const asyncGetProdutcs = (params) => {
//   constants.isLoading = true;
//   return (dispatch) => {
//     axios
//       .get("/products.json", {
//         params: params,
//       })
//       .then((response) => {
//         dispatch(setProducts(response.data));
//         constants.isLoading = false;
//       })
//       .catch((error) => console.warn(error));
//   };
// };
