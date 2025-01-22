"use client"

import { EventContext } from "@/context/EventContext"
import { useContext, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Pagination } from "swiper/modules"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Event from "./Events/Event"
import Link from "next/link"
import Image from "next/image"
import SkeletonGrid from "./SkeletonGrid"


const UpcomingEvents = () => {

  const { events } = useContext(EventContext);
  const [eventValue, setEventValue] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    const filterEvents = () => {
      if(eventValue === "all") {          // Si el valor del filtro es "all" 
        setFilteredEvents(events)         // devolver todos los eventos
      }else{
        const result = events.filter(event => event.type === eventValue) // Si no, devolver los eventos que coincidan con el valor del filtro
        setFilteredEvents(result)
      }
    }
    filterEvents()
  }, [events, eventValue]);
console.log(filteredEvents);
  return (
    <section>
      <Tabs value={eventValue} onValueChange={setEventValue}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="sport">Sport</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="food">Food</TabsTrigger>
          <TabsTrigger value="art">Art</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* slider */}
      {filteredEvents.length > 0 
        ? (
          <Swiper 
            slidesPerView={1}
            spaceBetween={30}
            pagination={{ 
              dynamicBullets: true,
              clickable: true 
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1310: { slidesPerView: 4 },
            }}
            modules={[Pagination]}
            className="w-full h-[500px]"
          >
            {filteredEvents.map((event, index) => (
              <SwiperSlide 
                key={index}
                className="select-none"
              >
                <Link href="">
                  <Event event={event} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          ) 
          : 
          (
            <SkeletonGrid itemCount={4} />
          )
      }
    </section>
  )
}

export default UpcomingEvents