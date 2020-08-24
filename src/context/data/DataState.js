import React, { useReducer } from "react";
import DataReducer from "./dataReducer";
import DataContext from "./dataContext";
import type from "../type";

const DataState = (props) => {
  const initialState = {
    covidTotal: [],
    selectedCountry: null,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchData = async () => {
    const res = await fetchData();

    dispatch({
      type: type.FETCH_DATA,
      payload: res,
    });
  };

  return (
    <DataContext.Provider
      value={{
        data: state.covidTotal,
        selectedCountry: state.selectedCountry,
        fetchData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
