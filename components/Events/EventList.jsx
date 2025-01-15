import { useContext } from "react"
import { EventContext } from "@/context/EventContext"
import Event from "./Event"
import SkeletonGrid from "../SkeletonGrid"




const EventList = () => {

  const { filteredEvents, isLoading, error } = useContext(EventContext)
  //console.log(filteredEvents.length);
  if(error) return <p>Error: {error}</p>

  if(filteredEvents.length === 0 && !isLoading){
    return(
      <div>
        No events available
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
        {filteredEvents.map((event, index) => {
          return (
            <div key={index}>
              <Event event={event} /> 
            </div>
          )
        })}
      </div>
    )
  }

}

export default EventList