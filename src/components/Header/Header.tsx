import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  const mockUser = "Anderson Silva";
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <span>opea</span>
      </div>
      <div className={styles.user}>
        <span>{mockUser}</span>
        <span className={styles.icon}>👤</span>
        <button
          className={styles.themeToggle}
          onClick={() => setDark((v) => !v)}
          aria-label="Alternar tema"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
