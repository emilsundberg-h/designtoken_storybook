import React from "react";
import "./Breakpoints.css";
import data from "../../tokens/json/breakpoint.json";

const Breakpoints = () => {
  const listItems = [];

  Object.keys(data.breakpoint).forEach((key) => {
    const listItemStyle = {
      name: key,
      value: data.breakpoint[key].value,
    };
    listItems.push(listItemStyle);
  });
  const BreakpointsListed = listItems.map((listItem) => {
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
      <div>
        <div className="BreakPointDiv" style={style}>
          <hr className="BreakPointHr" />
        </div>
        <div className="BreakPointBorder">
          <p className="BreakPointName">$breakpoint-{listItem.name}</p>
        </div>
      </div>
    );
  });

  return <div>{BreakpointsListed}</div>;
};

export default Breakpoints;
