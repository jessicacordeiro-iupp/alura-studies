import React, { useState } from "react";
import { Tasks } from "../../types/tasks";
import Button from "../Button";
import style from "./form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Tasks[]>>;
}

function Form({ setTasks }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("");
    setTime("00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="what do you want to study?"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Timer</label>
        <input
          type="time"
          step="1"
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit" onClick={() => addTask}>
        Created
      </Button>
    </form>
  );
}

export default Form;
