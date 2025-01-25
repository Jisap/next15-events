"use client"

import { useEffect, useState } from "react"




const Timer = ({ event }) => {

  const eventDate = new Date(`${event.date}T${event.hour}`); // Fecha y hora del evento

  const [timeRemaining, setTimeRemaining] = useState(eventDate - new Date()); // Tiempo restante hasta el evento

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = eventDate - now;
      if(timeLeft <= 0){                        // Si el tiempo restante es menor o igual a cero, limpia el intervalo y establece el tiempo restante a cero
        clearInterval(interval);
        setTimeRemaining(0);
      }else{
        setTimeRemaining(timeLeft);             // Si el tiempo restante es mayor a cero, establece el tiempo restante
      }
      
    }, 1000)                                    // Cada segundo, actualiza el tiempo restante
  
    return () => clearInterval(interval);       // Limpia el intervalo cuando el componente se desmonte
  },[eventDate]);

  if(timeRemaining <= 0){
    return <div>Event has already passed!</div>
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      {/* days */}
      <div>
        <div className="text-center border-[3px] border-accent rounded-full w-[100px] h-[100px] flex items-center justify-center">
          <div>
            <div className="text-3xl font-semibold">{days}</div>
            <div>Days</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer