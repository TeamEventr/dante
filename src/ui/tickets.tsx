import { useState } from 'react'
import Icon from './icon-wrapper'

export default function BookTicket() {
    // Sample event time slots
    const eventDays = [
        { date: '3/3/25', slots: ['8 AM', '2 PM'] },
        { date: '4/3/25', slots: ['8 AM', '2 PM'] }
    ]

    // Sample ticket tiers
    const ticketTiers = [
        { name: 'General', price: 50 },
        { name: 'VIP', price: 100 },
        { name: 'Super Pass', price: 200 }
    ]

    const [selectedDay, setSelectedDay] = useState<string | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [selectedTier, setSelectedTier] = useState<string | null>(null)
    const [ticketCount, setTicketCount] = useState<number>(1)

    const handleQuantityChange = (change: number) => {
        setTicketCount((prev) => Math.max(1, prev + change)) // Ensure minimum 1 ticket
    }

    const totalPrice = selectedTier
        ? ticketCount * (ticketTiers.find(t => t.name === selectedTier)?.price || 0)
        : 0

    return (
        <div className='fixed top-0 w-full h-svh p-2 z-50 bg-black/20'>
            <div className="absolute w-[380px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl flex items-center p-8 h-max rounded-lg bg-white text-black flex-col gap-6">        
                <button className='absolute top-4 right-4'><Icon icon='close' /></button>
                <div>
                    <h1 className='text-2xl font-semibold w-full text-center'>Book your Tickets</h1>
                    <p className='text-sm text-eventr-gray-300 mt-4'>Eventr is not responsible for blah blah. Lorem Impsum 
                    is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    </p>
                </div>
                {/* Time Slot Selection */}
                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Select Time Slot</h2>
                    <div className="flex gap-2 flex-wrap">
                        {eventDays.flatMap(({ date, slots }) =>
                            slots.map((slot) => {
                                const formattedDate = new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })
                                const dateTimeLabel = `${formattedDate}, ${slot}`

                                return (
                                    <button
                                        key={dateTimeLabel}
                                        className={`p-2 border-2 rounded-lg ${
                                            selectedTime === dateTimeLabel ? 'bg-gradient-to-r from-amber-400 to-secondary text-black font-semibold' : 'border-gray-200'
                                        }`}
                                        onClick={() => {
                                            setSelectedDay(date)
                                            setSelectedTime(dateTimeLabel)
                                        }}
                                    >
                                        {dateTimeLabel}
                                    </button>
                                )
                            })
                        )}
                    </div>
                </div>


                {/* Ticket Selection */}
                <div className="w-full flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Select Tickets</h2>
                    <div className="flex items-center gap-4">
                        {/* Dropdown for Ticket Class */}
                        <select
                            className="p-2 border border-eventr-gray-100 rounded-md bg-white"
                            value={selectedTier || ''}
                            onChange={(e) => setSelectedTier(e.target.value)}
                        >
                            <option value="" disabled>Select Tier</option>
                            {ticketTiers.map(({ name, price }) => (
                                <option key={name} value={name}>
                                    {name} - ₹{price}
                                </option>
                            ))}
                        </select>

                        {/* Ticket Quantity Selector */}
                        <div className="flex items-center gap-2">
                            <button className="p-1 rounded-full border border-eventr-gray-200" onClick={() => handleQuantityChange(-1)}>
                                <Icon icon='remove' size='16px' />
                            </button>
                            <span className="font-medium w-20 text-center">{ticketCount} Adult(s)</span>
                            <button className="p-1 rounded-full border border-eventr-gray-200" onClick={() => handleQuantityChange(1)}>
                                <Icon icon='add' size='16px' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-4">
                    <p className="w-full text-right"><span className='font-semibold text-lg'>Total: ₹{totalPrice}</span> <span className='text-xs text-eventr-gray-300'>(Incl. of taxes)</span></p>
                    <button className="bg-eventr-gray-800 active:scale-95 duration-200 text-white py-2 px-4 rounded-md">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}