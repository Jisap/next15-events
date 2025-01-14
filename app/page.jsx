"use client"

import EventList from "@/components/Events/EventList"
import Searchbar from "@/components/Searchbar/searchbar"


const Home = () => {

  return (
    <div>
      <Searchbar />
      <div className="container mx-auto">
        <EventList />
      </div>
    </div>
  )
}

export default Home