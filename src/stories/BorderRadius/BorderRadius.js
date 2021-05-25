import React from "react";
import "./BorderRadius.css";
import data from "../../tokens/json/Border-radius.json";

const BorderRadius = () => {
  const listItems = [];

  Object.keys(data.sl_borderRadius).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.sl_borderRadius[key].value,
    };
    listItems.push(listItemStyle);
  });
  const BorderRadiusListed = listItems.map((listItem) => {
    const style = {
      width: "400px",
      height: "247px",
      color: "#000",
      backgroundColor: "#f1f2f3",
      borderRadius: listItem.value,
      border: " 2px solid #000",
    };
    return (
      <div className="BorderDiv" style={style}>
        <div className="BorderPx">{listItem.value}</div>
        <div className="BorderBorder">
          <p className="BorderName">$border-radius-{listItem.name}</p>
        </div>
      </div>
    );
  });

  return <div className="HejsanBorder">{BorderRadiusListed}</div>;
};

export default BorderRadius;
