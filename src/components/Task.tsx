import styles from "./Task.module.css";
import Trash from "../assets/trash.svg";
import { ChangeEvent, useState } from "react";
import { ITask } from "../App";

export interface TaskProps {
  task: ITask;
  onDeleteTask: (task: ITask) => void;
  onCheckFinished: (updatedTask: ITask) => void;
}

export function Task({task, onDeleteTask, onCheckFinished}: TaskProps) {
  const [currentTask, setTask] = useState(task);

  function handleFinishTask(event: ChangeEvent<HTMLInputElement>) {
    const updatedTask = {...currentTask, finished: event.target.checked};
    setTask(updatedTask);
    onCheckFinished(updatedTask);
  }

  function handleDeleteTask() {
    onDeleteTask(task);
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
      <span 
        className={currentTask.finished ? styles.taskDone: styles.taskOpen}
      >
        {task.content}
      </span>
      <button onClick={handleDeleteTask}>
        <img src={Trash} />
      </button>
    </div>
  );
}