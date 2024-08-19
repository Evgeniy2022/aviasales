import { FC } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isActive: boolean
}

export const Button: FC<ButtonProps> = ({ children, onClick, isActive }) => {

  return (
    <button
      className={
        isActive ? `${styles.btn} ${styles.active}` : styles.btn
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};
