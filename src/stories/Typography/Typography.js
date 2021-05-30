import React from "react";
import "./Typography.css";
import data from "../../tokens/json/typography.json";

function Typography() {
  const listItems = [];

  Object.keys(data.typography).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.typography[key]?.font.value,
    };
    listItems.push(listItemStyle);
  });
  const TypographyListed = listItems.map((listItem) => {
    const style = {
      font: listItem.value,
    };
    return (
      <div className="TgDiv">
        <p className="TgHeading" style={style}>
          {listItem.name}
        </p>
        <div className="TgNameBorder">
          <p className="TgName">$space-{listItem.name}-font</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="TgFlex">{TypographyListed}</div>
    </div>
  );
}

export default Typography;
