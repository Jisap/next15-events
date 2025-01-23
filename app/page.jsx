"use client"

import DonwloadApp from "@/components/DonwloadApp"
import EventList from "@/components/Events/EventList"
import Hero from "@/components/Hero"
import RecommendedEvents from "@/components/RecommendedEvents"
import UpcomingEvents from "@/components/UpcomingEvents"
import { EventContext } from "@/context/EventContext"
import { useContext } from "react"


const Home = () => {
const { showEventList } = useContext(EventContext);
  

  return (
    <div>
      <Hero />
      <div className="flex flex-col justify-center items-center">
        
      </div>
      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>     
      ) : (
        <div>
          <div className="container mx-auto">
            <UpcomingEvents />
            <DonwloadApp />
            <RecommendedEvents />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home