import styles from "./App.module.css";
import "./variables.css";
import data from "./color.json";

const Appler = () => {
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

export default Appler;
