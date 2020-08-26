import React from "react";

const Searchbar = () => {
  const searchBoxStyle = {
    width: "50%",
    margin: "5% auto",
  };

  return (
    <div className="nav-wrapper" style={searchBoxStyle}>
      <div className="input-field">
        <input id="search" type="search" placeholder="Search country...." />
        <label className="label-icon" htmlFor="search">
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </div>
  );
};

export default Searchbar;
