"use client"

import React, { useContext, useState } from 'react'
import { TicketContext } from '@/context/Ticketcontext';
import { BiPlus, BiMinus } from "react-icons/bi"
import { HiTicket } from "react-icons/hi2"

const BuyTicket = ({ event }) => {

  if (!event) {
    return <div>Loading...</div>; // Manejar el caso en que event no esté disponible
  }

  const { buyNow, itemAmount, totalPrice } = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = () => {
    setIsLoading(true);
    buyNow(event);
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }

  return (
    <div>
      <div className='w-[200px] md:w-[300px] flex items-center justify-between bg-secondary p-2 rounded-full'>
        <div className='cursor-pointer bg-accent w-[48px] h-[48px] flex items-center justify-center select-none rounded-full'>
          <BiMinus className='text-lg'/>
        </div>
        <div>{itemAmount}</div>
        <div className='cursor-pointer bg-accent w-[48px] h-[48px] flex items-center justify-center select-none rounded-full'>
          <BiPlus className='text-lg'/>
        </div>
      </div>

      <button 
        onClick={handleBuyNow}
        className='bg-accent hover:bg-accent-hover transition-all p-4 rounded-full w-full'
      >
        <div className='flex items-center justify-center'>
          {isLoading ? (
            <div>
              Processing...
            </div>
          ):(
            <div className='flex items-center gap-4'>
              <HiTicket className='text-2xl' />
              <div>
                {`${itemAmount} x ticket - ${totalPrice}`}
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  )
}

export default BuyTicket