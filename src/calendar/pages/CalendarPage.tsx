import { Calendar, View } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { NavBar } from "../components/NavBar";
import { localizer } from "../../helpers";
import { CalendarEvent } from "../components/CalendarEvent";
import { CustomEvent } from "../../types/customTypes";
import { useState } from "react";
import { CalendarModal } from "../components/CalendarModal";
import { useCalendarStore, useUiStore } from "../../hooks";

export const CalendarPage = () => {
  const { openDateModal } = useUiStore();
  const { events } = useCalendarStore();
  const [lastView, setLastView] = useState<View>(
    (localStorage.getItem("lastView") as View) || "week"
  );
  const eventStyleGetter = () => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return { style };
  };

  const onDoubleClick = () => {
    openDateModal();
  };

  const onSelect = (event: CustomEvent) => {
    console.log({ click: event });
  };

  const onViewChanged = (event: View) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  return (
    <>
      <NavBar></NavBar>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
