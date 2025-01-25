import { createFileRoute } from "@tanstack/react-router";
import { categories, Event } from "../../store/category";

export const Route = createFileRoute("/explore/$category")({
  validateSearch: (search: Record<string, unknown>) => {
    return { category: search.category as string }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useSearch();

  const selectedCategory = categories.find((c) => c.name === category);

  return (
    <div className="flex flex-col p-4 gap-4">
      {selectedCategory ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{category} Events</h1>
          {selectedCategory.events.length > 0 ? (
            selectedCategory.events.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="text-eventr-gray-100">No events found in {category}</p>
          )}
        </>
      ) : (
        <p className="text-eventr-gray-100">Category not found</p>
      )}
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="relative flex flex-col rounded-xl w-full bg-eventr-gray-200/20">
      <img 
            src="/concert.jpg" 
            alt="event" 
            className="w-full z-0 aspect-[16/9] rounded-t-xl object-cover" 
          />
      <div className="flex p-2">
        <div className="flex justify-center px-1.5 rounded-xl flex-col items-center bg-eventr-gray-900/20">
          <p className="text-sm">
            {new Date(event.date).toLocaleString("en", { month: "short" })}
          </p>
          <h2 className="text-3xl -mt-2 font-bold text-secondary">
            {new Date(event.date).getDate()}
          </h2>
        </div>
        <div className="p-2">
          <h2 className="text-xl font-bold">{event.title}</h2>
          <p className="text-eventr-gray-100 flex items-center">
            <b>{event.price}</b>
            <div className="border-r mx-2 h-4 border-eventr-gray-200" />
            {event.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RouteComponent;