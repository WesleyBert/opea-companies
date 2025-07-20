import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.png";

export const Header = () => {
  const mockUser = "Anderson Silva";
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );
    localStorage.setItem("darkMode", JSON.stringify(dark));
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
          onClick={() => setDark((v: boolean) => !v)}
          aria-label="Alternar tema"
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};
