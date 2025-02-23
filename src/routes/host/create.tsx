'use client'

import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Icon from '../../../src/ui/icon-wrapper'
import { Input, Textarea, Select } from '../../../src/ui/input-wrapper'
import { useEventStore } from '../../utils/Store'

const categories = [
  'Music',
  'Sports',
  'Arts',
  'Food',
  'Technology',
  'Business',
  'Other',
]

function ProgressNav() {
  const { step, setStep } = useEventStore()
  return (
    <nav className="flex w-full -translate-y-12 items-center justify-center px-8 py-4">
      <div className="flex flex-wrap justify-center items-center md:gap-2 text-lg">
        <button className="flex-shrink-0" onClick={() => setStep(1)}>
          Event Details
        </button>
        <Icon
          className={`flex-shrink-0 ${step > 1 ? '' : 'text-zinc-400'}`}
          icon="chevron_right"
        />
        <button
          onClick={() => setStep(2)}
          className={`flex-shrink-0 ${step > 1 ? '' : 'text-zinc-400'}`}
        >
          Ticket Details
        </button>
        <Icon
          className={`flex-shrink-0 ${step > 2 ? '' : 'text-zinc-400'}`}
          icon="chevron_right"
        />
        {/* <button
          onClick={() => setStep(3)}
          className={`flex-shrink-0 ${step > 2 ? '' : 'text-zinc-400'}`}
        >
          Performers
        </button>
        <Icon
          className={`flex-shrink-0 ${step > 3 ? '' : 'text-zinc-400'}`}
          icon="chevron_right"
        />
        <button
          onClick={() => setStep(4)}
          className={`flex-shrink-0 ${step > 3 ? '' : 'text-zinc-400'}`}
        >
          Confirmation
        </button>
        <Icon
          className={`flex-shrink-0 ${step > 4 ? '' : 'text-zinc-400'}`}
          icon="chevron_right"
        />
        <button
          onClick={() => setStep(5)}
          className={`flex-shrink-0 ${step > 4 ? '' : 'text-zinc-400'}`}
        >
          Images
        </button> */}
      </div>
    </nav>
  )
}

function MetadataSection() {
  const { metadata, updateMetadata } = useEventStore()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    updateMetadata({ [e.target.name]: e.target.value })
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ',' && inputValue.trim() !== '') {
      e.preventDefault()
      if (metadata.tags.length < 5) {
        updateMetadata({
          tags: [...metadata.tags, inputValue.trim()],
        })
        setInputValue('')
      }
    }
  }

  const handleRemoveTag = (index: number) => {
    updateMetadata({
      tags: metadata.tags.filter((_, i) => i !== index),
    })
  }

  return (
    <div className="flex flex-col gap-3 md:gap-4 flex-grow">
      <Input
        type="text"
        responsive
        label="Event Name"
        name="title"
        value={metadata.title}
        onChange={handleInputChange}
        width="w-full"
        subtext="A name that gets on everyone's mind. Can be upto 128 characters long. A-Z, a-z, 0-9, _, ! and . only"
      />
      <Input
        type="text"
        responsive
        label="Location"
        name="venue"
        value={metadata.venue}
        onChange={handleInputChange}
        width="w-full"
      />
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Select
          label="Event Type"
          responsive
          name="category"
          value={metadata.category}
          options={categories}
          onChange={handleInputChange}
          width="w-44"
        />
        <div className="relative flex flex-col w-full">
          <label
            htmlFor="tags"
            className="text-eventr-gray-100 text-md md:text-lg"
          >
            Tags
          </label>
          <div className="relative w-full md:w-[508px] lg:w-[592px] flex h-10 items-center px-1.5 md:px-2.5 gap-1 bg-eventr-gray-800 border border-eventr-gray-700 rounded-md overflow-x-scroll hide-scrollbar">
            {metadata.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-eventr-gray-500 text-sm md:text-md whitespace-nowrap py-0.5 px-1.5 rounded-md flex items-center gap-1"
              >
                {tag}
                <button onClick={() => handleRemoveTag(index)}>
                  <Icon icon="close" size="12px" />
                </button>
              </span>
            ))}
            <input
              className="py-1.5 bg-transparent outline-none flex-grow"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={metadata.tags.length >= 5}
              placeholder={
                metadata.tags.length >= 5 ? 'Max 5 tags allowed' : ''
              }
            />
          </div>
          <p className="text-sm text-zinc-400">
            Add upto 5 tags to describe your event. Use commas to separate tags.
          </p>
        </div>
      </div>
      <Textarea
        className="px-1.5 md:px-2.5"
        name="description"
        label="Description"
        value={metadata.description}
        onChange={handleInputChange}
        width="w-full"
        height="h-32"
      />
    </div>
  )
}

