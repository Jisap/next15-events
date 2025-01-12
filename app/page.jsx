"use client"

import React, { useContext } from 'react'
import { EventContext } from '@/context/eventContext'

const Home = () => {

  const { events } =useContext(EventContext)
console.log(events);
  return (
    <div>
      Home
    </div>
  )
}

export default Home