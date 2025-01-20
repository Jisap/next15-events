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

  const { event } =useContext(EventContext)

  return (
    <div>EventType</div>
  )
}

export default EventType