import Button from "../Button";
import Clock from "./Clock";
import { Tasks } from "../../types/tasks";
import style from "./timer.module.scss";
import { timeToSeconds } from "../../commons/utils/Time";
import { useEffect, useState } from "react";

interface Props {
  selected: Tasks | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regressive(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.wrapperClock}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Start</Button>
    </div>
  );
}
