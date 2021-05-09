import React from "react";
import "./Space.css";
import data from "../../tokens/json/space.json";

const Space = () => {
  const listItems = [];

  Object.keys(data.sl_space).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.sl_space[key].value,
    };
    listItems.push(listItemStyle);
  });
  const Arendal = listItems.map((listItem) => {
    const style = {
      width: listItem.value,
      height: "30px",
      color: "#000",
      backgroundColor: "#none",
      borderStyle: "none solid none solid",
      borderColor: "#20252c",
      boxSizing: "borderBox",
    };

    return (
      <div className="Divans">
        <div className="SpacePx">{style.width}</div>
        <div className="SpaceDiv" style={style}>
          <hr className="SpaceHr" />
        </div>
        <div className="SpaceNameBorder">
          <p className="SpaceName">$space-{listItem.name}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="Hejsan">{Arendal}</div>
    </div>
  );
};

export default Space;
// const Arendal = listItems.map((listItem) => {
//   const style = {
//     width: "400px",
//     height: "247px",
//     color: "#000",
//     backgroundColor: "#f1f2f3",
//     borderRadius: "8px",
//     boxShadow: listItem.value,
//   };
