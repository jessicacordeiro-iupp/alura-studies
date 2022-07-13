import { Tasks } from "../../types/tasks";
import Item from "./Item";
import style from "./list.module.scss";

interface Props {
  tasks: Tasks[];
  selectTask: (selectedTask: Tasks) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((task) => (
          <Item
            id={task.id}
            selectTask={selectTask}
            task={task.task}
            time={task.time}
            selected={task.selected}
            completed={task.completed}
          />
        ))}
      </ul>
    </aside>
  );
}
export default List;
