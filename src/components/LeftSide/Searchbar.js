import React, { useState, useContext, useEffect } from "react";
import DataContext from "../../context/data/dataContext";

const Searchbar = () => {

  const dataContext = useContext(DataContext)
  const { fetchCountryWiseData, countryData, fetchData, setSelectedCountry } = dataContext

  const [selectedCountry, setCountry] = useState('')

  useEffect(() => {
    fetchCountryWiseData()
    //eslint-disable-next-line
  }, [])

  const optionList = (countryData !== null) &&
    (
      countryData.map((data, id) =>
        <option key={id} value={data.country}>{data.country}</option>)
    )

  const onChangeHandler = (e) => {
    setCountry(e.target.value)
    fetchData(e.target.value)
    setSelectedCountry(e.target.value)
  }

  return (
    <div className='row'>
      <div className="input-field s6" style={searchBoxStyle}>
        <select className='browser-default' value={selectedCountry} onChange={onChangeHandler}>
          <option value="">Worldwide</option>
          {optionList}
        </select>
      </div>
    </div>

  );
};

const searchBoxStyle = {
  width: "50%",
  margin: "5% auto"
};

export default Searchbar;
