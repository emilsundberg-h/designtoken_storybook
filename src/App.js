import styles from "./App.module.css";
import "./variables.css";
import Icon from "./Icons";

function App() {
  const reqSvgs = require.context("./Icons", true, /\.svg$/);
  const paths = reqSvgs.keys();

  const svgs = paths.map((path) => {
    console.log(path);
    const name = path.substring(2);
    console.log(name);
    return <Icon name={name} size={30} />;
  });

  return (
    <div className={styles.App}>
      <header className={styles.App_header}>{svgs}</header>
    </div>
  );
}

export default App;
