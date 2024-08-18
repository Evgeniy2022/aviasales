import { FC, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";

import { Ticket } from "../Ticket/Ticket";
import { RootState } from "../../redux/store";
import { sortingTickets } from "../../redux/slices/tickets";
import { CheckboxStore } from "../../redux/slices/filterSlice";
import { OneOfTicket } from "../../types";

import styles from "./TicketList.module.scss";
interface TicketListProps {
  count: number;
}

export const TicketList: FC<TicketListProps> = ({ count }) => {
  const ticketsData = useSelector(
    (state: RootState) => state.ticketsSlice.sortTickets
  );
  const checkboxData = useSelector(
    (state: RootState) => state.checkboxesSlice.checkboxes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const activeCheckboxes = checkboxData.filter(
      (checkbox: CheckboxStore) => checkbox.state
    );
    dispatch(sortingTickets(activeCheckboxes));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxData]);

  //   console.log(ticketsData);
  return (
    <ul className={styles.ticketlist}>
      {ticketsData.slice(0, count).map((ticket: OneOfTicket) => (
        <Ticket ticket={ticket} key={uuidv4()} />
      ))}
    </ul>
  );
};
