import styles from "./NewTask.module.css";
import Plus from "../assets/plus.svg";

export function NewTask() {
  return (
    <div className={styles.newTask}>
      <input type="text" name="newTask" placeholder="Adicione uma nova tarefa"/>
      <button type="submit">Criar <img src={Plus}/></button>
    </div>
  );
}