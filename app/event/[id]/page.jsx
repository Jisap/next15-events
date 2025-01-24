import Image from 'next/image';
import React from 'react'

const EventDetails = async({ params }) => {
  
  const { id } = params;
  const fetchEvent = async(id) => {
    const res = await fetch(`http://localhost:4000/events/${id}`);
    if(!res.ok) throw new Error("Failed to fetch event");
    return res.json();
  }
  
  const event = await fetchEvent(id);
  console.log(event);

  return (
    <section className='min-h-screen flex items-center py-8 sm:py-48'>
      <div className='container mx-auto'>
      <div className='w-full max-w-[600px]  xl:max-w-none mx-auto'>
        <div className=''>
          <div className='relative w-full h-[320px] xl:max-w-[670px] xl:h-[500px] rounded-2xl overflow-hidden mb-12 xl:mb-0'>
            <Image 
              src={event.img_lg}
              fill
              quality={100}
              className="object-cover mix-blend-lighten"
              alt=""
            />
          </div>
          <div>info</div>
        </div>
        <div className='bg-green-50/30'>event details 2</div>
      </div>    
      </div>
    </section>
  )
}

export default EventDetails