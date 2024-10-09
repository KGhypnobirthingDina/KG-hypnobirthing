import React from "react";
import styles from "../components/CourseCalendar.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from "@fullcalendar/core/locales-all";
import imgSrc from "../dina-salon.jpeg";
export default function CourseCalendar() {
  const events = [
    {
      title: "ימי חמישי",
      start: "2024-09-05",
      extendedProps: {
        description: "12:00 - 9:00",
      },
    },
    {
      title: "ימי שלישי",
      start: "2024-10-01",
      extendedProps: {
        description: "12:00 - 9:00",
      },
    },
    {
      title: "ימי חמישי",
      start: "2024-11-07",
      extendedProps: {
        description: "12:00 - 9:00",
      },
    },
  ];

  const renderEventContent = (eventInfo) => {
    return (
      <div className={styles.Pcontainer}>
        <b>{eventInfo.timeText}</b>
        <p>{eventInfo.event.title}</p>
        <p>{eventInfo.event.extendedProps.description}</p> {/* הצגת התיאור */}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        locales={allLocales}
        locale="he"
        direction="rtl"
        headerToolbar={{
          start: "", // Switched the order of next and prev
          center: "title",
          end: "prev,next today", // No buttons at the end
        }}
        events={events}
        eventContent={renderEventContent} // פונקציה מותאמת להצגת האירועים
        height="110vh"
        width="60vw"
        fixedWeekCount={false} // ביטול ספירת השבועות הקבועה
      />
      <img src={imgSrc} alt="dina" />
    </div>
  );
}
