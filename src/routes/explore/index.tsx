import { createFileRoute } from '@tanstack/react-router';
import { Link } from "@tanstack/react-router";
import { categories } from "../../store/category";
import { SearchIcon } from "../../ui/icons";
import AnimatedCategories from "../../components/Categories";

export const Route = createFileRoute('/explore/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    
    <div className="flex flex-col p-4 gap-4">
        <div className="mb-4">
                <AnimatedCategories page="event" />
            </div>
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
      <div className="relative flex flex-col gap-4">
        {/* Example events can be added here or fetched dynamically */}
        <div className="relative flex flex-col rounded-xl w-full bg-eventr-gray-200/20">
          <img 
            src="/concert.jpg" 
            alt="event" 
            className="w-full z-0 aspect-[16/9] rounded-t-xl object-cover" 
          />
          <div className="flex p-2">
            <div className="flex justify-center px-1.5 rounded-xl flex-col items-center bg-eventr-gray-900/20">
              <p className="text-sm">NOV</p>
              <h2 className="text-3xl -mt-2 font-bold text-secondary">28</h2>
            </div>
            <div className="p-2">
              <h2 className="text-xl font-bold">Big Brown Fox Jumps</h2>
              <p className="text-eventr-gray-100 flex items-center">
                <b>₹499</b>
                <div className="border-r mx-2 h-4 border-eventr-gray-200"/>
                Really Long concert location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RouteComponent;