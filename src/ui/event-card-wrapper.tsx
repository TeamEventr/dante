import { Link } from "@tanstack/react-router"
import { ArrowRight, LocationIcon } from "./icons"
import { EventList } from "@/lib/types"

export default function EventCard({event}: {event: EventList}) {
    return (
         <div className='p-1 pt-3 flex-shrink-0 event w-80 text-eventr-gray-700 rounded-3xl flex flex-col shadow-xl'>
            <div className='px-2 flex gap-1'>
                <div className="flex-grow">
                    <p className='text-sm font-semibold text-eventr-gray-300'>24th Jan, 8PM</p>
                    <h3 className='font-bebas text-2xl uppercase font-bold leading-6 w-60 truncate-text'>Really Long Concert Name That Goes to Next Lin</h3>
                </div>
                <div className='relative flex-shrink-0 transform rotate-12 text-[1.2em] h-12 w-12 font-bebas text-white bg-secondary flex items-center justify-center rounded-full'>
                    <div className='absolute top-1.5 mx-auto rounded-full h-1 w-1 bg-eventr-gray-50'/>
                    ₹499
                </div>
            </div>
            <div className='flex justify-between px-2 pb-2'>
                <span className='flex text-sm items-center text-eventr-gray-300'><LocationIcon size={15}/> DY Patel Stadium, Mumbai</span>
                <Link to={`/event/$eventId`} params={{eventId: 'sadas'}}><ArrowRight size={18}/></Link>
            </div>
            <img src="/concert.jpg" alt="Concert" className="w-full aspect-[16/9] object-cover rounded-3xl" />
        </div>
    )
}