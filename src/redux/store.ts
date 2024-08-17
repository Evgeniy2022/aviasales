import { configureStore } from "@reduxjs/toolkit";
import ticketsSlice from "./slices/tickets";
import checkboxesSlice from "./slices/filterSlice";


export const store = configureStore({
  reducer: {
	ticketsSlice,
	checkboxesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;