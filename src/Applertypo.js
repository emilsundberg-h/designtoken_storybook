import styles from "./App.module.css";
import "./variables.css";
import data from "./tokens/json/space.json";

const Applertypo = () => {
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
      minHeight: "300px",
      backgroundColor: "#000",
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

export default Applertypo;
