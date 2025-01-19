"use client"

import React, { createContext, useEffect, useState, useMemo } from 'react'


export const EventContext = createContext();

const EventProvider = ({ children }) => {
  
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const[searchTerm, setSearchTerm] = useState("")
  const [appliedFilters, setAppliedFilters] = useState({    // Filtro aplicado basado en el término de búsqueda: appliedFilters.searchTerm, etc
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
  });


  const filteredEvents = useMemo(() => { 
    return events.filter((event) => {                            // Itera sobre cada evento en la lista events.
      
      //Filtro por searchTerm
      const matchesSearch = appliedFilters.searchTerm            // Si contiene un valor appliedFilters.searchTerm
        ? event.title                                            // se verifica si el title del evento 
          .toLowerCase()                                         // ignorando mayúsculas y minúsculas. 
          .includes(appliedFilters.searchTerm.toLowerCase())     // incluye ese valor 
        : true                                                   // Si está vacío, no se aplica ningún filtro de búsqueda y el evento se incluye en los resultados
      
      // Filtro por selectedLocation
      const matchesLocation = appliedFilters.selectedLocation               // Si contiene un valor appliedFilters.selectedLocation
        ? event.location                                                    // se verifica si el location del evento
          .toLowerCase() === appliedFilters.selectedLocation.toLowerCase()  // coincide con el valor aplicado en el select
        : true                                                              // Si está vacío, no se aplica ningún filtro de búsqueda y el evento se incluye en los resultados
      
      return matchesSearch && matchesLocation                    // Si ambos filtros se cumplen, el evento se incluye en los resultados.
    });

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
    setAppliedFilters({ searchTerm, selectedLocation, selectedDate }) // Se reciben desde <EventSearch /> ,<EventLocation />, <EventDate /> -> filteredEvents -> EventList
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  const handleClearSearch = () => {
    setSearchTerm("")
    setShowEventList(false)
    setSelectedLocation("")
    setSelectedDate(null)
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
        setSelectedLocation,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider


   
