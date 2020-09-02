import React from "react";
import Charts from "./Charts";

const RightSideComponents = () => {
  return <div>
    <Charts label='Confirmed Cases' color='rgba(255,0,0,0.5)'
      borderColor='rgba(255,0,0,0.2)' toClutter='cases'
    />

    <Charts label='Recovered Cases' color='rgba(0,100,0,0.5)'
      borderColor='rgba(0,255,0,0.2)' toClutter='recovered'
    />

    <Charts label='Deceased Cases' color='rgba(100,100,101,0.5)'
      borderColor='rgba(100,100,101,0.2)' toClutter='deaths'
    />

  </div>;
};

export default RightSideComponents;
