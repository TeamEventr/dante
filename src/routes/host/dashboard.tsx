import { createFileRoute } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard')({
  component: RouteComponent,
})

function EventCard() {
  return (
    <div className="relative flex bg-eventr-gray w-full h-24 md:h-32 rounded-md bg-eventr-gray-800 border border-eventr-gray-500 text-white">
      <div className="relative aspect-[16/9] h-full rounded-l-md bg-zinc-600"></div>
      <div className="w-full flex gap-3 items-center">
        <div className="flex-grow p-2">
          <h3 className="font-bold text-sm md:text-lg">
            Event Name Really long and informative
          </h3>
          <p className="text-xs md:text-sm">Blah blah square, Blah City</p>
        </div>
        <p className="w-24 hidden md:block">Finished</p>
        <p className="w-28 hidden md:block">Nov 11, 2024</p>
        <p className="w-20 hidden md:block">NA</p>
        <p className="w-24 hidden md:block">24,500Rs</p>

        <Link
          to={`/host/dashboard/event/$id`}
          params={{ id: '123' }}
          className="flex items-center w-12 pr-2 md:pr-0"
        >
          <Icon icon="settings" />
        </Link>
      </div>
    </div>
  )
}

function Events() {
  return (
    <div>
      <div id="all events" className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center py-1">
          <h2 className="text-xl font-semibold">Your Events</h2>
          <div className="flex flex-shrink-0 border text-xs md:text-base bg-eventr-gray-800 rounded-lg border-eventr-gray-500 items-center">
            <button className="bg-white text-black font-bold py-2 px-3 border-r border-eventr-gray-500 rounded-l-lg">
              All
            </button>
            <button className="py-2 px-3 border-r border-eventr-gray-500">
              Drafts
            </button>
            <button className="py-2 px-3 border-r border-eventr-gray-500">
              Ongoing
            </button>
            <button className="py-2 px-3 rounded-r-lg">Past</button>
          </div>
        </div>
        <div className="flex gap-3 text-eventr-gray-200 pt-2">
          <p className="flex-grow">Event</p>
          <p className="w-24 hidden md:block">Status</p>
          <p className="w-28 hidden md:block">Start Date</p>
          <p className="w-20 hidden md:block">Ticketing</p>
          <p className="w-24 hidden md:block">Revenue</p>
          <p className="w-12 hidden md:block"></p>
        </div>
        <div className="flex flex-col gap-3">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  )
}

function RouteComponent() {
  return (
    <div className="px-4 py-2">
      <Events />
    </div>
  )
}
