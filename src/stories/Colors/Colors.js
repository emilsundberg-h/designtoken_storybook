import React from "react";
import "./Colors.css";
import data from "../../tokens/json/color.json";

function Colors() {
  const listItems = [];

  Object.keys(data.sl_color).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.sl_color[key].value,
    };
    listItems.push(listItemStyle);
  });
  const Arendal = listItems.map((listItem) => {
    const style = {
      width: "400px",
      height: "247px",
      backgroundColor: listItem.value,
      borderRadius: "8px",
      margin: "0 10px -15px 0",
    };
    return (
      <div className="ColorDiv">
        <div style={style}></div>
        <div className="ColorNameBorder" aria-label={listItem.value}>
          <p className="ColorName" aria-label={listItem.name}>
            $color-{listItem.name}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ColorFlex">{Arendal}</div>
    </div>
  );
}

export default Colors;
