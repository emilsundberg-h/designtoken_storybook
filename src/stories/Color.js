import React from "react";
import PropTypes from "prop-types";

import styles from "./App.module.css";
import "./variables.css";
import data from "./color.json";

export const Color = () => {
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
      width: "300px",
      minHeight: "300px",
      backgroundColor: listItem.value,
      color: "#000",
    };
    return (
      <div>
        <div>{listItem.name}</div>
        <div style={style}>{style.backgroundColor}</div>
      </div>
    );
  });

  return <div className={styles.App}>{Arendal}</div>;
};
Color.propTypes = {
  colors: PropTypes.object,
};
