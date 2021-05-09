import styles from "./App.module.css";
import "./variables.css";
import Appler from "./Appler";
import Applertypo from "./Applertypo";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <p>
          <Applertypo />
          <Appler />
        </p>
      </header>
    </div>
  );
}

export default App;
