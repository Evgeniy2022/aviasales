import { FC, useState } from 'react'

import { Button } from '../Button/Button';
import { sortTicketsByPrice, sortTicketsByTime } from '../../redux/slices/tickets'; 

import styles from "./Filters.module.scss"
import { useDispatch } from 'react-redux';


export const Filters:FC = () => {
	const [tabs, setTabs] = useState<boolean[]>([
		false,false,false
	]);
	
	const dispatch = useDispatch()

	function handlePriceClick(n:number) {
		setTabs(()=>tabs.map((_item, index)=>{
			return index === n
		}))
	}

  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          dispatch(sortTicketsByPrice());
          handlePriceClick(0);
        }}
      >
        Самый дешевый
      </Button>
      <Button
        onClick={() => {
          dispatch(sortTicketsByTime());
          handlePriceClick(1);
        }}
      >
        Самый быстрый
      </Button>
      <Button onClick={()=>{}}>Оптимальный</Button>
    </div>
  );
};
