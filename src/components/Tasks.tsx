import styles from "./Tasks.module.css";
import ClipboardIcon from "../assets/clipboard.svg";

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <div className={styles.infoContainer}>
        <div>
          <strong className={styles.created}>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div>
          <strong className={styles.finished}>Concluídas</strong>
          <span>0</span>
        </div>
      </div>
      <div className={styles.tasksContainer}>
        <img src={ClipboardIcon} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  );
}