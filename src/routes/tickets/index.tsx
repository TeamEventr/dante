import { createFileRoute } from '@tanstack/react-router'
import Icon from "../../ui/icon-wrapper";

export const Route = createFileRoute('/tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
      return (
        <div className="p-2 pt-4">
          <h1 className="mb-4 text-2xl font-semibold">Your Tickets</h1>
          <div className="flex flex-row mb:flex-col gap-3 md:gap-6 items-center">
            
            {/* This is the individual ticket. use map */}
            <div className="ticket flex h-32 rounded-lg gap-1 relative text-eventr-gray-900">
                <div className="relative w-[136px] flex aspect-1 pr-1">
                    <img
                    src={"dummyqr.png"}
                    className="h-full rounded-lg aspect-1 bg-slate-500"
                    />
                    <p className="absolute right-0 top-1/2 transform translate-y-1/2 -rotate-90 text-xs font-bold w-2">
                        DB124S
                    </p>
                </div>
                <div className="my-4 border-r-2 px-1 border-eventr-gray-500 border-dashed"/>
                <div className="w-56 p-2 bg-gradient-to-br bg-white text-black rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                        <p className="font-gothic tracking-widest text-base">EVENTR</p>
                        <p className="font-semibold text-xs bg-black text-secondary px-2 py-0.5 rounded-md">General</p>
                    </div>
                    <p className="text-lg font-semibold truncate">
                        Long Event Name Goes Here
                    </p>
                    <p className="text-xs truncate text-eventr-gray-500">
                        Really long event location goes here
                    </p>
                    <div className="border-t font-semibold flex justify-between gap-2 text-sm border-eventr-gray-200 mt-2 pt-1">
                        <p>8:00</p>
                        <p>3rd Feb 2025</p>
                        <p className="flex items-end gap-0.5">2 <Icon icon="person" size="20px"/></p>
                    </div>
                </div>
            </div>
    
            {/* This is the individual ticket. use map */}
            <div className="ticket flex h-32 rounded-lg gap-1 relative text-eventr-gray-900">
                <div className="relative w-[136px] flex aspect-1 pr-1">
                    <img
                    src={"dummyqr.png"}
                    className="h-full rounded-lg aspect-1 bg-slate-500"
                    />
                    <p className="absolute right-0 top-1/2 transform translate-y-1/2 -rotate-90 text-xs font-bold w-2">
                        DB124S
                    </p>
                </div>
                <div className="my-4 border-r-2 px-1 border-eventr-gray-500 border-dashed"/>
                <div className="w-56 p-2 bg-gradient-to-br bg-white text-black rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                        <p className="font-gothic tracking-widest text-base">EVENTR</p>
                        <p className="font-semibold text-xs bg-black text-secondary px-2 py-0.5 rounded-md">General</p>
                    </div>
                    <p className="text-lg font-semibold truncate">
                        Long Event Name Goes Here
                    </p>
                    <p className="text-xs truncate text-eventr-gray-500">
                        Really long event location goes here
                    </p>
                    <div className="border-t font-semibold flex justify-between gap-2 text-sm border-eventr-gray-200 mt-2 pt-1">
                        <p>8:00</p>
                        <p>3rd Feb 2025</p>
                        <p className="flex items-end gap-0.5">2 <Icon icon="person" size="20px"/></p>
                    </div>
                </div>
            </div>

            {/* This is the individual ticket. use map */}
            <div className="ticket flex h-32 rounded-lg gap-1 relative filter brightness-50 text-eventr-gray-900">
                <div className="relative w-[136px] flex aspect-1 pr-1">
                    <img
                    src={"dummyqr.png"}
                    className="h-full rounded-lg aspect-1 bg-slate-500"
                    />
                    <p className="absolute right-0 top-1/2 transform translate-y-1/2 -rotate-90 text-xs font-bold w-2">
                        DB124S
                    </p>
                </div>
                <div className="my-4 border-r-2 px-1 border-eventr-gray-500 border-dashed"/>
                <div className="w-56 p-2 bg-gradient-to-br bg-white text-black rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                        <p className="font-gothic tracking-widest text-base">EVENTR</p>
                        <p className="font-semibold text-xs bg-black text-secondary px-2 py-0.5 rounded-md">General</p>
                    </div>
                    <p className="text-lg font-semibold truncate">
                        Long Event Name Goes Here
                    </p>
                    <p className="text-xs truncate text-eventr-gray-500">
                        Really long event location goes here
                    </p>
                    <div className="border-t font-semibold flex justify-between gap-2 text-sm border-eventr-gray-200 mt-2 pt-1">
                        <p>8:00</p>
                        <p>3rd Feb 2025</p>
                        <p className="flex items-end gap-0.5">2 <Icon icon="person" size="20px"/></p>
                    </div>
                </div>
            </div>
    
          </div>
        </div>
      );
    }
    
