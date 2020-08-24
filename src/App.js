import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import DataState from "./context/data/DataState";
import Card from "./components/Card/Card";

const App = () => {
  useEffect(() => {
    //Initialise the Materialize JS
    M.AutoInit();
    //eslint-disable-next-line
  }, []);

  return (
    <DataState>
      <div className="row">
        <div className="col s6">
          <Card />
        </div>
      </div>
    </DataState>
  );
};

export default App;
