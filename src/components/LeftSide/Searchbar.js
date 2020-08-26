import React from "react";

const Searchbar = () => {
  const searchBoxStyle = {
    width: "50%",
    margin: "5% auto",
    boxShadow: "2px 5px 20px rgba(0,0,0,.1)",
    color: "#6c757d",
    height: "3em",
    borderRadius: "5%",
    background: "white",
  };

  return (
    <div className="nav-wrapper" style={searchBoxStyle}>
      <div className="input-field" style={{ padding: "10px" }}>
        <input id="search" type="search" placeholder="Search Country..." />
        <label
          className="label-icon"
          style={{ margin: "10px" }}
          htmlFor="search"
        >
          <i className="material-icons">search</i>
        </label>
        <i className="material-icons">close</i>
      </div>
    </div>
  );
};

export default Searchbar;
