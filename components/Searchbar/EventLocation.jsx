

import { EventContext } from '@/context/EventContext'
import React, { useContext } from 'react'

const EventLocation = () => {

  const { events, selectedLocation, setSelectedLocation } = useContext(EventContext);

  const uniqueLocations = [ // Lista de ubicaciones únicas obtenidas de los eventos futuros (incluyendo aquellos que ocurren hoy pero cuyo horario aún no ha pasado).

    "All locations", // Valor por defecto

    ...new Set(                                                           // Crea un conjunto de valores únicos a partir del resultado del filter
      events.filter((event) => {                                          // Filtra los eventos. Se realizan tres verificaciones principales para cada evento:
        const eventDate = new Date(event.date);                                   // Fecha del evento  
        const currentDate = new Date();                                           // Fecha actual

        if (eventDate > currentDate) return true                          // 1º ¿El evento ocurre en el futuro? Si es así se incluye en el resultado.
        
        if (eventDate.toDateString() === currentDate.toDateString()) {    // 2º ¿El evento ocurre hoy pero más tarde? -> Se compara si la fecha del evento coincide con la fecha actual (toDateString ignora la hora).
          const eventTime = eventDate.getTime();                                  // Hora del evento
          const currentTime = currentDate.getTime();                              // Hora actual      
          return eventTime > currentTime                                  // Si ocurre hoy, también se verifica si la hora del evento (eventTime) es posterior a la hora actual (currentTime).
        }

        return false                                                      // 3º Si ninguna de las condiciones anteriores se cumple, el evento se descarta.

      }).map((event) => event.location)
    
    )
  ]

  console.log(uniqueLocations);

   return (
    <div>
      EventLocation
    </div>
  )
}

export default EventLocation