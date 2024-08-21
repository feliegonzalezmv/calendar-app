import { Calendar, CalendarProps } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addHours } from "date-fns";

import { NavBar } from "../components/NavBar";
import { localizer } from "../../helpers";

const events = [
  {
    title: "Boss birthday",
    notes: "Buy cupcake",
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: "#fafafa",
    user: { _id: "123", name: "Felipe" },
  },
];

export const CalendarPage = () => {
  const eventStyleGetter = (event: CalendarProps) => {
    const style = {
      backgroundColor: "#347CF7",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };
    console.log("event :>> ", event);
    return { style };
  };
  return (
    <>
      <NavBar></NavBar>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)" }}
        eventPropGetter={eventStyleGetter}
      />
    </>
  );
};
