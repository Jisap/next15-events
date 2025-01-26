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
                <h4 className='text-lg font-medium'>
                  {organizer.name}
                </h4>
                <p className='text-accent'>
                  {organizer.job}
                </p>
                <div className='flex gap-4'>
                  {organizer.social.map((social, index) => {
                    return (
                      <Link href={social.path} key={index}>
                        <Image 
                          src={social.icon}
                          width={20}
                          height={20}
                          alt="social icon"
                        />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Organizers