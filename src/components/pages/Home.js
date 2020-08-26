import React from "react";
import LeftSideComponents from "../LeftSide/LeftSideComponents";
import RightSideComponents from "../RightSide/RightSideComponents";

const Home = () => {
  return (
    <div className="row">
      <div className="col s6">
        <LeftSideComponents />
      </div>
      <div className="col s6">
        <RightSideComponents />
      </div>
    </div>
  );
};

export default Home;
