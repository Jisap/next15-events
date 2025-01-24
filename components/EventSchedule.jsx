"use client"

import { EventContext } from "@/context/EventContext";
import { useContext } from "react"
import { BiCalendar, BiMap } from "react-icons/bi";




const EventSchedule = ({event}) => {
  
  const { formatDate } = useContext(EventContext);
  const dbDate = event.date;
  const formattedDate = formatDate(dbDate);

  return (
    <div className="flex flex-col xl:flex-row gap-4 items-start justify-between">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <BiCalendar className="text-accent text-2xl" />
          <div>
            {formattedDate}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>·</div>
          <p>{event.hour}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <BiMap className="text-accent text-2xl" />
        <p>{event.location}</p>
      </div>
    </div>
  )
}

export default EventSchedule