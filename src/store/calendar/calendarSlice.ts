import { createSlice } from "@reduxjs/toolkit";
import { addHours } from "date-fns";
import { CustomEvent } from "../../types/customTypes";

const tempEvent: CustomEvent = {
  _id: new Date().getTime(),
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
    activeEvent: tempEvent,
  },
  reducers: {
    onSetActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
  },
});

export const { onSetActiveEvent } = calendarSlice.actions;
export default calendarSlice.reducer;
