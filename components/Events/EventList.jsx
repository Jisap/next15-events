import { useContext } from "react"
import { EventContext } from "@/context/EventContext"
import Event from "./Event"




const EventList = () => {

  const { filteredEvents, isLoading, error } = useContext(EventContext)
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
      <div>
        loading
      </div>
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