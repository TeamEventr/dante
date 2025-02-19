import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'


export const Route = createFileRoute('/host/dashboard_/event/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
<div className="relative w-full flex flex-col gap-2 bg-eventr-gray rounded-md">
    <div className="relative w-full aspect-w-7 aspect-h-3 bg-zinc-600 rounded-md">
    </div>
    <div className="p-4 flex flex-col">
      <div className="flex w-full gap-2.5">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-bold">Event Name Really long and informative</h2>
          <div className="flex items-center gap-1"><Icon icon='location_on' size="18px"/> Blah blah square, Blah City</div>
        </div>
        <button className="flex items-center gap-1 font-bold text-lg px-4 h-10 rounded-md border border-zinc-700"><Icon icon="edit" size="18px"/> Edit Details</button>
        <button className="flex items-center gap-1 font-bold text-lg px-4 h-10 rounded-md border border-zinc-700"><Icon icon="settings" size="18px"/> Manage</button>
        <button className="flex items-center gap-1 font-bold text-lg px-4 h-10 rounded-md bg-eventr-main"><Icon icon="analytics" size="18px"/> View Analytics</button>
      </div>
      <div className="flex items-center gap-2.5 text-sm mt-2">
        <p className="px-2 py-0.5 rounded-md bg-amber-600">Comedy</p>
        <p className="px-2 py-0.5 rounded-md bg-eventr-main">18+</p>
        <p className="px-2 py-0.5 rounded-md border text-zinc-300 border-zinc-700">Tag 1</p>
        <p className="px-2 py-0.5 rounded-md border text-zinc-300 border-zinc-700">Tag 2</p>
        <p className="px-2 py-0.5 rounded-md border text-zinc-300 border-zinc-700">Tag 3</p>
      </div>

      <div className="w-full h-[1px] bg-zinc-700 my-3"/>
      <div className="flex gap-4">
        
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">About:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
          justo nec justo facilisis fermentum. Curabitur et justo eget justo
          facilisis fermentum. Curabitur et justo eget justo facilisis
          fermentum. Curabitur et justo eget justo facilisis fermentum.
          </p>
          <h2 className="font-bold text-lg">Instructions:</h2>
          <ul className="list-disc translate-x-4">
            <li>Wear a mask</li>
            <li>Carry your ID</li>
            <li>Carry your ticket</li>
          </ul>
          <h2 className="font-bold text-lg">Performers:</h2>
          <div className="border border-zinc-600 min-w-36 w-fit h-48 rounded-md">
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2 h-fit bg-zinc-600 p-4 rounded-md w-80 flex-shrink-0">
            <li className="flex items-center gap-2"><Icon icon='confirmation_number' size="18px"/>Tickets from ₹300</li>
            <li className="flex items-center gap-2"><Icon icon='event' size="18px"/>21st Dec, 9:00 AM onwards</li>
            <li className="flex items-center gap-2"><Icon icon='schedule' size="18px"/>4 Hours</li>
            <li className="flex items-center gap-2"><Icon icon='stadium' size="18px"/>1200 attendees</li>
          </ul>
          <div className="bg-zinc-700 h-[1px] mt-1"/>
          <div className="w-80">
            <h2 className="text-lg font-bold mb-2">
              About the host:
            </h2>
            <div className="flex gap-2">
              <div className="h-24 w-24 flex-shrink-0 bg-zinc-600 rounded-full"></div>
              <div>
                <h3>Host Name</h3>
                <h4 className="text-zinc-300 text-sm -translate-y-1">Company Name</h4>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</div>
}
