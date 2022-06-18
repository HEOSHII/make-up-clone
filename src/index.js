import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import redux from "redux";

const reducer = (state, action) => {};

const store = createStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
