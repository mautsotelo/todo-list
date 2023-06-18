import styles from "./Header.module.css";

import TodoLogo from "../assets/todo-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={TodoLogo} alt="Logotipo da lista" />
      <span className={styles.titleBlue}>to</span><span className={styles.titlePurple}>do</span>
    </header>
  );
} 
