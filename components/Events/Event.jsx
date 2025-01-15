import Image from "next/image"
import { BiCalendar, BiMap, BiTime } from "react-icons/bi"



const Event = ({ event }) => {
  return (
    <div className="bg-white/5 hover:bg-white/10 transition-all h-[440px] rounded-3xl flex flex-col justify-start p-4 w-[320px] sm:w-full mx-auto sm:mx-0">
      {event.title}
    </div>
  )
}

export default Event