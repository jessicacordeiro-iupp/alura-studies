import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { Tasks } from "../types/tasks";
import style from "./app.module.scss";

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [selected, setSelected] = useState<Tasks>();

  function selectTask(selectedTask: Tasks) {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  function finishTask() {
    if (selected) {
      setSelected(undefined);
      setTasks((previousTasks) =>
        previousTasks.map((task) => {
          if (task.id === selected.id) {
            return {
              ...task,
              selected: false,
              completed: true,
            };
          }
          return task;
        })
      );
    }
  }

  return (
    <div className={style.appStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} finishTask={finishTask} />
    </div>
  );
}

export default App;
