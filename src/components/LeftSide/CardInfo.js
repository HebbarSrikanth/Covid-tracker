import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const CardInfo = ({ title, fontType, casesNumber }) => {
  //Numbering in Indian format
  //const curformat = new Intl.NumberFormat("en-IN");

  return (
    <div className="col m4" style={cardStyle}>
      <div className="card-panel white" style={{ height: "150px" }}>
        <span className={fontType}>{title}</span>
        <div className={fontType} style={{ marginTop: "25%" }}>
          <CountUp end={casesNumber} separator="," duration={3} />
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
