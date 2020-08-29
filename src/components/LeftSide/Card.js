import React, { useEffect, useContext } from "react";
import DataContext from "../../context/data/dataContext";
import CardInfo from "./CardInfo";

const Card = () => {
  //Import necessary values from the Context
  const dataContext = useContext(DataContext);
  const { data, fetchData } = dataContext;

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const {
    cases, active, recovered,
    deaths, updated, todayCases, todayDeaths, todayRecovered
  } = data;

  return data !== "" ? (
    <div className="row">
      <div style={{ textAlign: "center", margin: "2% auto" }}>
        Last updated on :{updated}
      </div>

      <CardInfo title="Confirmed" fontType="red-text" casesNumber={cases} todayData={todayCases} />
      <CardInfo title="Active" fontType="blue-text" casesNumber={active}
        todayData={todayCases - todayRecovered - todayDeaths}
      />
      <CardInfo title="Recovered" fontType="green-text" casesNumber={recovered} todayData={todayRecovered} />
      <CardInfo title="Deceased" fontType="grey-text" casesNumber={deaths} todayData={todayDeaths} />

    </div>
  ) : null;
};

export default Card;
