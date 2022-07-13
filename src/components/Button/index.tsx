import { ReactNode } from "react";
import style from "./button.module.scss";

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
}

function Button({ children, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
