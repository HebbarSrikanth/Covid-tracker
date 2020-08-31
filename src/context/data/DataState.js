import React, { useReducer } from "react";
import DataReducer from "./dataReducer";
import DataContext from "./dataContext";
import type from "../type";
import Axios from "axios";

const DataState = (props) => {
  const initialState = {
    worldCasesInfo: '',
    historicalData: null,
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

  const fetchCountryWiseData = async () => {
    try {
      const data = (await Axios.get('https://disease.sh/v3/covid-19/countries?sort=cases')).data
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

  const fetchHistoricData = async (country = '') => {
    let url = 'https://disease.sh/v3/covid-19/historical/'
    if (country === '')
      url = url + 'all?lastdays=30'
    else
      url = url + country + '?lastdays=30'
    try {
      let data = (await Axios.get(url)).data
      dispatch({
        type: type.FETCH_HISTORICDATA,
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
        historicalData: state.historicalData,
        countryData: state.countryWiseCases,
        loading: state.loading,
        fetchData,
        fetchCountryWiseData,
        fetchHistoricData
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataState;
