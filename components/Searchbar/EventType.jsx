import { BiLayer } from 'react-icons/bi'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useContext } from 'react'
import { EventContext } from '@/context/EventContext'


const EventType = () => {

  const { events, selectedType, setSelectedType } = useContext(EventContext);

  const uniqueTypes = [
    "All type",
    ...new Set(events.map((event) => event.type))
  ]

  return (
    <div className='flex items-center gap-[10px] w-full xl:w-[190px] select-none'>
      <div className='text-accent text-lg'>
              <BiLayer />
            </div>
            <Select 
              value={selectedType ?? null}
              onValueChange={(value) => setSelectedType(value)}
              className="justify-center"
            >
              <SelectTrigger className="bg-transparent border-none focus:ring-0 focus:ring-offset-0 p-0 capitalize">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Type</SelectLabel>
                  {uniqueTypes.map((type , index) => (
                    <SelectItem 
                      key={index} 
                      value={type === "All type" ? null : type}
                      className="capitalize"
                    >
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
    </div>
  )
}

export default EventType