import React from "react";
import Header from "./components/Header";
import apiRequests from "./components/apiRequests";

function App() {
  apiRequests.getAllData();
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
