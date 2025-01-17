"use client"

import React, { createContext, useEffect, useState, useMemo } from 'react'


export const EventContext = createContext();

const EventProvider = ({ children }) => {
  
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("")

  const[searchTerm, setSearchTerm] = useState("")
  const [appliedFilters, setAppliedFilters] = useState({    // Filtro aplicado basado en el término de búsqueda: appliedFilters.searchTerm
    searchTerm: "",
    selectedLocation: "",
  });


  const filteredEvents = useMemo(() => { 
    return events.filter((event) => {                            // Itera sobre cada evento en la lista events.
      const matchesSearch = appliedFilters.searchTerm            // Si contiene un valor appliedFilters.searchTerm
        ? event.title                                            // se verifica si el title del evento 
          .toLowerCase()                                         // ignorando mayúsculas y minúsculas. 
          .includes(appliedFilters.searchTerm.toLowerCase())     // incluye ese valor 
        : true                                                   // Si está vacío, no se aplica ningún filtro de búsqueda y el evento se incluye en los resultados
      return matchesSearch
    })

  }, [events, appliedFilters])

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true)
      try {
        const res = await fetch("http://localhost:4000/events")

        if(!res.ok) throw new Error("Failed to fetch events")

        const data = await res.json()
        setEvents(data)
        setIsLoading(false)

      } catch (error) {
        setError(error.message)
        setIsLoading(false)
      }
    }

    fetchEvents()
  }, []);

  const handleSubmit = () => {
    setIsLoading(true);
    setShowEventList(true);
    setAppliedFilters({ searchTerm, selectedLocation })
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  const handleClearSearch = () => {
    setSearchTerm("")
    setShowEventList(false)
    setSelectedLocation("")
  }

  return (
    <EventContext.Provider 
      value={{ 
        events, 
        isLoading, 
        error,
        searchTerm, 
        setSearchTerm, 
        filteredEvents,
        handleSubmit,
        handleClearSearch, 
        showEventList,
        selectedLocation,
        setSelectedLocation
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider


   
