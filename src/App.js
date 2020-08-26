import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import DataState from "./context/data/DataState";
<<<<<<< HEAD
import Home from "./components/cards/Home";

const App = () => {

=======
import Home from "./components/pages/Home";

const App = () => {
>>>>>>> b2430daf4feea9a3502672456e8a51f757fa5edd
  useEffect(() => {
    //Initialise the Materialize JS
    M.AutoInit();
    //eslint-disable-next-line
  }, []);

  return (
    <DataState>
      <Home />
    </DataState>
  );
};

export default App;
