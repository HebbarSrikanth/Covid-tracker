import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";

const LeftSideComponents = () => {
  return (
    <div className="row">
      <Searchbar />
      <Card />
    </div>
  );
};

export default LeftSideComponents;
