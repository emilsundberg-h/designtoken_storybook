import Icon from "../../iconsConvert.js";
import "./Icons.css";

function App() {
  const reqSvgs = require.context("../../Icons", true, /\.svg$/);
  const paths = reqSvgs.keys();

  const svgs = paths.map((path) => {
    const name = path.substring(2, path.length - 4);

    const style = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
      width: "100px",
    };

    return (
      <div style={style}>
        <Icon name={name} size={50} />
        <p className="iconsP">{name}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="iconsDiv">{svgs}</div>
    </div>
  );
}

export default App;
