import React from "react";
import CardItem from "./CardItem";

const Card = () => {
  const cards = [
    {
      title: "Confirmed",
      textColor: "red-text",
      id: 1,
      no: 3124569,
    },
    {
      title: "Active",
      textColor: "blue-text",
      id: 2,
      no: 708657,
    },
    {
      title: "Recovered",
      textColor: "green-text",
      id: 3,
      no: 2324569,
    },
    {
      title: "Deceased",
      textColor: "grey-text",
      id: 4,
      no: 58679,
    },
  ];

  return (
    <div className="row">
      {cards.map((val, id) => (
        <CardItem key={id} cardInfo={val} />
      ))}
    </div>
  );
};

export default Card;
