import * as allSvgIcons from "./Icons/index";
import Icon from "./Icons.js";
// const fs = require("fs");

function App() {
  // const arrayOfFiles = fs.readdirSync("../../Icons/");
  const icons = () => {
    allSvgIcons((name) => <Icon name={name} size={100} />);
  };
  console.log(allSvgIcons);
  return <div>{icons}</div>;
}

export default App;
