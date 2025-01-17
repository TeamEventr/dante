import { categories } from "../lib/Categories";
import { SearchIcon } from "../ui/icons";

export default function Explore() {
    return (
        <div className="flex flex-col p-4 gap-4">
            <div className="relative flex items-center gap-2">
                <input placeholder="Search events.." className="bg-eventr-gray-200/20 text-lg text-eventr-gray-50 outline-none pl-10 p-2 rounded-full w-full h-[56px]"/>
                <button className="absolute left-2.5"><SearchIcon /></button>
            </div>
            <div className="flex gap-2 overflow-scroll">
                {categories.map((category, index) => (
                    <a key={index} href={`/explore/${category}`} className="h-10 flex items-center px-5 bg-eventr-gray-200/20 text-eventr-gray-50 outline-none rounded-xl">
                        {category}
                    </a>
                ))}
            </div>
        </div>
    )
}