import React from "react";
import ProducstList from "./ProducstList";
import constants from "./constants";
import Loading from "./Loading";

function Content({ products }) {
  return (
    <div className="content">
      {constants.isLoad ? (
        <Loading className="loading" />
      ) : (
        <ProducstList products={products} />
      )}
    </div>
  );
}

export default Content;
