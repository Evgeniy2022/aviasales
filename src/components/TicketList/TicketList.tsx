import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { Ticket } from "../Ticket/Ticket";
import { sortingTickets } from "../../redux/slices/tickets";

import styles from "./TicketList.module.scss";
interface TicketListProps {
  count: number;
}

export const TicketList: FC<TicketListProps> = ({ count}) => {
  const ticketsData = useSelector((state) => state.ticketsSlice.sortTickets);
  const checkboxData = useSelector((state) => state.checkboxesSlice.checkboxes);

  const dispatch = useDispatch();

  useEffect(() => {
    const activeCheckboxes = checkboxData.filter((checkbox) => checkbox.state);
    dispatch(sortingTickets(activeCheckboxes));
  }, [checkboxData]);

  //   console.log(ticketsData);
  return (
    <ul className={styles.ticketlist}>
      {ticketsData.slice(0, count).map((ticket) => (
        <Ticket ticket={ticket} key={uuidv4()} />
      ))}
    </ul>
  );
};
