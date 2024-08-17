import { FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={`${styles.btn}`} onClick={onClick}>
      {children}
    </button>
  );
};
