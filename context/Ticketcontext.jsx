"use client"

import { createContext, useState, useEffect, use } from "react"

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {

  const [event, setEvent] = useState(null);
  const [seat, setSeat] = useState({seat:null, price: null});
  const [showMenu, setShowMenu] = useState(false);
  const [itemAmount, setItemAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutData, setCheckoutData] = useState(null);

  const initialEvent = (fetchedEvent) => {
    setEvent(fetchedEvent);                                      // Se establece el evento en el contexto
    setItemAmount(1);
    
    const frontSeat = fetchedEvent?.seats.find(                  // Busca el primer seat que tenga el nombre frontseat
      (seat) => seat.seat === "frontseat"
    )
    if(frontSeat){                                               // Si se encuentra, se establece el valor de seat y price
      setSeat({seat: frontSeat.seat, price: frontSeat.price})
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {                         // Función que cierra el menú si se hace click fuera de él
      if(!e.target.closest(".custom-select")){                  // Si el elemento más cercano al que se hizo click no tiene la clase custom-select           
        setShowMenu(false);                                     // Se cierra el menú
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  },[]);

  useEffect(() => {
    setTotalPrice(seat.price * itemAmount);                     // Se calcula el precio total del ticket
  },[seat.price, itemAmount]);

  const handleSeat = (seat, price) => {                         // Función que establece el seat y el precio del ticket
    setSeat({ seat, price })
    setShowMenu(false);
  }

  const buyNow = (event) => {                                   // Función que establece los datos de la compra
    const ticketData = {
      eventId: event.id,
      evenName: event.title,
      ticketType: seat.seat,
      ticketPrice: seat.price,
      amount: itemAmount,
      totalPrice,
    };
    setCheckoutData(ticketData);
  }

  const increaseAmount = () => { // Función que incrementa el número de items en el ticket
    setItemAmount((prevAmount) => prevAmount + 1) 
  }

  const decreaseAmount = () => { // Función que decrementa el número de items en el ticket
    setItemAmount((prevAmount) => prevAmount > 1 ? prevAmount - 1 : 1) 
  }
                                 

  return (
    <TicketContext.Provider 
      value={{ 
        initialEvent, 
        event,
        seat,
        showMenu,
        itemAmount,
        totalPrice,
        checkoutData,
        handleSeat,
        setSeat,
        setShowMenu,
        buyNow, 
        increaseAmount,
        decreaseAmount,
      }}>
      {children}
    </TicketContext.Provider>
  )
}

export default TicketProvider

