import { useAppDispatch, useAppSelector } from "../store";

export const useCalendarStore = () => {
  //const dispatch = useAppDispatch();
  const { events, activeEvent } = useAppSelector((state) => state.calendar);

  return {
    activeEvent,
    events,
  };
};
