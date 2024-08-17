import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface CheckboxStore {
  name: string;
  id: string;
  state: boolean;
  transfers: number | null;
}

interface FilterStore {
  checkboxes: CheckboxStore[];
}

const initialState: FilterStore = {
  checkboxes: [
    {
      name: "Все",
      id: uuidv4(),
      state: false,
      transfers: null,
    },
    {
      name: "Без пересадок",
      id: uuidv4(),
      state: false,
      transfers: 0,
    },
    {
      name: "1 пересадка",
      id: uuidv4(),
      state: false,
      transfers: 1,
    },
    {
      name: "2 пересадки",
      id: uuidv4(),
      state: false,
      transfers: 2,
    },
    {
      name: "3 пересадки",
      id: uuidv4(),
      state: false,
      transfers: 3,
    },
  ],
};

export const checkboxesSlice = createSlice({
  name: "checkboxes",
  initialState,
  reducers: {
    setStateCheckboxes: (state, action: PayloadAction<CheckboxStore[]>) => {
      state.checkboxes = action.payload;
    },
    setCheckboxesByAll: (state, action: PayloadAction<CheckboxStore[]>) => {
      if (action.payload[0].state) {
        action.payload = action.payload.map((item) => ({
          ...item,
          state: true,
        }));
      } else {
        action.payload = action.payload.map((item) => ({
          ...item,
          state: false,
        }));
      }

      state.checkboxes = action.payload;
    },
    setCheckboxesByOne: (state, action: PayloadAction<CheckboxStore[]>) => {
      if (action.payload.slice(1).every((item) => item.state)) {
        action.payload[0] = { ...action.payload[0], state: true };
      } else {
        action.payload[0] = { ...action.payload[0], state: false };
      }

      state.checkboxes = action.payload;
    },
  },
});

export const { setStateCheckboxes, setCheckboxesByAll, setCheckboxesByOne } =
  checkboxesSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default checkboxesSlice.reducer;
