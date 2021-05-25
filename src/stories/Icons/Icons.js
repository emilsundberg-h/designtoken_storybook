import Icon from "../../Icons.js";
import "./Icons.css";

function App() {
  const reqSvgs = require.context("../../Icons", true, /\.svg$/);
  const paths = reqSvgs.keys();

  const svgs = paths.map((path) => {
    console.log(path);
    const name = path.substring(2);
    console.log(name);
    return <Icon name={name} size={100} fill="#ccc" />;
  });

  return (
    <div>
      <div>{svgs}</div>
    </div>
  );
}

export default App;
