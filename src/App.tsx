import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";

import ClipboardIcon from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";
import { Task } from "./components/Task";

export interface ITask {
  id: string;
  content: string;
  finished: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [countTasksDone, setCountTasksDone] = useState(0);

  function handleNewTask(taskContent: string) {
    const newTask = {
      id: Date.now().toString(),
      content: taskContent,
      finished: false
    }
    setTaskList([...taskList, newTask])
  }

  function deleteTask(taskToDelete: ITask) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== taskToDelete.id
    });
    if (taskToDelete.finished) {
      setCountTasksDone(countTasksDone - 1);
    }
    setTaskList(tasksWithoutDeletedOne);
  }

  function handleCheckFinished(updatedTask: ITask) {
    const indexToUpdate = taskList.findIndex(task => {
      return task.id === updatedTask.id
    });
    if (indexToUpdate >= 0) {
      taskList[indexToUpdate] = updatedTask;
    }
    refreshCountFinished();
  }

  function refreshCountFinished() {
    const countFinished = taskList.filter(item => {
      return item.finished === true
    });
    setCountTasksDone(countFinished.length);
  }

  return (
    <>
      <Header />
      <NewTask onSetNewTask={handleNewTask} />

      <section className={styles.tasks}>
        <div className={styles.infoContainer}>
          <div>
            <strong className={styles.created}>Tarefas criadas</strong>
            <span>{taskList.length}</span>
          </div>
          <div>
            <strong className={styles.finished}>Concluídas</strong>
            {taskList.length === 0
              ? <span>{countTasksDone}</span>
              : <span>{countTasksDone} de {taskList.length}</span>}
          </div>
        </div>
        <div className={styles.tasksContainer}>
          {taskList.map(task => {
            return (
              <Task
                key={task.id}
                task={task}
                onDeleteTask={deleteTask}
                onCheckFinished={handleCheckFinished}
              />
            )
          })}
          {taskList.length === 0 && (
            <div className={styles.taskEmptyContainer}>
              <img src={ClipboardIcon} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App
