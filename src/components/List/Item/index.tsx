import { Tasks } from "../../../types/tasks";
import style from "./item.module.scss";

interface Props extends Tasks {
  selectTask: (selectedTask: Tasks) => void;
}

export default function Item({
  id,
  task,
  time,
  selected,
  completed,
  selectTask,
}: Props) {
  return (
    <li
      className={`
        ${style.item} 
        ${selected ? style.selectedItem : " "} 
        ${completed ? style.completedItem : " "}
      `}
      onClick={() =>
        !completed &&
        selectTask({
          id,
          task,
          time,
          selected,
          completed,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.completed} aria-label="task done"></span>
      )}
    </li>
  );
}
