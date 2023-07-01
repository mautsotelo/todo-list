import styles from "./NewTask.module.css";
import Plus from "../assets/plus.svg";
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskProps } from "./Task";

interface NewTaskProps {
  onSetNewTask: (text: string) => void;
}

export function NewTask({onSetNewTask}: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState("");

  const isNewTaskEmpty = newTaskText.length === 0;

  function handleCrateNewTask(event: FormEvent) {
    event.preventDefault();
    onSetNewTask(newTaskText);
    setNewTaskText("");
  }

  function handleNewTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }
  return (
    <div className={styles.newTask}>
      <input 
        type="text" 
        name="newTask" 
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTextChange}
      />
      <button 
        type="submit"
        onClick={handleCrateNewTask}
        disabled={isNewTaskEmpty}
      >
        Criar 
        <img src={Plus}/>
      </button>
    </div>
  );
}