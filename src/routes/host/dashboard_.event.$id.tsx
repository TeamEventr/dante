import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'
import { dummyEvent } from '@/lib/data'
import { AgeGroupChart, GenderRatioChart } from '@/ui/host-charts'
import { useState } from 'react'

export const Route = createFileRoute('/host/dashboard_/event/$id')({
  component: RouteComponent,
})

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#ff6666"];

interface Tier {
  id: number;
  name: string;
  price: number;
  seat_available: number;
  total_seat: number;
  booking_open_time: string;
  booking_close_time: string;
  booking_status: string;
}

interface ManageTiersProps {
  tiers: Tier[];
}

export function ManageTiers({ tiers }: ManageTiersProps) {
  const [tierData, setTierData] = useState(tiers);

  const totalRevenue = tierData.reduce((acc: number, tier: { price: number; total_seat: number; seat_available: number }) => acc + (tier.price * (tier.total_seat - tier.seat_available)), 0);
  const totalTicketsSold = tierData.reduce((acc: number, tier: { total_seat: number; seat_available: number }) => acc + (tier.total_seat - tier.seat_available), 0);
  const avgTicketPrice = totalTicketsSold > 0 ? totalRevenue / totalTicketsSold : 0;
  const allTiersOpen = tierData.every((tier: { booking_status: string }) => tier.booking_status === "open");

  const toggleTierStatus = (id: number) => {
    setTierData((prev) =>
      prev.map((tier) =>
        tier.id === id ? { ...tier, booking_status: tier.booking_status === "open" ? "closed" : "open" } : tier
      )
    );
  };

  const toggleAllTiers = () => {
    const newStatus = allTiersOpen ? "closed" : "open";
    setTierData((prev) => prev.map((tier) => ({ ...tier, booking_status: newStatus })));
  };

  return (
    <div className="flex flex-col gap-3 bg-eventr-gray-800 border border-eventr-gray-500 p-4 rounded-xl">
      <h1 className="text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500">Manage Tiers</h1>
      

      <div className="flex justify-between bg-eventr-gray-700 p-4 rounded-lg">
        <p>Enable Event Ticketing</p>
      </div>

      {/* Overall Summary */}
      <div className="flex justify-between bg-eventr-gray-700 p-4 rounded-lg">
        <p>Total Revenue: <span className="font-semibold">₹{totalRevenue}</span></p>
        <p>Avg Ticket Price: <span className="font-semibold">₹{avgTicketPrice.toFixed(2)}</span></p>
        <p>Total Tickets Sold: <span className="font-semibold">{totalTicketsSold}</span></p>

      </div>

      {/* Tier List */}
      {tierData.map((tier) => {
        const sold = tier.total_seat - tier.seat_available;
        const soldPercentage = (sold / tier.total_seat) * 100;
        const revenue = tier.price * sold;

        return (
          <div key={tier.id} className="flex flex-col gap-2 bg-eventr-gray-700 p-3 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="w-fit pr-2 font-semibold rounded bg-eventr-gray-500"><span className='bg-white text-black py-0.5 px-2 rounded'>{tier.name}</span> ₹{tier.price}</p>
                <p className="text-sm text-eventr-gray-100">Booking from {new Date(tier.booking_open_time).toLocaleDateString()}, open till {new Date(tier.booking_close_time).toLocaleDateString()}</p>
              </div>
              <button onClick={() => toggleTierStatus(tier.id)}>{tier.booking_status === "open" ? "disable" : "enable"} </button>
            </div>
            <p className='text-sm'>Tickets Sold:</p>
            <div className="flex -mt-3 items-center gap-2">
                
              <div className="w-full  h-3 bg-eventr-gray-500 rounded-full relative">
                <div style={{ width: `${soldPercentage}%` }} className="h-full bg-secondary rounded-full" />
              </div>
              <p className="w-12 text-right">{sold}/{tier.total_seat}</p>
            </div>

            <p><span className='text-sm'>Revenue: </span><b> ₹{revenue}.00 INR </b></p>
          </div>
        );
      })}
    </div>
  );
}

function RouteComponent() {


    const { male, female, ...ageGroups } = dummyEvent.statistics;
    
    const totalGender = male + female;
    const genderData = [
        { name: "Male", value: (male / totalGender) * 100, color: "#4A90E2" },
        { name: "Female", value: (female / totalGender) * 100, color: "#FF6B81" }
    ];

    const ageData = Object.entries(ageGroups).map(([key, value], index) => ({
        name: key,
        value,
        color: COLORS[index % COLORS.length]
    }));
  return <div>
    <div className='flex p-4 gap-3'>
        <section className='flex flex-col gap-3'>
            <img className='w-full aspect-[16/9] object-cover rounded-xl border border-eventr-gray-500' src={dummyEvent.event.cover_picture_url} alt={dummyEvent.event.title}/>
            <div className='flex flex-col gap-2 bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                <h1 className='text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500'>Description</h1>
                <p>
                    {dummyEvent.event.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                    {dummyEvent.event.tags.map((tag, index) => (
                        <span key={index} className='bg-eventr-gray-700 text-white py-1 px-3 rounded-lg'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </section>
        <section className='w-[500px] flex flex-col gap-3 flex-shrink-0'>
            <div className='flex gap-3 items-center bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                <div className='flex flex-col flex-grow'>
                    <h1 className='text-2xl font-semibold'>{dummyEvent.event.title}</h1>
                    <h3 className='flex text-eventr-gray-50 text-base'><Icon icon='location_on' size='18px'/>{dummyEvent.event.venue}</h3>
                </div>
                <div className='flex gap-2 h-10 px-3 items-center border-2 rounded-lg bg-green-900/50 border-green-600'>
                    <p className='text-xl font-semibold'>Live</p>
                    <div className='w-2 h-2 rounded-full bg-green-300 animate-pulse'/>
                </div>
            </div>
            <ManageTiers tiers ={dummyEvent.price_tiers}/>
            <div className='flex flex-col gap-2 bg-eventr-gray-800 border border-eventr-gray-500 p-4 rounded-xl'>
                <h1 className='text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500'>Analytics</h1>
                <div className='flex'>
                    <AgeGroupChart data={ageData} /> 
                    <div className='h-full w-[1px] bg-eventr-gray-500 flex-shrink-0'/>
                    <GenderRatioChart data={genderData}/>
                </div>
            </div>
        </section>
    </div>    
</div>
}
