"use client"

import EventList from "@/components/Events/EventList"
import Searchbar from "@/components/Searchbar/searchbar"
import { EventContext } from "@/context/EventContext"
import { useContext } from "react"


const Home = () => {

  const { showEventList, handleClearSearch } = useContext(EventContext);

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Searchbar />
        <button 
          className="text-accent"
          onClick={() => handleClearSearch()}
        >
          clear search
        </button>
      </div>
      {showEventList ? (
        <div className="container mx-auto">
          <EventList />
        </div>     
      ) : (
        <div>
          <div className="container mx-auto">
            <div>
              upcoming events slider
            </div>
            <div>
              donwnload app section
            </div>
            <div>
              recommended events slider
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home