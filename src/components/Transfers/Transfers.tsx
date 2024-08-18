import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import styles from "./Transfers.module.scss";
import { Checkbox } from "../Checkbox/Checkbox";
import { CheckboxStore } from "../../redux/slices/filterSlice";

export const Transfers: FC = () => {
	const checkboxes = useSelector(
    (state: RootState) => state.checkboxesSlice.checkboxes
  );


  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1 className={styles.title}>Количество пересадок</h1>
        <div>
			{checkboxes.map((checkbox:CheckboxStore, index: number)=>{
				return <Checkbox key={index} data={checkbox} checkboxes={checkboxes} />;
			})}
        </div>
      </div>
    </div>
  );
};
