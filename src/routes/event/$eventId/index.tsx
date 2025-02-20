"use client"

import { createFileRoute } from "@tanstack/react-router"
import Icon from "@/ui/icon-wrapper"
import { ShareIcon } from "@/ui/icons"
import { useState } from "react"
import { Link } from "@tanstack/react-router"

export const Route = createFileRoute("/event/$eventId/")({
  component: RouteComponent,
})

function RouteComponent() {
  const [isBookingMenuOpen, setBookingMenuOpen] = useState(false)

  const performers = [
    { name: "Rohit Sharma", role: "Vada Pav Expert" },
    { name: "Virat Kohli", role: "Cover Drive Specialist" },
    { name: "MS Dhoni", role: "Helicopter Pilot" },
    { name: "Jasprit Bumrah", role: "Yorker King" },
    { name: "Ravindra Jadeja", role: "Sir Jadeja" },
    { name: "KL Rahul", role: "Stylish Opener" },
    { name: "Hardik Pandya", role: "All-Rounder" },
    { name: "Rishabh Pant", role: "Babysitter" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="lg:flex lg:gap-8 relative">
        {/* Left column */}
        <div className="lg:w-2/3">
          <div className="relative">
            <img src="/concert.jpg" alt="event" className="w-full aspect-video object-cover rounded-lg" />
            <button className="absolute right-4 bottom-4 p-2 bg-eventr-gray-100/20 rounded-full">
              <ShareIcon />
            </button>
          </div>

          <div className="mt-6">
            <h1 className="font-bold text-3xl text-white">Big brown fox jumped</h1>
            <p className="flex items-center text-white mt-2">
            <Icon icon="location_on" size="18px" fill={1} />

              Really long concert location
            </p>
            <div className="my-4 flex flex-wrap items-center gap-2">
              <span className="bg-primary px-3 py-1 rounded-md text-white text-sm">Concerts</span>
              {["tag1", "tag2", "tag3"].map((tag, index) => (
                <span key={index} className="px-3 py-1 rounded-md border border-eventr-gray-500 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="border-y-2 py-4 border-eventr-gray-100 w-full my-6">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="w-full my-6 bg-eventr-gray-100/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Instructions</h2>
              <ul className="list-disc pl-5">
                <li>No outside food allowed</li>
                <li>No smoking</li>
              </ul>
            </div>
          </div>
        </div>

{/* Right column - Compact height */}
<div className="lg:w-[28%] lg:fixed lg:right-8 lg:top-20 max-h-[90vh]">

  <div className="bg-white rounded-lg shadow-lg p-3">
    <div className="space-y-4">
      {/* Event Details */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Event Details</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <Icon icon="calendar_today" size="20px" fill={1} className="text-black"/>
            <p className="text-sm text-gray-800">28th Nov, 2025</p>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="schedule" size="20px" fill={1} className="text-black"/>
            <p className="text-sm text-gray-800">7:00 PM - 10:00 PM</p>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="location_on" size="20px" fill={1} className="text-black"/>
            <p className="text-sm text-gray-800">Really long concert location</p>
          </div>
          <div className="flex items-center gap-3">
            <Icon icon="door_front" size="20px" fill={1} className="text-black"/>
            <p className="text-sm text-gray-800">18+</p>
          </div>
        </div>
      </div>

      {/* Hosted By */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Hosted By</h2>
        <Link
          to="/u/$uId"
          params={{ uId: "virat" }}
          className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors"
        >
          <div className="w-10 h-10 bg-eventr-gray-500 rounded-full" />
          <div>
            <p className="text-sm font-bold text-gray-900">Virat Kohli</p>
            <p className="text-xs text-gray-700">Indian Cricket Bench</p>
          </div>
        </Link>
      </div>

      {/* Performers */}
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Performers</h2>
        <div className="grid grid-cols-4 gap-2">
          {performers.map((performer, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-eventr-gray-500" />
              <p className="text-xs font-bold mt-1 text-center text-gray-900">{performer.name}</p>
              <p className="text-xs text-center leading-tight text-gray-700">{performer.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Google Calendar Button */}
      <a
  href={`https://www.google.com/calendar/render?action=TEMPLATE&text=Big Brown Fox Jumped&dates=20251128T190000Z/20251128T220000Z&details=Live concert event&location=Really long concert location`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full text-sm font-medium text-gray-900 bg-amber-500 hover:bg-amber-600 px-6 py-4 rounded-full transition-colors shadow-md"
>
  <div className="flex items-center justify-center w-5 h-5">
    <Icon icon="calendar_today" size="20px" fill={1}/>
  </div>
  <span>Add to Google Calendar</span>
</a>

      {/* Pricing and Booking */}
      <div>
        <p className="text-sm text-gray-700">General</p>
        <p className="text-xl font-semibold mb-2 text-gray-900">
          ₹499 <span className="text-sm text-gray-700">Onwards</span>
        </p>
        <button
          onClick={() => setBookingMenuOpen(true)}
          className="w-full text-base font-semibold bg-purple-600 text-white px-4 py-3 rounded-full hover:bg-purple-700 transition-colors shadow-md"
        >
          Book Now
        </button>
      </div>
    </div>
  </div>
</div>
      </div>

      {/* Booking Menu Modal */}
      {isBookingMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-amber-300 to-amber-100 p-8 rounded-2xl w-full max-w-md shadow-xl">
            <div className="flex justify-between mb-6 items-center">
              <h2 className="text-2xl font-bold text-gray-900">Book Your Ticket</h2>
              <button
                onClick={() => setBookingMenuOpen(false)}
                className="hover:bg-amber-200/50 p-2 rounded-full transition-colors"
              >
                <Icon icon="close" size="32px" fill={1}/>
              </button>
            </div>
            <div>
              <p className="text-gray-700">Select your ticket details and proceed to payment.</p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile bottom bar */}
      <div aria-label="Booking Bottom Bar" className="fixed inset-x-0 bottom-4 px-4 z-40 lg:hidden">
        <div className="p-4 flex items-center gap-4 bg-gradient-to-r from-amber-400 to-amber-200 rounded-full shadow-lg">
          <div className="flex flex-col flex-grow">
            <p id="tier-info" className="text-sm text-gray-700">
              General
            </p>
            <p id="tier-price" className="text-xl font-semibold text-gray-900 -mt-1">
              ₹499 <span className="text-sm text-gray-700">Onwards</span>
            </p>
          </div>
          <button
  onClick={() => setBookingMenuOpen(true)}
  className="w-full text-base font-semibold bg-purple-600 text-white px-6 py-4 rounded-full hover:bg-purple-700 transition-colors shadow-md"
>
  Book Now
</button>
        </div>
      </div>
    </div>
  )
}

