import React from "react";
import PropTypes from "prop-types";

const CardItem = ({ cardInfo }) => {
  const { title, textColor, no } = cardInfo;

  const curformat = new Intl.NumberFormat("en-IN");

  return (
    <div className="col m4" style={{ textAlign: "center", width: "25%" }}>
      <div className="card-panel white" style={{ height: "150px" }}>
        <span className={textColor}>{title}</span>
        <div className={textColor} style={{ marginTop: "25%" }}>
          {curformat.format(no)}
        </div>
      </div>
    </div>
  );
};

CardItem.prototype = {
  cardInfo: PropTypes.object.isRequired,
};

export default CardItem;
