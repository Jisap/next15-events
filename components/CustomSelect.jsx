"use client"

import { TicketContext } from "@/context/Ticketcontext";
import { useContext, useEffect } from "react"
import { PiChairFill } from "react-icons/pi"
import { BiChevronDown } from "react-icons/bi"

const CustomSelect = ({ event }) => {

  if (!event) {
    return <div>Loading...</div>; // Manejar el caso en que event no esté disponible
  }

  const { seat, showMenu, setShowMenu, handleSeat, initialEvent } = useContext(TicketContext);

  useEffect(() => {
    if(event){
      initialEvent(event);
    }
  },[])

  return (
    <div 
      onClick={(e) => {
        setShowMenu((prev) => !prev)
        e.stopPropagation()  
      }}
      className='custom-select bg-secondary w-full h-[64px] rounded-full flex items-center justify-between px-8 relative cursor-pointer select-none'
    >
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

      {showMenu && (
        <ul className="bg-secondary absolute top-[70px] left-0 overflow-hidden w-full rounded-3xl h-[200px]">
          {event.seats.map((seat, index) => (
            <li 
              key={index} 
              onClick={(e) => {
                handleSeat(seat.seat, seat.price)
                e.stopPropagation()
              }}
              className="cursor-pointer hover:bg-white/5 px-8 py-5"

            >
              <div className="flex justify-between">
                <div className="capitalize">{seat.seat}</div>
                <div>${seat.price}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomSelect