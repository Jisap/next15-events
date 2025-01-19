"use client"

import { format } from "date-fns"
import { Button } from "../ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { BiCalendar, BiChevronDown } from "react-icons/bi"
import { useContext } from "react"
import { EventContext } from "@/context/EventContext"



const EventDate = () => {

  const { selectedDate, setSelectedDate } = useContext(EventContext);

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }

  return (
    <div className="flex w-full items-center gap-[10px] xl:w-[190px]">
      <div className="text-lg text-accent">
        <BiCalendar />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            {selectedDate ? (
              format(selectedDate, "PPP")
            ):(
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto bg-secondary border-0 text-white">
          <Calendar 
            mode="single" 
            selected={selectedDate} 
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
        <div className="text-[26px]">
          <BiChevronDown />
        </div>
      </Popover>
    </div>
  )
}

export default EventDate