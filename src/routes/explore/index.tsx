import { createFileRoute } from '@tanstack/react-router';
import { Link } from "@tanstack/react-router";
import { categories } from "../../store/category";
import { SearchIcon } from "../../ui/icons";
import EventCard from '../../ui/event-card-wrapper';

export const Route = createFileRoute('/explore/')({
  component: RouteComponent,
})

function RouteComponent() {
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
            key={category.name} 
            to="/explore/$category" 
            params={{category: category.name}}
            search={{category: category.name}}
            className="h-10 flex items-center px-5 bg-eventr-gray-200/20 text-eventr-gray-50 outline-none rounded-xl"
          >
            {category.name}
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
            <div className="relative flex flex-col gap-3">
                {/* Example events can be added here or fetched dynamically */}
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </div>
    </div>
  )
}

export default RouteComponent;