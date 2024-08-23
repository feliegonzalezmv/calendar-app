import { onSetActiveEvent, useAppDispatch, useAppSelector } from "../store";
import { CustomEvent } from "../types/customTypes";

export const useCalendarStore = () => {
  const dispatch = useAppDispatch();
  const { events, activeEvent } = useAppSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent: CustomEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  return {
    activeEvent,
    events,
    setActiveEvent,
  };
};
