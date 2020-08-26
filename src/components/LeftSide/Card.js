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

  const { recovered, confirmed, deaths } = data;

  return data !== "" ? (
    <div className="row">
      <div style={{ textAlign: "center", margin: "2% auto" }}>
        {data.lastUpdate}
      </div>

      <CardInfo
        title="Confirmed"
        fontType="red-text"
        casesNumber={confirmed.value}
      />

      <CardInfo
        title="Active"
        fontType="blue-text"
        casesNumber={confirmed.value - recovered.value - deaths.value}
      />

      <CardInfo
        title="Recovered"
        fontType="green-text"
        casesNumber={recovered.value}
      />

      <CardInfo
        title="Deceased"
        fontType="grey-text"
        casesNumber={deaths.value}
      />
    </div>
  ) : null;
};

export default Card;
