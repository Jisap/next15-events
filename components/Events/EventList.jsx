import { useContext } from "react"
import { EventContext } from "@/context/EventContext"
import Event from "./Event"
import SkeletonGrid from "../SkeletonGrid"
import Link from "next/link"



const EventList = () => {

  const { filteredEvents, isLoading, error } = useContext(EventContext)

  if(error) return <p>Error: {error}</p>

  if(filteredEvents.length === 0 && !isLoading){
    return(
      <div className="h-[80vh]">
        <p className="text-white/80 text-center">
          No events available
        </p>
      </div>
    )
  }

  if(isLoading){
    return(
      <SkeletonGrid itemCount={filteredEvents.length} />
    )
  }else{
    return (
      <div>
        <h4 className="h-4 mb-6">
          {filteredEvents.length} results found
        </h4>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-[30px] mb-32">
          {filteredEvents.map((event, index) => {
            return (
              <Link href={`/event/${event.id}`} key={index}>
                <div>
                  <Event event={event} /> 
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    )
  }

}

export default EventList