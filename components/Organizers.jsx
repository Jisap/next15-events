"use client"

import Image from 'next/image'
import Link from 'next/link'



const Organizers = ({ event }) => {


  return (
    <div>
      <div>
        <h3 className='h3 mb-4'>
          Organizers
        </h3>
        <div className='w-[74px] h-[3px] bg-accent rounded-3xl'></div>
      </div>
      {event.organizers.map((organizer, index) => {
        return (
          <div key={index}>
            <Image 
              src={organizer.img_avatar}
              width={72}
              height={72}
              alt="organizer avatar"
            />
            <div>
              <div>
                <h4>
                  {organizer.name}
                </h4>
                <p>
                  {organizer.job}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Organizers