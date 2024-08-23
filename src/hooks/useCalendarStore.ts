import {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  useAppDispatch,
  useAppSelector,
} from "../store";
import { CustomEvent } from "../types/customTypes";

export const useCalendarStore = () => {
  const dispatch = useAppDispatch();
  const { events, activeEvent } = useAppSelector((state) => state.calendar);

  const setActiveEvent = (calendarEvent: CustomEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const starSavingEvent = async (calendarEvent: CustomEvent) => {
    if (calendarEvent._id) {
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => dispatch(onDeleteEvent());

  return {
    activeEvent,
    events,
    hasEventSelected: !!activeEvent,
    startDeletingEvent,
    setActiveEvent,
    starSavingEvent,
  };
};
