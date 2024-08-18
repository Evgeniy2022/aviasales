import { useEffect, FC, useState, Dispatch } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { TicketList } from "./components/TicketList/TicketList";
import { Transfers } from "./components/Transfers/Transfers";
import { Filters } from "./components/Filters/Filters";
import { Button } from "./components/Button/Button";
import { Loader } from "./components/Loader/Loader";
import Logo from '../public/Logo.png'

import { getSearchId, getTickets } from "./api";
import { saveTickets } from "./redux/slices/tickets";
import "./App.css";

export const App: FC = () => {
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(5);

  const dispatch: Dispatch<UnknownAction> = useDispatch();

  async function getTicketsRequest(data: { searchId: string }) {
    try {
      const response = await getTickets(data.searchId);
      if (response.stop === true) {
        setLoader(false);
        return true;
      } else {
        dispatch(
          saveTickets(
            response.tickets.map((ticket: []) => ({ ...ticket, id: uuidv4() }))
          )
        );
        return getTicketsRequest(data);
      }
    } catch {
      return getTicketsRequest(data);
    }
  }

  useEffect(() => {
    getSearchId().then((data) => {
      getTicketsRequest(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <header>
        <img src={Logo} alt="logo" />
      </header>

      {loader && <Loader />}
      <main className="main">
        <Transfers />
        <Filters />
        <TicketList count={count} />
        <Button onClick={() => setCount((prev) => (prev += 5))}>
          Показать еще 5 билетов!
        </Button>
      </main>
    </>
  );
};

export default App;
