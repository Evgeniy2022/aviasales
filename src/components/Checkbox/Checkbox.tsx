import { FC } from "react";
import { useDispatch } from "react-redux";

import { CheckboxStore } from "../../redux/slices/filterSlice";
import {
  setCheckboxesByAll,
  setCheckboxesByOne,
} from "../../redux/slices/filterSlice";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  data: CheckboxStore;
  checkboxes: CheckboxStore[];
}

export const Checkbox: FC<CheckboxProps> = ({ data, checkboxes }) => {
  const dispatch = useDispatch();

  function checkboxHandler() {
    const checkbox = checkboxes.map((checkbox) => {
      return checkbox.id === data.id
        ? { ...checkbox, state: !checkbox.state }
        : checkbox;
    });
    if (data.name === "Все") {
      dispatch(setCheckboxesByAll(checkbox));
    } else {
      dispatch(setCheckboxesByOne(checkbox));
    }
  }

  return (
    <div className={styles.body}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name="checknox"
        checked={data.state}
        onChange={checkboxHandler}
      />
      <span className={styles.text}>{data.name}</span>
    </div>
  );
};
