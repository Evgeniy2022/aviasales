import { FC, ReactNode } from "react";

import { OneOfTicket } from "../../types";

import styles from "./Ticket.module.scss";

interface TicketProps {
  ticket: OneOfTicket;
}

export const Ticket: FC<TicketProps> = ({ ticket }) => {
  //   const [segments, setSegments] = useState([]);

  let transfersTo: ReactNode = <></>;
  let transfersFrom: ReactNode = <></>;
  const description:string = 'В пути';

  if (ticket.segments[1].stops.length === 0) {
    transfersTo = (
      <div className={styles.transferCount}>
        <p>Без </p>
        <p> пересадок</p>
      </div>
    );
  } else if (ticket.segments[1].stops.length === 1) {
    transfersTo = <p className={styles.transferCount}>1 пересадка</p>;
  } else {
    transfersTo = (
      <p className={styles.transferCount}>
        {ticket.segments[1].stops.length} пересадки
      </p>
    );
  }

  if (ticket.segments[0].stops.length === 0) {
    transfersFrom = (
      <div className={styles.transferCount}>
        <p>Без </p>
        <p> пересадок</p>
      </div>
    );
  } else if (ticket.segments[0].stops.length === 1) {
    transfersFrom = <p className={styles.transferCount}>1 пересадка</p>;
  } else {
    transfersFrom = (
      <p className={styles.transferCount}>
        {ticket.segments[0].stops.length} пересадки
      </p>
    );
  }

  const timeFromOne: number =
    new Date(ticket.segments[0].date).getHours() * 60 +
    new Date(ticket.segments[0].date).getMinutes();
  const timeFromTwo: number = ticket.segments[0].duration;
  const timeFianalFrom: number = timeFromOne + timeFromTwo;

    const timeToOne: number =
      new Date(ticket.segments[1].date).getHours() * 60 +
      new Date(ticket.segments[1].date).getMinutes();
    const timeToTwo: number = ticket.segments[1].duration;
    const timeFianalTo: number = timeToOne + timeToTwo;


  return (
    <>
      <li className={styles.header}>
        <div className={styles.top}>
          <div className={styles.price}>{ticket.price} P</div>
          <img src="../../../public/S7 Logo.svg" alt="" />
        </div>
        <div className={styles.up}>
          <div className={styles.placeWithTime}>
            <p className={styles.place}>
              {ticket.segments[0].origin} - {ticket.segments[0].destination}
            </p>
            <p>
              {new Date(ticket.segments[0].date).getHours() < 10
                ? "0" + new Date(ticket.segments[0].date).getHours()
                : new Date(ticket.segments[0].date).getHours()}
              :
              {new Date(ticket.segments[0].date).getMinutes() < 10
                ? "0" + new Date(ticket.segments[0].date).getMinutes()
                : new Date(ticket.segments[0].date).getMinutes()}{" "}
              -{" "}
              {Math.floor(timeFianalFrom / 60) >= 24
                ? Math.floor(timeFianalFrom / 60) - 24 <= 10
                  ? "0" + (Math.floor(timeFianalFrom / 60) - 24)
                  : Math.floor(timeFianalFrom / 60) - 24
                : Math.floor(timeFianalFrom / 60)}
              :
              {timeFianalFrom % 60 < 10
                ? "0" + (timeFianalFrom % 60)
                : timeFianalFrom % 60}
            </p>
          </div>
          <div className={styles.descriptionWithDuration}>
            <p className={styles.time}>{description.toUpperCase()}</p>
            <p>
              {Math.floor(ticket.segments[0].duration / 60) < 10
                ? "0" + Math.floor(ticket.segments[0].duration / 60)
                : Math.floor(ticket.segments[0].duration / 60)}
              ч{" "}
              {ticket.segments[0].duration % 60 < 10
                ? "0" + (ticket.segments[0].duration % 60)
                : ticket.segments[0].duration % 60}
              м
            </p>
          </div>
          <div className={styles.transfer}>
            {transfersFrom}
            <p className={styles.stop}>{ticket.segments[0].stops.join(", ")}</p>
          </div>
        </div>
        <div className={styles.down}>
          <div className={styles.placeWithTime}>
            <p className={styles.place}>
              {ticket.segments[1].origin} - {ticket.segments[0].destination}
            </p>
            <p>
              {new Date(ticket.segments[1].date).getHours() < 10
                ? "0" + new Date(ticket.segments[1].date).getHours()
                : new Date(ticket.segments[1].date).getHours()}
              :
              {new Date(ticket.segments[1].date).getMinutes() < 10
                ? "0" + new Date(ticket.segments[1].date).getMinutes()
                : new Date(ticket.segments[1].date).getMinutes()}{" "}
              -{" "}
              {Math.floor(timeFianalTo / 60) >= 24
                ? Math.floor(timeFianalTo / 60) - 24 <= 10
                  ? "0" + (Math.floor(timeFianalTo / 60) - 24)
                  : Math.floor(timeFianalTo / 60) - 24
                : Math.floor(timeFianalTo / 60)}
              :
              {timeFianalTo % 60 < 10
                ? "0" + (timeFianalTo % 60)
                : timeFianalTo % 60}
            </p>
          </div>
          <div className={styles.descriptionWithDuration}>
            <p className={styles.time}>{description.toUpperCase()}</p>
            <p>
              {Math.floor(ticket.segments[1].duration / 60) < 10
                ? "0" + Math.floor(ticket.segments[1].duration / 60)
                : Math.floor(ticket.segments[1].duration / 60)}
              ч{" "}
              {ticket.segments[1].duration % 60 < 10
                ? "0" + (ticket.segments[1].duration % 60)
                : ticket.segments[1].duration % 60}
              м
            </p>
          </div>
          <div className={styles.transfer}>
            {transfersTo}
            <p className={styles.stop}>{ticket.segments[1].stops.join(", ")}</p>
          </div>
        </div>
      </li>
    </>
  );
};
