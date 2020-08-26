import React, { useReducer } from "react";
import DataReducer from "./dataReducer";
import DataContext from "./dataContext";
import type from "../type";
import Axios from "axios";

const DataState = (props) => {
  const initialState = {
    covidTotal: "",
    selectedCountry: null,
    error: null,
    loading: null,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchData = async () => {
    try {
      state.loading = true;
      const res = await Axios.get("https://covid19.mathdro.id/api/");

      dispatch({
        type: type.FETCH_DATA,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: type.SET_ERROR,
        payload: err,
      });
    }
  };

  return (
    <DataContext.Provider
      value={{
        data: state.covidTotal,
        selectedCountry: state.selectedCountry,
        fetchData,
        loading: state.loading,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
