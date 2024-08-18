import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneOfTicket } from "../../types";
import { CheckboxStore } from "./filterSlice";

export interface TicketState {
  tickets: OneOfTicket[];
  sortTickets: OneOfTicket[];
}

const initialState: TicketState = {
  tickets: [],
  sortTickets: [],
};

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {
    saveTickets: (state, action: PayloadAction<OneOfTicket[]>) => {
      state.tickets = [...state.tickets, ...action.payload];
      state.sortTickets = state.tickets;
    },
    sortingTickets: (state, action: PayloadAction<CheckboxStore[]>) => {
      const activeCheckboxes = action.payload;
      if (activeCheckboxes.length === 0) {
        state.sortTickets = state.tickets;
      } else {
        state.sortTickets = state.tickets.filter((ticket) => {
          const maxTransfer = Math.max(
            ...ticket.segments.map((item) => item.stops.length)
          );
          return activeCheckboxes.find(
            (item) => item.transfers === maxTransfer
          );
        });
      }
    },
    sortTicketsByPrice: (state) => {
      state.sortTickets = state.sortTickets.sort(
        (min, max) => min.price - max.price
      );
    },
    sortTicketsByTime: (state) => {
      state.sortTickets = state.sortTickets.sort((min, max) => {
        return (
          Math.max(min.segments[0].duration, min.segments[1].duration) -
          Math.max(max.segments[0].duration, max.segments[1].duration)
        );
      });
    },
  },
});

export const {
  saveTickets,
  sortingTickets,
  sortTicketsByPrice,
  sortTicketsByTime,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;
