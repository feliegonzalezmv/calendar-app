import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { CustomEvent } from "../../types/customTypes";

const tempEvent: CustomEvent = {
  title: "Boss birthday",
  start: new Date(),
  end: addHours(new Date(), 2),
  notes: "Buy cupcake",
  bgColor: "#fafafa",
  user: { _id: "123", name: "Felipe" },
};

export const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    getEvents: (state) => {
      state.events = { ...state.events };
    },
  },
});

export const { getEvents } = calendarSlice.actions;
export default calendarSlice.reducer;
