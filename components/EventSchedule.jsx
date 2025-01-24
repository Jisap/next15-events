"use client"

import { EventContext } from "@/context/EventContext";
import { useContext } from "react"
import { BiCalendar, BiMap } from "react-icons/bi";




const EventSchedule = ({event}) => {
  
  const { formatDate } = useContext(EventContext);
  const dbDate = event.date;
  const formattedDate = formatDate(dbDate);

  return (
    <div>
      <div>
        {formattedDate}
      </div>
    </div>
  )
}

export default EventSchedule