function TicketSection() {
  const {
    metadata,
    updateMetadata,
    eventDuration,
    setEventDuration,
    ticketInput,
    setTicketInput,
  } = useEventStore()

  const handleDurationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    if (name === 'value') {
      setEventDuration(value, eventDuration.unit)
    } else {
      setEventDuration(eventDuration.value, value)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    if (name === 'bookingOpenDate' || name === 'bookingOpenTime') {
      updateMetadata({
        bookingOpenTime: {
          ...metadata.bookingOpenTime,
          [name === 'bookingOpenDate' ? 'date' : 'time']: value,
        },
      })
      return
    }
    if (name === 'bookingCloseDate' || name === 'bookingCloseTime') {
      updateMetadata({
        bookingCloseTime: {
          ...metadata.bookingCloseTime,
          [name === 'bookingCloseDate' ? 'date' : 'time']: value,
        },
      })
      return
    }
    updateMetadata({ [name]: value })
  }

  const handleTierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'date' || name === 'time') {
      setTicketInput({
        start: {
          ...ticketInput.start,
          [name]: value,
        },
      })
      return
    }

    if (name === 'name') {
      const existingTier = metadata.priceTiers.find(
        (tier) => tier.name.toLowerCase() === value.toLowerCase(),
      )
      if (existingTier) {
        setTicketInput({
          name: value,
          price: existingTier.price,
          totalSeats: existingTier.totalSeats,
        })
        return
      }
    }

    setTicketInput({ [name]: value })
  }

  const addTicket = () => {
    if (
      ticketInput.start.date &&
      ticketInput.start.time &&
      ticketInput.name &&
      !isNaN(Number(ticketInput.price)) &&
      Number(ticketInput.price) > 0 &&
      !isNaN(Number(ticketInput.totalSeats)) &&
      Number(ticketInput.totalSeats) > 0
    ) {
      const newTicket = {
        name: ticketInput.name,
        timeSlot: new Date(
          `${ticketInput.start.date}T${ticketInput.start.time}`,
        ),
        totalSeats: ticketInput.totalSeats,
        price: ticketInput.price,
      }

      const updatedTickets = [...metadata.priceTiers, newTicket].sort(
        (a, b) => a.timeSlot.getTime() - b.timeSlot.getTime(),
      )

      updateMetadata({ priceTiers: updatedTickets })
      setTicketInput({ name: '', price: '', totalSeats: '' })
    }
  }

  const deleteTier = (timeSlot: Date, name: string) => {
    const tierTimeSlot = new Date(timeSlot)
    updateMetadata({
      priceTiers: metadata.priceTiers.filter(
        (tier) =>
          tier.timeSlot.toISOString() !== tierTimeSlot.toISOString() ||
          tier.name !== name,
      ),
    })
  }

  const groupedTiers = metadata.priceTiers.reduce(
    (acc: { [key: string]: typeof metadata.priceTiers }, tier) => {
      const key = tier.timeSlot.toISOString()
      if (!acc[key]) acc[key] = []
      acc[key].push(tier)
      return acc
    },
    {},
  )

  const calculateTotalTickets = () => {
    return metadata.priceTiers.reduce(
      (sum, tier) => sum + Number(tier.totalSeats),
      0,
    )
  }

  const calculateEventDates = () => {
    if (metadata.priceTiers.length === 0) return { startDate: '', endDate: '' }

    const dates = metadata.priceTiers
      .map((tier) => new Date(tier.timeSlot))
      .filter((date) => !isNaN(date.getTime()))
      .sort((a, b) => a.getTime() - b.getTime())

    if (dates.length === 0) return { startDate: '', endDate: '' }

    const startDate = dates[0]
    const endDate = new Date(dates[dates.length - 1])

    const durationValue = parseInt(eventDuration.value) || 0

    const addDuration = (unit: string, value: number) => {
      switch (unit) {
        case 'minutes':
          endDate.setMinutes(endDate.getMinutes() + value)
          break
        case 'hours':
          endDate.setHours(endDate.getHours() + value)
          break
        case 'days':
          endDate.setDate(endDate.getDate() + value)
          break
      }
    }

    if (['minutes', 'hours', 'days'].includes(eventDuration.unit)) {
      addDuration(eventDuration.unit, durationValue)
    }

    const formatOptions: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      hour12: true,
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }

    return {
      startDate: startDate.toLocaleString('en-US', formatOptions),
      endDate: eventDuration.value
        ? endDate.toLocaleString('en-US', formatOptions)
        : '',
    }
  }

  const { startDate, endDate } = calculateEventDates()

  return (
    <div className="flex flex-col gap-6 flex-grow">
      <div className="flex flex-wrap gap-4 w-full">
        <div className="flex flex-col">
          <label className="text-md md:text-lg text-eventr-gray-100">
            Event Duration
          </label>
          <div className="flex gap-2">
            <Input
              responsive
              type="number"
              name="value"
              value={eventDuration.value}
              onChange={handleDurationChange}
              width="w-12"
            />
            <Select
              responsive
              name="unit"
              value={eventDuration.unit}
              options={['minutes', 'hours', 'days']}
              onChange={handleDurationChange}
              width="w-[104px]"
            />
          </div>
        </div>
        <Select
          responsive
          label="Age Limit"
          name="ageLimit"
          value={metadata.ageLimit}
          options={['All', '13+', '18+', '21+']}
          onChange={handleInputChange}
          width="w-20"
        />

        <div>
          <label className="text-md md:text-lg text-eventr-gray-100">
            Event starts on
          </label>
          <div className="flex gap-2">
            <Input
              responsive
              type="date"
              name="bookingOpenDate"
              value={metadata.bookingOpenTime.date}
              onChange={handleInputChange}
              width="w-32 md:w-36"
            />
            <Input
              responsive
              type="time"
              name="bookingOpenTime"
              value={metadata.bookingOpenTime.time}
              onChange={handleInputChange}
              width="w-20 md:w-24"
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-eventr-gray-50 text-lg">Add Tickets</h2>
        <div className="flex flex-wrap md:flex-nowrap gap-2 w-full">
          <Input
            responsive
            type="date"
            name="date"
            value={ticketInput.start.date}
            onChange={handleTierChange}
            width="w-32 md:w-36"
          />
          <Input
            responsive
            type="time"
            name="time"
            value={ticketInput.start.time}
            onChange={handleTierChange}
            width="w-24 md:w-28"
          />
          <Input
            responsive
            type="text"
            name="name"
            value={ticketInput.name}
            onChange={handleTierChange}
            width="w-full"
            grow
            placeholder="Tier Name"
          />
          <Input
            responsive
            type="text"
            name="price"
            value={ticketInput.price}
            onChange={handleTierChange}
            width="w-28 md:w-24"
            placeholder="Tier Price"
          />
          <Input
            responsive
            type="text"
            name="totalSeats"
            value={ticketInput.totalSeats}
            onChange={handleTierChange}
            width="w-24"
            placeholder="Quantity"
          />
          <button onClick={addTicket} className="flex items-center text-white">
            <Icon icon="add" size="24px" />
          </button>
        </div>
        {/* Tickets grouped by datetime */}
        <div className="border flex flex-col border-dashed border-zinc-600 rounded-md h-36 md:h-56 my-3 overflow-y-auto p-2">
          {Object.keys(groupedTiers).map((datetime, index) => {
            const formattedDateTime = new Date(datetime).toLocaleString(
              'en-US',
              {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                hour12: true,
              },
            )

            return (
              <div
                key={index}
                className="mb-4 bg-eventr-gray-800 rounded-md px-2 py-1 flex items-center gap-4"
              >
                <p className="text-white text-sm md:text-base w-24 md:w-48 text-center">
                  {formattedDateTime}
                </p>
                <div className="h-full w-0.5 bg-eventr-gray-500 rounded-full" />
                <div className="flex flex-col w-full">
                  {groupedTiers[datetime].map((tier, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between w-full items-center text-white my-1"
                    >
                      <div className="flex flex-grow text-sm md:text-base gap-8">
                        <p className="w-12 md:w-24">{tier.name}</p>
                        <p className="w-8 md:w-16">₹{tier.price}</p>
                        <p className="w-16 md:w-32">
                          {tier.totalSeats} tickets
                        </p>
                      </div>
                      <button
                        onClick={() => deleteTier(tier.timeSlot, tier.name)}
                        className="flex items-center"
                      >
                        <Icon icon="close" size="18px" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-eventr-gray-100 text-sm">Total Tickets</p>
            <p className="text-sm md:text-lg">{calculateTotalTickets()}</p>
          </div>
          <div>
            <p className="text-eventr-gray-100 text-sm">Tickets Start on</p>
            <p className="text-sm md:text-lg">{startDate}</p>
          </div>
          <div>
            <p className="text-eventr-gray-100 text-sm">Event Ends on</p>
            <p className="text-sm md:text-lg">{endDate}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PerformersSection() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState<{ username: string; fullName: string; profilePicture: string } | null>(null);
    const [performers, setPerformers] = useState<{ username: string; fullName: string; profilePicture: string; role: string }[]>([]);
    const [selectedRole, setSelectedRole] = useState('');
  
    const handleSearch = async () => {
      // Simulate an API search request
      const mockResult = {
        username: searchTerm,
        fullName: 'John Doe',
        profilePicture: 'https://images.unsplash.com/photo-1516873240891-4bf014598ab4',
      };
      setSearchResult(mockResult);
    };
  
    const addPerformer = () => {
      if (searchResult) {
        setPerformers([...performers, { ...searchResult, role: selectedRole }]);
        setSearchResult(null);
        setSearchTerm('');
      }
    };
  
    const removePerformer = (username: string) => {
      setPerformers(performers.filter((p) => p.username !== username));
    };
  
    return (
      <div className=" mb-8 flex py-2 flex-col gap-4">
        <div className="flex flex-wrap gap-4 items-center">
            <Input
                responsive
                type="text"
                placeholder="Role"
                value={selectedRole}
                name='role'
                onChange={(e) => setSelectedRole(e.target.value)}
                width="w-full"
            />
            <Input
                name='search'
                responsive
                type="text"
                placeholder="Enter performer's username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                width="w-48 md:w-64"
            />
            
            <button onClick={handleSearch} className="text-white flex items-center">
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
            {searchResult && (
                <div className="flex flex-col gap-1 items-center justify-center bg-eventr-gray-800 p-2 rounded-lg">
                    <img src={searchResult.profilePicture} alt="Profile" className="w-28 h-28 rounded-full" />
                    <div className='text-center'>
                        <p className="text-white text-lg">{searchResult.fullName}</p>
                        <p className="text-eventr-gray-100 text-sm">@{searchResult.username}</p>
                        <p className="text-eventr-gray-100 text-sm">{selectedRole}</p>   
                    </div>
                    <button onClick={addPerformer}  className="w-full  mt-2 text-sm border-t border-eventr-gray-500">
                        Add
                    </button>
                </div> 
            )}
        </div>
        <div className="border flex gap-4 items-center border-dashed border-eventr-gray-500 rounded-md p-2 overflow-y-auto flex-grow">
            {performers.map((performer, index) => (
                <div key={index}  className="flex h-min flex-col items-center gap-1 justify-center rounded-lg bg-eventr-gray-800 p-2" >
                    <img src={performer.profilePicture} alt="Profile" className="w-28 h-28 rounded-full" />
                    <div className='text-center'>
                        <p className="text-white text-lg">{performer.fullName}</p>
                        <p className="text-eventr-gray-100 text-sm">@{performer.username}</p>
                        <p className="text-eventr-gray-100 text-sm">{performer.role}</p>
                    </div>
                    <button onClick={() => removePerformer(performer.username)} className="w-full mt-2 text-red-400 text-sm border-t border-eventr-gray-500">
                        Remove
                    </button>
                </div>
            ))}
            </div>
        </div>
      </div>
    );
  }
  
// function ConfirmationSection() {
//   return (
//     <div className="flex flex-col gap-6">
//       <h2 className="text-2xl font-semibold">Review Event Details</h2>
//       {/* Confirmation section implementation */}
//     </div>
//   );
// }

// function ImagesSection() {
//   return (
//     <div className="flex flex-col gap-6">
//       <h2 className="text-2xl font-semibold">Upload Event Images</h2>
//       {/* Images section implementation */}
//     </div>
//   );
// }

export const Route = createFileRoute('/host/create')({
  component: Page
});

function Page() {
  const { step, setStep } = useEventStore();

  return (
      <div className="flex flex-col px-2 lg:px-0 items-center justify-center h-screen">
          <ProgressNav />

          <div className="bg-eventr-gray-900 border-2 border-eventr-gray-800 px-4 md:px-6 lg:px-10 flex flex-col gap-2 py-4 lg:py-6 -translate-y-12 w-full lg:w-[880px] h-[640px] md:h-[560px] rounded-md">
              {step === 1 && <MetadataSection />}
              {step === 2 && <TicketSection />}
              {step === 3 && <PerformersSection />}
              <div className="w-full flex justify-end gap-4">
                  <button 
                      onClick={() => setStep(Math.max(1, step - 1))} 
                      className="w-24 py-1 gap-1 flex items-center justify-center text-lg duration-100 rounded-md border bg-eventr-gray/25 border-zinc-600"
                  >
                      <Icon icon="arrow_back" />Back
                  </button>
                  <button onClick={() => setStep(Math.min(5, step + 1))} className="w-24 text-black font-semibold bg-gradient-to-r from-amber-400 to-secondary py-1 gap-1 flex items-center justify-center text-lg duration-100 rounded-md">
                      Next
                  </button>
              </div>
          </div>

          <div className="relative w-[360px] md:w-[720px] lg:w-[820px] h-2 rounded-full bg-eventr-gray-500 -translate-y-8">
              <div 
                  className={`h-full ease-in-out ${step === 1 ? 'w-10' : step === 2 ? 'w-1/4' : step === 3 ? 'w-1/2' : step === 4 ? 'w-3/4' : 'w-full'} duration-500 bg-eventr-secondary rounded-full`}
              ></div>
              <div className="absolute -top-1.5 w-full flex justify-between">
                  <div />
                  {[...Array(4)].map((_, index) => (
                      <div 
                          key={index} 
                          className={`bg-eventr-secondary rounded-full h-6 w-6 ${step > index + 1 ? 'delay-500 duration-150' : 'opacity-0'}`}
                      >
                          <Icon className="text-eventr-gray-500" icon="task_alt" />
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}
