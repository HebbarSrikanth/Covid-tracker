import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const CardInfo = ({ title, fontType, casesNumber, todayData }) => {
  //Numbering in Indian format
  //const curformat = new Intl.NumberFormat("en-IN");
  return (
    <div className="col m4" style={cardStyle}>
      <div className="card-panel white" style={{ height: "150px" }}>
        <span className={fontType}><b>{title}</b></span>
        <div className={fontType} style={{ textAlign: 'center', marginTop: '15%' }}>
          +<b><CountUp end={todayData} separator="," duration={2.5} /></b>
        </div>
        <div className={fontType} style={{ marginTop: '5px' }}>
          <b><CountUp end={casesNumber} separator="," duration={3} /></b>
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  textAlign: "center",
  width: "25%",
};

CardInfo.prototype = {
  title: PropTypes.string.isRequired,
  fontType: PropTypes.string.isRequired,
  casesNumber: PropTypes.number.isRequired,
};

export default CardInfo;
