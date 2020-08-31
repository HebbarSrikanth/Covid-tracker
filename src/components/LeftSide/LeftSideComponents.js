import React from "react";
import Card from "./Card";
import Searchbar from "./Searchbar";
import Table from "./Table";


const LeftSideComponents = () => {
  return (
    <div className="row">
      <Searchbar />
      <Card />
      <Table />
    </div>
  );
};

export default LeftSideComponents;
