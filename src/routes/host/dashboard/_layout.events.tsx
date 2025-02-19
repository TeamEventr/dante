import { createFileRoute } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/host/dashboard/_layout/events')({
  component: RouteComponent,
})

function EventCard() {
  return (
    <div className="relative flex bg-eventr-gray w-full h-32 rounded-md bg-eventr-gray-800 border border-eventr-gray-500 text-white">
      <div className="relative aspect-[16/9] h-full rounded-l-md bg-zinc-600"></div>
      <div className="w-full flex gap-3 items-center">
        <div className="flex-grow p-2">
          <h3 className="font-bold text-lg">
            Event Name Really long and informative
          </h3>
          <p className="text-sm">Blah blah square, Blah City</p>
        </div>
        <p className="w-24">Finished</p>
        <p className="w-28">Nov 11, 2024</p>
        <p className="w-20">NA</p>
        <p className="w-24">24,500Rs</p>

        <Link to={'/host/dashboard/events'} className="flex items-center w-12">
          <Icon icon="settings" />
        </Link>
      </div>
    </div>
  )
}

function RouteComponent() {
  return (
    <div>
      <div id="all events" className="flex flex-col gap-1.5">
        <div className="flex justify-between items-center py-1">
          <h2 className="text-xl font-semibold">Your Events</h2>
          <div className="flex flex-shrink-0 border bg-eventr-gray-800 rounded-lg border-eventr-gray-500 items-center">
            <button className="bg-white text-black py-2 px-3 border-r border-eventr-gray-500 rounded-l-lg">
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
          <p className="w-24">Status</p>
          <p className="w-28">Start Date</p>
          <p className="w-20">Ticketing</p>
          <p className="w-24">Revenue</p>
          <p className="w-12"></p>
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
