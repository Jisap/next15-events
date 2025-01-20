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
      <div className="text-lg text-accent mr-3">
        <BiCalendar />
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-full justify-start p-0 bg-transparent hover:bg-transparent border-none shadow-none relative">
            {selectedDate ? (
              format(selectedDate, "PPP")
            ):(
              <span>Pick a date</span>
            )}
            <div className="absolute top-2 -right-[0.75px]">
              <BiChevronDown className="size-6" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-secondary border-0 text-white">
          <Calendar 
            mode="single" 
            selected={selectedDate} 
            onSelect={handleDateChange}
            initialFocus
          />
        </PopoverContent>
        
      </Popover>
    </div>
  )
}

export default EventDate