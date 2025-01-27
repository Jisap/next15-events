"use client"

import { isSameDay } from 'date-fns';
import React, { createContext, useEffect, useState, useMemo } from 'react'


export const EventContext = createContext();

const EventProvider = ({ children }) => {
  
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);
  const [showEventList, setShowEventList] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState("");

  const[searchTerm, setSearchTerm] = useState("")
  const [appliedFilters, setAppliedFilters] = useState({    // Filtro aplicado basado en el término de búsqueda: appliedFilters.searchTerm, etc
    searchTerm: "",
    selectedLocation: "",
    selectedDate: null,
    selectedType: "",
  });

  const filteredEvents = useMemo(() => { 
    const today = new Date();
    
    return events.filter((event) => {                            // Itera sobre cada evento en la lista events.
      
      const eventDate = new Date(event.date);
      if(eventDate < today) return false;                        // Si el evento es anterior a la fecha actual, se excluye del resultado.

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

      // Filtro por selectedDate
      const matchesDate = appliedFilters.selectedDate                                            // Si contiene un valor appliedFilters.selectedDate
        ? eventDate.toDateString() === new Date(appliedFilters.selectedDate).toDateString()      // se verifica si el date del evento iterado coincide con el valor aplicado en el selectedDate
        : true                                                                                   // Si está vacío, no se aplica ningún filtro de búsqueda y el evento se incluye en los resultados

      // Filtro por selectedType
      const matchesType = appliedFilters.selectedType                                            // Si contiene un valor appliedFilters.selectedType
        ? event.type.toLowerCase() === appliedFilters.selectedType.toLowerCase()                 // se verifica si el type del evento iterado coincide con el valor aplicado en el selectedType
        : true                                                                                   // Si está vacío, no se aplica ningún filtro de búsqueda y el evento se incluye en los resultados
      
      
        return matchesSearch && matchesLocation && matchesDate && matchesType                   // Se devuelven los eventos con los filtros aplicados
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
    setAppliedFilters({ 
      searchTerm, 
      selectedLocation, 
      selectedDate, 
      selectedType 
    }) // Se reciben desde <EventSearch /> ,<EventLocation />, <EventDate />, <EventType /> -> filteredEvents -> EventList
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }

  const handleClearSearch = () => {
    setSearchTerm("")
    setShowEventList(false)
    setSelectedLocation("")
    setSelectedDate(null)
    setSelectedType("")
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: "short", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
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
        selectedType,
        setSelectedType,
        formatDate,
      }}
    >
      {children}
    </EventContext.Provider>
  )
}

export default EventProvider


   
