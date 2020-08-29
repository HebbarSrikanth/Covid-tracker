import React, { useReducer } from "react";
import DataReducer from "./dataReducer";
import DataContext from "./dataContext";
import type from "../type";
import Axios from "axios";

const DataState = (props) => {
  const initialState = {
    worldCasesInfo: '',
    selectedCountry: null,
    countryWiseCases: null,
    error: null,
    loading: null,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchData = async (country = '') => {

    console.log(country)
    let link = ''
    if (country === '')
      link = 'https://disease.sh/v3/covid-19/all'
    else
      link = 'https://disease.sh/v3/covid-19/countries/' + country

    try {
      state.loading = true;
      const res = (await Axios.get(link)).data

      dispatch({
        type: type.FETCH_DATA,
        payload: res
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: type.SET_ERROR,
        payload: err,
      });
    }
  };

  const fetchCountryAllWiseData = async () => {
    try {
      const data = (await Axios.get('https://disease.sh/v3/covid-19/countries')).data
      dispatch({
        type: type.SET_COUNTRYWISEDATA,
        payload: data
      })

    } catch (err) {
      console.log(err);
      dispatch({
        type: type.SET_ERROR,
        payload: err,
      });
    }
  }

  return (
    <DataContext.Provider
      value={{
        data: state.worldCasesInfo,
        selectedCountry: state.selectedCountry,
        countryData: state.countryWiseCases,
        loading: state.loading,
        fetchData,
        fetchCountryAllWiseData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
