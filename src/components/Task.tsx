import styles from "./Task.module.css";
import Trash from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";

export function Task() {
  const [taskIsFinished, setTaskIsFinished] = useState(false);
  function handleFinishTask(event: ChangeEvent<HTMLInputElement>) {
    setTaskIsFinished(event.target.checked)
  }
  return (
    <div className={styles.taskContainer}>
      <label className={styles.container}>
        <input
          type="checkbox"
          onChange={handleFinishTask}
        />
        <span className={styles.checkmark}></span>
      </label>
      <span className={taskIsFinished ? styles.taskDone: styles.taskOpen}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
      <button><img src={Trash} /></button>
    </div>
  );
}