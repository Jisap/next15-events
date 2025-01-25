"use client"

import { TicketContext } from "@/context/Ticketcontext";
import { useContext, useEffect } from "react"
import { PiChairFill } from "react-icons/pi"
import { BiChevronDown } from "react-icons/bi"

const CustomSelect = ({ event }) => {

  const { seat, showMenu, setShowMenu, handleSeat, initialEvent } = useContext(TicketContext);

  useEffect(() => {
    initialEvent(event);
  },[])

  return (
    <div className='custom-select bg-secondary w-full h-[64px] rounded-full flex items-center justify-between px-8 relative cursor-pointer select-none'>
      <div className="flex items-center gap-2 w-full">
        <div className="text-xl text-accent">
          <PiChairFill />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 capitalize">{seat.seat}</div>
          <div className="flex items-center gap-2">
            <div className="font-semibold">${seat.price}</div>
            <div className="text-sm text-white/60">each</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomSelect