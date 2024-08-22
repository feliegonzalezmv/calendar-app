import React from "react";
import { EventProps } from "react-big-calendar";
import { CustomEvent } from "../../types/customTypes";

type CalendarEventProps = EventProps<CustomEvent>;

export const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
  const { title, user } = event;
  return (
    <>
      <strong>{title}</strong>
      <span> - {user?.name}</span>
    </>
  );
};
