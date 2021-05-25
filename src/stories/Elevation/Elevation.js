import React from "react";
import "./Elevation.css";
import data from "../../tokens/json/elevation.json";

const Elevation = () => {
  const listItems = [];

  Object.keys(data.sl_elevation).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.sl_elevation[key].value,
    };
    listItems.push(listItemStyle);
  });
  const ElevationListed = listItems.map((listItem) => {
    const style = {
      width: "400px",
      height: "247px",
      color: "#000",
      backgroundColor: "#f1f2f3",
      borderRadius: "8px",
      boxShadow: listItem.value,
    };

    return (
      <div className="ElevationDiv" style={style}>
        <div className="ElevationPx">{listItem.name}</div>
        <div className="ElevationBorder">
          <p className="ElevationName">$elevation-{listItem.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="Hejsan">{ElevationListed}</div>
    </div>
  );
};

export default Elevation;
