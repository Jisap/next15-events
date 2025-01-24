import React from 'react'
import Image from 'next/image';
import { FaRegCircleCheck } from 'react-icons/fa6'

const EventDetails = async ({ params }) => {

  const { id } = params;
  const fetchEvent = async (id) => {
    const res = await fetch(`http://localhost:4000/events/${id}`);
    if (!res.ok) throw new Error("Failed to fetch event");
    return res.json();
  }

  const event = await fetchEvent(id);
  console.log(event);

  return (
    <section className='min-h-screen flex items-center py-8 sm:py-48'>
      <div className='container mx-auto'>
        <div className='w-full max-w-[600px]  xl:max-w-none mx-auto'>
          <div className='flex flex-col xl:flex-row gap-8 xl:gap-24 pt-28 pb-12 sm:py-0 xl:mb-24'>
            <div className='relative w-full h-[320px] xl:max-w-[670px] xl:h-[500px] rounded-2xl overflow-hidden mb-12 xl:mb-0'>
              <Image
                src={event.img_lg}
                fill
                quality={100}
                className="object-cover mix-blend-lighten"
                alt=""
              />
            </div>

            <div>
              info
            </div>
          </div>

          <div className='bg-green-50/30'>
            <div>
              <div className='w-full xl:max-w-[670px] flex flex-col gap-8 xl:gap-12'>
                <p className='text-grey'>{event.description}</p>
                <div>
                  <h3 className='h3 mb-6'>Requirements for the event</h3>
                  <ul>
                    <li className='flex gap-3 items-center'>
                      <span className='text-accent text-xl'>
                        <FaRegCircleCheck />
                      </span>
                      <p className='text-grey'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </li>
                    <li className='flex gap-3 items-center'>
                      <span className='text-accent text-xl'>
                        <FaRegCircleCheck />
                      </span>
                      <p className='text-grey'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </li>
                    <li className='flex gap-3 items-center'>
                      <span className='text-accent text-xl'>
                        <FaRegCircleCheck />
                      </span>
                      <p className='text-grey'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div>organizers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails