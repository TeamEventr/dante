import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import Icon from '@/ui/icon-wrapper'
import { categories, dummyEvent } from '@/lib/data'
import { AgeGroupChart, GenderRatioChart } from '@/ui/host-charts'
import { useState } from 'react'
import { Input, Select, Textarea } from '@/ui/input-wrapper'
import { SearchIcon } from '@/ui/icons'

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
              <button className={`font-semibold w-16 active:scale-95 duration-200 py-1 rounded-lg ${tier.booking_status === "open" ? 'bg-red-600' : 'bg-green-600' }`} onClick={() => toggleTierStatus(tier.id)}>{tier.booking_status === "open" ? "block" : "enable"} </button>
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
        <div className='flex flex-col md:flex-row p-4 gap-3'>
        <section className='flex flex-col gap-3'>
            <div className='flex md:hidden gap-3 items-center bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                <div className='flex flex-col flex-grow'>
                    <h1 className='text-2xl font-semibold'>{dummyEvent.event.title}</h1>
                    <h3 className='flex text-eventr-gray-50 text-base'><Icon icon='location_on' size='18px'/>{dummyEvent.event.venue}</h3>
                </div>
                <div className='flex gap-2 h-10 px-3 items-center border-2 rounded-lg bg-green-900/50 border-green-600'>
                    <p className='text-xl font-semibold'>Live</p>
                    <div className='w-2 h-2 rounded-full bg-green-300 animate-pulse'/>
                </div>
            </div>
            <img className='w-full aspect-[16/9] object-cover rounded-xl border border-eventr-gray-500' src={dummyEvent.event.cover_picture_url} alt={dummyEvent.event.title}/>
            <div className='flex flex-col gap-2 bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                <h1 className='text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500'>Description</h1>
                <p className='pb-2 border-b border-eventr-gray-500'>
                    {dummyEvent.event.description}
                </p>
                <div className='flex flex-wrap gap-2 w-full justify-end'>
                    <span className='border border-eventr-gray-500 text-black bg-secondary font-semibold py-1 px-3 rounded-lg'>{dummyEvent.event.category}</span>
                    {dummyEvent.event.tags.map((tag, index) => (
                        <span key={index} className='bg-eventr-gray-700 border border-eventr-gray-500 text-white py-1 px-3 rounded-lg'>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                
                <div className='px-2 pb-2 flex items-center justify-between w-full border-b border-eventr-gray-500'>
                    <h1 className='text-xl font-semibold'>Edit Event Metadata</h1>
                    <div className='flex gap-2'>
                        <button className='bg-green-600 active:scale-95 duration-200 border border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Save</button>
                        <button className='bg-eventr-gray-700 border active:scale-95 duration-200 border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Cancel</button>
                    </div>
                </div>

                <Input type="text" responsive label="Event Name" name="title" value={dummyEvent.event.title} width="w-full" />
                <Input type="text" responsive label="Location" name="venue" value={dummyEvent.event.venue}  width="w-full" />
                <div className="flex flex-col md:flex-row gap-4 w-full">
                    <Select label="Event Category" responsive name="category" value={dummyEvent.event.category} options={categories} width="w-44" />
                    <div className="relative flex flex-col w-full">
                        <label htmlFor="tags" className="text-eventr-gray-100 text-md md:text-lg" >Tags </label>
                    <div className="relative w-full md:w-[508px] lg:w-[592px] flex h-10 items-center px-1.5 md:px-2.5 gap-1 bg-eventr-gray-800 border border-eventr-gray-700 rounded-md overflow-x-scroll hide-scrollbar">
                        {dummyEvent.event.tags.map((tag, index) => (
                        <span key={index}  className="bg-eventr-gray-500 text-sm md:text-md whitespace-nowrap py-0.5 px-1.5 rounded-md flex items-center gap-1">
                            {tag}
                            {/* <button onClick={() => handleRemoveTag(index)}>
                                <Icon icon="close" size="12px" />
                            </button> */}
                        </span>
                        ))}
                        {/* <input className="py-1.5 bg-transparent outline-none flex-grow"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={metadata.tags.length >= 5}
                        placeholder={
                            metadata.tags.length >= 5 ? 'Max 5 tags allowed' : ''
                        }
                        /> */}
                    </div>
                    </div>
                </div>
                <Textarea className="px-1.5 md:px-2.5" name="description" label="Description" value={dummyEvent.event.description} width="w-full"height="h-32" />
            </div>

            <div className="flex flex-col gap-4 bg-eventr-gray-800 border border-eventr-gray-500 rounded-lg p-4">
                <div className='px-2 pb-2 flex items-center justify-between w-full border-b border-eventr-gray-500'>
                    <h1 className='text-xl font-semibold'>Manage performers</h1>
                    <div className='flex gap-2'>
                        <button className='bg-green-600 active:scale-95 duration-200 border border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Save</button>
                        <button className='bg-eventr-gray-700 border active:scale-95 duration-200 border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Cancel</button>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center">
                    <Input responsive type="text" placeholder="Role" name='role' width="w-full"/>
                    <Input name='search' responsive type="text" placeholder="Enter performer's username" width="w-48 md:w-64"/>
                    
                    <button className="text-white flex items-center">
                        <Icon icon="search" size="24px" />
                    </button>
                </div>
                
                <div className='flex font-semibold text-lg'>
                    <h2 className='w-40 p-2'>Preview</h2>
                    <h2 className='p-2'>Your Performers</h2>
                </div>
                {/* Added performers section */}
                <div className='flex gap-4 -mt-2'>
                    <div className='flex flex-col items-center border border-dashed h-64 w-36 border-eventr-gray-500 p-2 rounded-lg'>
                    
                        <div className="flex flex-col gap-1 items-center justify-center bg-eventr-gray-800 p-2 rounded-lg">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-28 h-28 rounded-full" />
                            <div className='text-center'>
                                <p className="text-white text-lg">fullName</p>
                                <p className="text-eventr-gray-100 text-sm">username</p>
                                <p className="text-eventr-gray-100 text-sm">DJ</p>   
                            </div>
                            <button className="w-full  mt-2 text-sm border-t border-eventr-gray-500">
                                Add
                            </button>
                        </div> 
                    </div>
                    <div className="border flex gap-4 items-center border-dashed border-eventr-gray-500 rounded-md p-2 overflow-y-auto flex-grow">
                        {dummyEvent.event.performers.map((performer, index) => (
                            <div key={index}  className="flex h-min flex-col items-center gap-1 justify-center rounded-lg bg-eventr-gray-800 p-2" >
                                <img src={performer.profilePicture} alt="Profile" className="w-28 h-28 rounded-full" />
                                <div className='text-center'>
                                    <p className="text-white text-lg">{performer.fullName}</p>
                                    <p className="text-eventr-gray-100 text-sm">@{performer.username}</p>
                                    <p className="text-eventr-gray-100 text-sm">{performer.role}</p>
                                </div>
                                <button  className="w-full mt-2 text-red-600 text-sm border-t border-eventr-gray-500">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
        <section className='w-full md:w-[500px] flex flex-col gap-3 flex-shrink-0'>
            <div className='hidden md:flex gap-3 items-center bg-eventr-gray-800 border border-eventr-gray-500 rounded-xl p-4'>
                <div className='flex flex-col flex-grow'>
                    <h1 className='text-2xl font-semibold'>{dummyEvent.event.title}</h1>
                    <h3 className='flex text-eventr-gray-50 text-base'><Icon icon='location_on' size='18px'/>{dummyEvent.event.venue}</h3>
                </div>
                <div className='flex gap-2 h-10 px-3 items-center border-2 rounded-lg bg-green-900/50 border-green-600'>
                    <p className='text-xl font-semibold'>Live</p>
                    <div className='w-2 h-2 rounded-full bg-green-300 animate-pulse'/>
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-eventr-gray-800 border border-eventr-gray-500 p-4 rounded-xl'>
                <h1 className='text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500'>Analytics</h1>
                <div className='flex flex-col md:flex-row'>
                    <AgeGroupChart data={ageData} /> 
                    <div className='h-full w-[1px] bg-eventr-gray-500 flex-shrink-0'/>
                    <GenderRatioChart data={genderData}/>
                </div>
            </div>
            <ManageTiers tiers ={dummyEvent.price_tiers}/>
            <div className='flex flex-col gap-3 bg-eventr-gray-800 border border-eventr-gray-500 p-4 rounded-xl'>
                <h1 className='text-xl font-semibold pl-2 pb-2 w-full border-b border-eventr-gray-500'>Manage Staff</h1>
                <h2 className='text-lg font-semibold'>Add Staff</h2>
                <div>
                    <label className='text-eventr-gray-100'>Search staff by username:</label>
                    <div className='flex gap-2 mt-1'>
                        <input type="text" className="px-2 py-1 w-full bg-eventr-gray-700 rounded-md border border-eventr-gray-500 outline-none"/>
                        <button className='bg-eventr-gray-700 active:scale-95 duration-200 border border-eventr-gray-500 p-1 rounded-lg'><SearchIcon/></button>
                    </div>
                </div>
                <div className='p-2 h-20 w-full border border-dashed border-eventr-gray-500 rounded-lg'>
                    <div className='flex justify-between items-center bg-eventr-gray-700 p-2 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                            <div>
                                <h3 className='font-semibold'>John Doe</h3>
                                <p className='text-sm'>@johndoe</p>
                            </div>
                        </div>
                        <button className='bg-green-600 active:scale-95 duration-200 border border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Add</button>
                    </div>
                </div>
                <h2 className='text-lg font-semibold'>Current Staff</h2>
                <div className='flex flex-col gap-2 p-2 border border-dashed border-eventr-gray-500 rounded-lg'>
                    <div className='flex justify-between items-center bg-eventr-gray-700 p-2 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                            <div>
                                <h3 className='font-semibold'>John Doe</h3>
                                <p className='text-sm'>@johndoe</p>
                            </div>
                        </div>
                        <button className='bg-red-800/50 active:scale-95 duration-200 border border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Remove</button>
                    </div>
                    <div className='flex justify-between items-center bg-eventr-gray-700 p-2 rounded-lg'>
                        <div className='flex items-center gap-2'>
                            <img className='w-12 h-12 rounded-full' src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                            <div>
                                <h3 className='font-semibold'>John Doe</h3>
                                <p className='text-sm'>@johndoe</p>
                            </div>
                        </div>
                        <button className='bg-red-800/50 active:scale-95 duration-200 border border-eventr-gray-500 font-semibold py-1 px-3 rounded-lg'>Remove</button>
                    </div>
                </div>
            </div>
            
        </section>
    </div>    
</div>
}
