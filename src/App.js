import styles from "./App.module.css";
import "./variables.css";
import Icon from "./Icons";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App_header}>
        <Icon name="notna" size={100} />

        <p></p>
      </header>
    </div>
  );
}

export default App;
