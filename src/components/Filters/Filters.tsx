import { FC, useState } from 'react'

import { Button } from '../Button/Button';
import { sortTicketsByPrice, sortTicketsByTime } from '../../redux/slices/tickets'; 

import styles from "./Filters.module.scss"
import { useDispatch } from 'react-redux';


export const Filters:FC = () => {
	const [tabs, setTabs] = useState([
		false,false,false
	]);
	
	const dispatch = useDispatch()

	function handlePriceClick(n) {
		setTabs(()=>tabs.map((item, index)=>{
			return index === n
		}))
	}

  return (
    <div className={styles.container}>
      <Button
        onClick={() => {
          dispatch(sortTicketsByPrice());
          handlePriceClick(n);
        }}
      >
        Самый дешевый
      </Button>
      <Button
        onClick={() => {
          dispatch(sortTicketsByTime());
          handlePriceClick(n);
        }}
      >
        Самый быстрый
      </Button>
      <Button>Оптимальный</Button>
    </div>
  );
};
