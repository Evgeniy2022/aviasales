import { FC, useState } from "react";

import { Button } from "../Button/Button";
import {
  sortTicketsByPrice,
  sortTicketsByTime,
} from "../../redux/slices/tickets";

import styles from "./Filters.module.scss";
import { useDispatch } from "react-redux";

export const Filters: FC = () => {
  const [tabs, setTabs] = useState<boolean[]>([false, false, false]);
  const [active, setActive] = useState<boolean[]>([
    false,
    false,
    true,
  ]);

  const dispatch = useDispatch();

  function handlePriceClick(n: number) {
    setTabs(() =>
      tabs.map((_item, index) => {
        return index === n;
      })
    );
  }
  function activeTab(n: number) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setActive((prev:any) =>
      prev.map((_item: boolean, index: number) => {
        if (index === n) {
          return true;
        }
      })
    );
  }

  return (
    <div className={styles.container}>
      <Button
        isActive={active[0]}
        onClick={() => {
          activeTab(0);
          dispatch(sortTicketsByPrice());
          handlePriceClick(0);
        }}
      >
        Самый дешевый
      </Button>
      <Button
        isActive={active[1]}
        onClick={() => {
          activeTab(1);
          dispatch(sortTicketsByTime());
          handlePriceClick(1);
        }}
      >
        Самый быстрый
      </Button>
      <Button
        isActive={active[2]}
        onClick={() => {
          activeTab(2);
        }}
      >
        Оптимальный
      </Button>
    </div>
  );
};
