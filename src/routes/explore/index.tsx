import { createFileRoute } from '@tanstack/react-router';
import { Link } from "@tanstack/react-router";
import { SearchIcon } from "../../ui/icons";
import EventCard from '@/ui/event-card-wrapper';
import { categories } from '@/lib/data';

// import { queryClient } from "@/main";
// import { exploreEventsQuery } from "@/api/hooks";
import { useEventsExplore } from '@/api/hooks';

export const Route = createFileRoute('/explore/')({
    component: RouteComponent,
    // Prefetches the data to make sure it is available in the cache when the route is rendered
    // loader: async () => {
    //     return queryClient.ensureQueryData(exploreEventsQuery);
    // },
});

function RouteComponent() {

    const { data: eventList, error, isError, isPending } = useEventsExplore();
    console.log("Fetched events:", eventList);
    return (
    
    <div className="flex flex-col p-4 pt-16 gap-4">
    <div className="relative flex items-center gap-2">
        <input 
        placeholder="Search events.." 
        className="bg-eventr-gray-200/20 text-lg text-eventr-gray-50 outline-none pl-10 p-2 rounded-full w-full h-[56px]"
        />
        <button className="absolute left-2.5">
        <SearchIcon />
        </button>
    </div>
    <div className="flex gap-2 overflow-x-auto">
        {categories.map((category) => (
        <Link 
            key={category} 
            to="/explore" 
            className="h-10 flex items-center px-5 bg-eventr-gray-200/20 text-eventr-gray-50 outline-none rounded-xl"
        >
            {category}
        </Link>
        ))}
    </div>
        <div className='flex gap-2'>
            <div className='flex flex-col font-bebas text-lg gap-2 flex-grow'>
                
                <button className='bg-primary w-full rounded-full h-8 flex justify-between'>
                    <span className='flex items-center pl-1 justify-center w-full'>Jan</span>
                    <span className='bg-white flex-shrink-0 text-eventr-gray-800 h-8 w-8 rounded-full p-1'>26</span>
                </button>
                <button className='bg-eventr-gray-500 opacity-50 w-full rounded-full h-8 flex justify-between'>
                    <span className='flex items-center pl-1 justify-center w-full'>Jan</span>
                    <span className='bg-eventr-gray-200 flex-shrink-0 text-eventr-gray-800 h-8 w-8 rounded-full p-1'>27</span>
                </button>
                <button className='bg-eventr-gray-500 opacity-50 w-full rounded-full h-8 flex justify-between'>
                    <span className='flex items-center pl-1 justify-center w-full'>Jan</span>
                    <span className='bg-eventr-gray-200 flex-shrink-0 text-eventr-gray-800 h-8 w-8 rounded-full p-1'>28</span>
                </button>
                <button className='bg-eventr-gray-500 opacity-50 w-full rounded-full h-8 flex justify-between'>
                    <span className='flex items-center pl-1 justify-center w-full'>Jan</span>
                    <span className='bg-eventr-gray-200 flex-shrink-0 text-eventr-gray-800 h-8 w-8 rounded-full p-1'>29</span>
                </button>
            </div>
            {
                isPending && (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
                    </div>
                )
            }
            {
                isError && (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="text-lg text-center text-red-500">{error?.message}</div>
                    </div>
                )
            }
            {
                eventList?.length === 0 && (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="text-lg text-center text-eventr-gray-800">No events found</div>
                    </div>
                )
            }
            <div className="relative flex flex-col gap-3">
                {eventList?.map((eventItem) => (
                    <EventCard key={eventItem.id} event={eventItem} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default RouteComponent;