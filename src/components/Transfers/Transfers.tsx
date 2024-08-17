import { FC } from "react";
import { useSelector } from "react-redux";

import styles from "./Transfers.module.scss";
import { Checkbox } from "../Checkbox/Checkbox";

export const Transfers: FC = () => {
	const checkboxes = useSelector((state) => state.checkboxesSlice.checkboxes);


  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <h1 className={styles.title}>Количество пересадок</h1>
        <div>
			{checkboxes.map((checkbox, index)=>{
				return <Checkbox key={index} data={checkbox} checkboxes={checkboxes} />;
			})}
        </div>
      </div>
    </div>
  );
};
