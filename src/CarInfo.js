import React from "react";
import Card from "./Card";
import DataItem from "./CardData";
import './CardInfo.css'
function CarInfo() {
  return (
    <div>
      <div className="cards">
        {DataItem.map((sakibData) => {
          return (
            <Card
              image={sakibData.image}
              altTag={sakibData.altText}
              header={sakibData.header}
              text={sakibData.text}
              button={sakibData.button}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CarInfo;
