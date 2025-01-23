"use client"

import { useContext } from "react"
import { EventContext } from "@/context/EventContext"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import Link from "next/link"
import Event from "./Events/Event"
import SkeletonGrid from "./SkeletonGrid"



const RecommendedEvents = () => {
  
  const { events } = useContext(EventContext);

  const filterRecommendedEvents = events.filter(
      (event) => event.recommended === true
  )

  return (
    <div>
      {filterRecommendedEvents.length > 0 
        ? (
          <Swiper className="w-full h-[500px]">
            {filterRecommendedEvents.map((event, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <Event event={event} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ):(
          <SkeletonGrid itemCount={4}/>
        ) 
      }
    </div>
  )
}

export default RecommendedEvents