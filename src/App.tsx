
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <NewTask />
      <TasksList />
    </>
  )
}

export default App
