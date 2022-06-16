import React, { useState } from "react";
import Header from "./components/Header";
import apiRequests from "./components/apiRequests";
import constants from "./components/constants";
import Tag from "./components/Tag";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main container">
        <div className="tags">
          {constants.tags.map((tag, index) => {
            return <Tag tag={tag} key={index} />;
          })}
        </div>

        <Loading class="loadng" />
      </main>
    </div>
  );
}

export default App;
